import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@app/providers/store/configs/store';
import type { Skill } from '@entities/skills';

const selectQuestionFiltersState = (state: RootState) => state.questionFilters;

export const selectSkillsFilter = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.skills
);


export const selectSpecializationsFilter = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.specializationsId
);

export const selectActiveRate = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.rate[0] ?? null
);

export const selectActiveComplexity = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.complexity[0] ?? null
);

export const selectAllComplexity = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.complexity
);

export const selectAllRate = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.rate
);

export const selectKeywords = createSelector(
	[selectQuestionFiltersState],
	(filters) => filters.keywords
);

export const selectQuestionFilters = createSelector(
	[
		selectSkillsFilter,
		selectSpecializationsFilter,
		selectAllComplexity,
		selectAllRate,
		selectKeywords,
	],
	(skills, specializationId, complexity, rate, keywords) => ({
		skills: skills.map((skill: Skill) => skill.id),
		specialization: specializationId,
		complexity,
		rate,
		keywords,
	})
);

export const selectSelectedSkillIds = createSelector(
	[selectSkillsFilter],
	(skills) => skills.map((skill: Skill) => skill.id)
);

