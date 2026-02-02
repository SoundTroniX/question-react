import styles from "./style.module.css";
interface Props {
    rate: number
    complexity: number
}
export default function QuestionLevelSidebar({rate, complexity} : Props) {
  return (
    <div className={styles.level}>
      <h4 className={styles.title}>Уровень:</h4>
      <div className={styles.wrapper}>
        <span className={styles.rate}>Рейтинг:</span>
        <span className={styles.range}>{rate}</span>
        <span className={styles.complexity}>Сложность:</span>
        <span className={styles.range}>{complexity}</span>
      </div>
    </div>
  );
}
