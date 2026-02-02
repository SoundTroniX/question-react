import { complexityButtons } from "@features/question/constants/constants";
import styles from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@app/providers/store";
import { selectAllComplexity } from "@features/question/model/questionsFilterSelectors";
import { setComplexity } from "@features/question/model/questionsFilterSlice";

export default function QuestionComplexity() {
  const dispatch = useAppDispatch();
  const activeComplexity = useAppSelector(selectAllComplexity);
  const handleClick = (id: number) => {
    const button = complexityButtons.find((btn) => btn.id === id);
    if (!button) {
      return;
    }
    const isActive =
      activeComplexity.length === button.values.length &&
      button.values.every((value) => activeComplexity.includes(value));
    dispatch(setComplexity(isActive ? [] : button.values));
  };
  return (
    <div className={styles.complexity}>
      <h3 className={styles.title}>Уровень сложности</h3>
      <div className={styles.wrapper}>
        {complexityButtons.map((btn) => {
          return (
            <button
              onClick={() => handleClick(btn.id)}
              className={`${styles.btn} ${btn.values.every((value) => activeComplexity.includes(value)) ? styles.selected : null}`}
              key={btn.id}
            >
              {btn.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
