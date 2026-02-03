import { useFetchSkillsQuery } from "@entities/skills/api/skillsApi";
import styles from "./style.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@app/providers/store";
import {
  selectSelectedSkillIds,
  selectSpecializationsFilter,
} from "@features/question/model/questionsFilterSelectors";
import { selectSkill } from "@features/question/model/questionsFilterSlice";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
export default function QuestionSkills() {
  const activeSpecializationId = useAppSelector(selectSpecializationsFilter);
  const {
    data: skills,
    isLoading,
    isFetching,
  } = useFetchSkillsQuery({
    specializationId: activeSpecializationId ?? 11,
  });
  const selectedSkillId = useAppSelector(selectSelectedSkillIds);
  const dispatch = useAppDispatch();
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills?.slice(0, 2);
  function handleClick() {
    setShowAll((prev) => !prev);
  }
  if (isFetching || isLoading) {
    return <Skeleton count={1}></Skeleton>;
  }
  return (
    <div className={styles.skills}>
      <h3 className={styles.title}>Навыки</h3>
      <div className={styles.wrapper}>
        {visibleSkills?.map((skill) => {
          return (
            <button
              onClick={() => {
                dispatch(selectSkill(skill));
              }}
              className={`${styles.btn} ${
                selectedSkillId.includes(skill.id) ? styles.selected : ""
              }`}
              key={skill.id}
            >
              {skill.title}
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
