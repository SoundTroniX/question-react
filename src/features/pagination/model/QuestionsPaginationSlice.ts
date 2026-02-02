import { selectSkill, setSpecialization, setComplexity, setRating, setSearch, resetFilters } from "@features/question/model/questionsFilterSlice";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuestionsPaginationPageState {
  page: number;
}

const initialState: QuestionsPaginationPageState = {
  page: 1,
};

const questionsPaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        selectSkill,
        setSpecialization,
        setComplexity,
        setRating,
        setSearch,
        resetFilters
      ),
      (state) => {
        state.page = 1;
      }
    );
  },
});

export const { setPage, resetPage } = questionsPaginationSlice.actions;
export const questionsPageReducer = questionsPaginationSlice.reducer;
