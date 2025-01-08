import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genders, SurveyState } from './types';
import { RootState } from '@redux/store';



const initialState: SurveyState = {
  questionsWithAnswers: null,
  gender: 'Male',
  presenceOfChildren: false,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<{ question: string; answer: string }>) => {
      if(state.questionsWithAnswers){
        const id = state.questionsWithAnswers.length + 1
        state.questionsWithAnswers = [...state.questionsWithAnswers, { id, ...action.payload } ]
      } else {
        state.questionsWithAnswers = [ { id: 1, ...action.payload } ];
      }
    },
    setGender: (state, action: PayloadAction<Genders>) => {
      state.gender = action.payload
    },
    setPresenceOfChildren: (state, action: PayloadAction<boolean>) => {
      state.presenceOfChildren = action.payload
    },
  },
});

export const { saveAnswer, setGender, setPresenceOfChildren } = surveySlice.actions;
export const selectGender = (state: RootState) => state.survey.gender;
export const selectPresenceOfChildren = (state: RootState) => state.survey.presenceOfChildren;
export const selectQuestionsWithAnswers = (state: RootState) => state.survey.questionsWithAnswers;
export default surveySlice.reducer;
