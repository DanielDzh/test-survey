export interface QuestionState {
  id: string;
  nextPageName?: string;
  text: string;
  screenType?: 'text' | 'multiple-choice';
  subText?: string;
  options?: QuestionOption[];
}

export type QuestionOption = {
   value: string
   nextQuestionId?: string
}