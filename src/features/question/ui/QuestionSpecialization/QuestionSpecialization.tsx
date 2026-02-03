import { useFetchSpecializationsQuery } from "@entities/specialization/api/specializationApi";
import styles from "./style.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@app/providers/store";
import { setSpecialization } from "@features/question/model/questionsFilterSlice";
import { selectSpecializationsFilter } from "@features/question/model/questionsFilterSelectors";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
export default function QuestionSpecialization() {
  const {
    data: specializations,
    isLoading,
    isFetching,
  } = useFetchSpecializationsQuery();
  const selectedSpecializationId = useAppSelector(selectSpecializationsFilter);
  const [showAll, setShowAll] = useState(false);
  const dispatch = useAppDispatch();
  const visibleSpecializations = showAll
    ? specializations
    : specializations?.slice(0, 2);
  function handleClick() {
    setShowAll((prev) => !prev);
  }
  if (isFetching || isLoading) {
    return <Skeleton count={1}></Skeleton>;
  }
  return (
    <div className={styles.specializations}>
      <h3 className={styles.title}>Специализация</h3>
      <div className={styles.wrapper}>
        {visibleSpecializations?.map((special) => {
          const cleanTitle = special.title.replace(/ Developer$/i, '');
          return (
            <button
              onClick={() => {
                dispatch(setSpecialization(special.id));
              }}
              className={`${styles.btn} ${selectedSpecializationId === special.id ? styles.selected : null}`}
              key={special.id}
            >
              {cleanTitle}
            </button>
          );
        })}
      </div>
      <button onClick={handleClick} className={styles.btnShowAll}>
        {showAll ? "Скрыть" : "Посмотреть все"}
      </button>
    </div>
  );
}
