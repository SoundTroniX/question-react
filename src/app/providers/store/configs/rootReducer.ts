
import { questionsPageReducer } from '@features/pagination/model/QuestionsPaginationSlice';
import { questionFilterReducer } from '@features/question/model/questionsFilterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@shared/api';

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
	questionFilters: questionFilterReducer,
	questionsPage: questionsPageReducer,
});
