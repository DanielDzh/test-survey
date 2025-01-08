import { notFound } from 'next/navigation';
import surveys from '@configs/surveyConfig.json';
import { Survey } from '@features';
import { QuestionState } from '@models';

export async function generateStaticParams() {
  return surveys.questions.map((survey) => ({ slug: survey.id }));
}

const SurveyPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const questionState = surveys.questions.find((s) => s.id === slug) as QuestionState;
  const lastQuestionId = surveys.questions[surveys.questions.length - 1].id;

  if (!questionState) {
    notFound();
  }

  return <Survey questionState={questionState} isLastQuestion={questionState.id === lastQuestionId} />;
};

export default SurveyPage;
