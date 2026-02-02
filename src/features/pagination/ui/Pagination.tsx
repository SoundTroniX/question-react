import type { PublicQuestionsApiResponse } from "@entities/questions/model/types";
import styles from "./style.module.css";
import { useAppDispatch } from "@app/providers/store";
import { useSelector } from "react-redux";
import { selectQuestionsPage } from "../model/QuestionsPaginationSelectors";
import { setPage } from "../model/QuestionsPaginationSlice";
import { DOTS, usePagination } from "@shared/hooks/usePagination";
interface Props {
  questionsResponse: PublicQuestionsApiResponse;
}
export default function Pagination({ questionsResponse }: Props) {
  const dispatch = useAppDispatch();
  const page = useSelector(selectQuestionsPage);

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };
  const handleNextPage = () => {
    if (
      questionsResponse &&
      page < Math.ceil(questionsResponse.total / questionsResponse.limit)
    ) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePageClick = (newPage: number) => {
    dispatch(setPage(newPage));
  };
  const totalPages = Math.ceil(
    questionsResponse.total / questionsResponse.limit,
  );
  const pages = usePagination({
    page,
    totalPages,
    siblingCount: 2,
  });
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;
  if (
    !questionsResponse?.data ||
    questionsResponse.total <= questionsResponse.limit
  )
    return null;
  return (
    <div className={styles.wrapper}>
      <button
        disabled={isFirstPage}
        onClick={handlePreviousPage}
        className={styles.arrowLeft}
      ></button>
      <div className={styles.list}>
        {pages.map((item, index) => {
          if (item === DOTS) {
            return (
              <span key={`dots-${index}`} className={styles.dots}>
                …
              </span>
            );
          }

          const isActive = item === page;

          return (
            <button
              key={item}
              disabled={isActive}
              className={styles.pageButton}
              onClick={() => handlePageClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        disabled={isLastPage}
        onClick={handleNextPage}
        className={styles.arrowRight}
      ></button>
    </div>
  );
}
