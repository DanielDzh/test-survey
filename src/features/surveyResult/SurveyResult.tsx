'use client';

import { selectQuestionsWithAnswers } from '@redux/slices/surveySlice';
import { useSelector } from 'react-redux';
import { SubTitle, SurveyResultItem } from './SurveyResult.module';
import { useRouter } from 'next/navigation';
import { Button } from '@components';

const SurveyResult = () => {
  const router = useRouter();
  const answersState = useSelector(selectQuestionsWithAnswers);

  const handleGoHome = () => {
    router.replace('/');
  };

  if (!answersState) {
    handleGoHome();
  }

  return (
    <>
      <h1>Thank you for completing the survey!</h1>
      <SubTitle>Here are your answers:</SubTitle>
      {answersState?.map(({ id, answer, question }) => (
        <SurveyResultItem key={id}>
          <strong>{question}: </strong>
          {answer}
        </SurveyResultItem>
      ))}
      <Button onClick={handleGoHome}>Take the survey again</Button>
    </>
  );
};

export default SurveyResult;
