import type { PublicQuestion } from "@entities/questions/model/types";
import questionLogo from '@shared/assets/images/logoQuestion.png'
import styles from "./style.module.css";
interface Props {
  question: PublicQuestion;
}
export default function QuestionsInfo({ question }: Props) {
  const { title, description, shortAnswer, longAnswer } = question;
  return (
    <div className={styles.info}>
      {/* ---- */}
      <div className={styles.wrapper}>
        <div className={styles.brief}>
          <img className={styles.img} src={questionLogo}></img>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
      {/* ---- */}
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Короткий ответ</h3>
        <p className={styles.shortAnswer}>{shortAnswer}</p>
      </div>
      {/* ---- */}
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Развёрнутый ответ</h3>
        <p className={styles.longAnswer}>{longAnswer}</p>
      </div>
    </div>
  );
}
