import type { Skill } from "@entities/skills";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuestionFilterState } from "./types";

const initialState: QuestionFilterState = {
	specializationsId: null,
	skills: [],
	rate: [],
	complexity: [],
	keywords: [],
};

const questionsFilterSlice = createSlice({
    name: 'questionFilter',
    initialState,
    reducers:  {
        selectSkill(state, action: PayloadAction<Skill>) {
			const skill = action.payload;

			const isAlreadySelected = state.skills.some(({ id }) => id === skill.id);

			state.skills = isAlreadySelected
				? state.skills.filter(({ id }) => id !== skill.id)
				: [...state.skills, skill];
		},
		setSpecialization(state, action: PayloadAction<number | null>) {
			const newSpecializationId = action.payload;

			if (state.specializationsId === newSpecializationId) return;

			state.specializationsId = newSpecializationId;
			state.skills = [];
		},

		setComplexity(state, action: PayloadAction<number[]>) {
			state.complexity = action.payload;
		},

		setRating(state, action: PayloadAction<number[]>) {
			state.rate = action.payload;
		},

		setSearch(state, action: PayloadAction<string>) {
			const trimmed = action.payload.trim();
			state.keywords = trimmed ? [trimmed] : [];
		},

		resetFilters(state) {
			return {
				...initialState,
				specializationsId: state.specializationsId,
			};
		},
    }
})

export const {
	selectSkill,
	setSpecialization,
	setComplexity,
	setRating,
	setSearch,
	resetFilters,
} = questionsFilterSlice.actions;

export const questionFilterReducer = questionsFilterSlice.reducer;
