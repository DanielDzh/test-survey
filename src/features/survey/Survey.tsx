'use client';

import { useDispatch, useSelector } from 'react-redux';
import {
  saveAnswer,
  selectGender,
  selectPresenceOfChildren,
  setGender,
  setPresenceOfChildren,
} from '@/redux/slices/surveySlice';
import { QuestionOption, QuestionState } from '@models';
import { useRouter } from 'next/navigation';
import { vailablePages } from '@constants';
import { Genders } from '@redux/slices/types';
import { Button } from '@components';
import { SubTitle, Wrapper } from './Survey.styled';

export const SurveyForm = ({
  questionState,
  isLastQuestion,
}: {
  questionState: QuestionState;
  isLastQuestion?: boolean;
}) => {
  const { text, subText, id, options, nextPageName } = questionState;
  const dispatch = useDispatch();
  const gender = useSelector(selectGender);
  const presenceOfChildren = useSelector(selectPresenceOfChildren);
  const router = useRouter();

  const handleAnswer = ({ value, nextQuestionId }: QuestionOption) => {
    handleSaveAnswerData(value);
    if (nextPageName && vailablePages.includes(nextPageName)) {
      router.push(`/${nextPageName}?nextQuestionId=${nextQuestionId}`);
    } else if (isLastQuestion) {
      router.push('/result');
    } else {
      router.push(`/survey/${nextQuestionId || Number(id) + 1}`);
    }
  };

  const formatQuestionText = () => {
    let formattedText = text.replace('{gender}', gender.startsWith('{gender}') ? gender : gender.toLowerCase());
    formattedText = formattedText.replace(
      '{who have children (if have children)}',
      presenceOfChildren ? 'who have children' : '',
    );
    return formattedText;
  };

  const handleSaveAnswerData = (value: string) => {
    dispatch(saveAnswer({ question: formatQuestionText(), answer: value }));
    if (text.includes('Select your gender:')) {
      dispatch(setGender(value as Genders));
    }
    if (text.includes('Are you a single parent') || text.includes('Are you a parent')) {
      dispatch(setPresenceOfChildren(value == 'Yes'));
    }
  };

  return (
    <>
      <h1>{formatQuestionText()}</h1>
      {subText && <SubTitle>{subText}</SubTitle>}

      <Wrapper>
        {options?.map((option: QuestionOption) => (
          <Button key={option.value} onClick={() => handleAnswer(option)}>
            {option.value}
          </Button>
        ))}
      </Wrapper>
    </>
  );
};

export default SurveyForm;
