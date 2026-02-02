import Pagination from "@features/pagination/ui/Pagination";
import styles from "../QuestionsList/style.module.css";
import { useFetchQuestionsQuery } from "@entities/questions/api/questionsApi";
import { useAppDispatch, useAppSelector } from "@app/providers/store";
import { selectQuestionsPage } from "@features/pagination/model/QuestionsPaginationSelectors";

import QuestionItem from "@entities/questions/ui/QuestionItem/QuestionItem";
import { selectQuestionFilters } from "@features/question/model/questionsFilterSelectors";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
import { useFetchSpecializationsQuery } from "@entities/specialization/api/specializationApi";
import EmptyState from "@shared/ui/EmptyState/EmptyState";
import { resetFilters } from "@features/question/model/questionsFilterSlice";
export default function QuestionsList() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(selectQuestionsPage);
  const filters = useAppSelector(selectQuestionFilters);
  const { data: specializations } = useFetchSpecializationsQuery();
  const selectedSpecializationTitle = specializations?.find(
    (spec) => spec.id === filters.specialization,
  )?.title;
  const queryArgs = {
    page,
    limit: 10,

    ...(filters.specialization != null && {
      specialization: filters.specialization,
    }),

    ...(filters.skills.length > 0 && { skills: filters.skills }),

    ...(filters.keywords.length > 0 && { keywords: filters.keywords }),

    ...(filters.rate.length > 0 && { rate: filters.rate }),
    ...(filters.complexity.length > 0 && { complexity: filters.complexity }),
  };

  const {
    data: questionsResponse,
    isLoading,
    isFetching,
  } = useFetchQuestionsQuery(queryArgs);
  if (isLoading || isFetching) return <Skeleton count={10} />;
  if (!questionsResponse?.data || questionsResponse.data.length === 0) {
    return <EmptyState onAction={() => {
          dispatch(resetFilters());
        }}></EmptyState>;
  }
  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <h3 className={styles.text}>Вопросы {selectedSpecializationTitle}</h3>
        <ul className={styles.list}>
          {questionsResponse.data.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </ul>
        <Pagination questionsResponse={questionsResponse} />
      </article>
    </div>
  );
}
