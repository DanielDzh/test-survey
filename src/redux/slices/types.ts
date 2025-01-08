export interface SurveyState {
  questionsWithAnswers: {
  id: number
   question: string
   answer: string
  }[] | null;
  gender: Genders;
  presenceOfChildren: boolean
}

export type Genders = 'Male' | 'Female'
