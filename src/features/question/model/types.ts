import type { Skill } from '@entities/skills';
export interface QuestionFilterState {
	specializationsId: number | null;
	skills: Skill[];
	rate: number[];
	complexity: number[];
	keywords: string[];
}
