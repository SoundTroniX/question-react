import { baseApi } from "@shared/api";
import type {
  PublicQuestionsApiResponse,
  PublicQuestionParams,
} from "../model/types";

const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<
      PublicQuestionsApiResponse,
      PublicQuestionParams
    >({
      query: (params) => ({
        url: "questions/public-questions",
        params: params,
      }),
    }),
    fetchQuestionById: builder.query({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useFetchQuestionByIdQuery, useFetchQuestionsQuery } =
  questionApi;

export default questionApi;
