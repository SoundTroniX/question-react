import { ratingButtons } from "@features/question/constants/constants";
import styles from "./style.module.css";
import { selectActiveRate } from "@features/question/model/questionsFilterSelectors";
import { setRating } from "@features/question/model/questionsFilterSlice";
import { useAppDispatch, useAppSelector } from "@app/providers/store";

export default function QuestionRating() {
  const dispatch = useAppDispatch();
  const activeRating = useAppSelector(selectActiveRate);
  const handleClick = (id: number) => {
    const button = ratingButtons.find((btn) => btn.id === id);
    const isActive = activeRating === id;
    if (!button) {
      return;
    }
    dispatch(setRating(isActive ? [] : button.value));
  };
  return (
    <div className={styles.rating}>
      <h3 className={styles.title}>Рейтинг</h3>
      <div className={styles.wrapper}>
        {ratingButtons.map((btn) => {
          return (
            <button
              onClick={() => handleClick(btn.id)}
              className={`${styles.btn} ${activeRating === btn.id ? styles.selected : null}`}
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
