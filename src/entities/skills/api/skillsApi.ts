import { baseApi } from '@shared/api';
import type { Skill } from '../model/types';
import type { ApiResponse } from '@shared/model';
export interface SkillsParams {
	specializationId: number;
}

const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchSkills: builder.query<Skill[], SkillsParams>({
			query: ({specializationId}) => ({
				url: 'skills',
				params: {
					specializations: specializationId,
				},
			}),
			transformResponse: (response: ApiResponse<Skill>) => response.data,
		}),
	}),
});


export const { useFetchSkillsQuery } = skillsApi;

export default skillsApi;
