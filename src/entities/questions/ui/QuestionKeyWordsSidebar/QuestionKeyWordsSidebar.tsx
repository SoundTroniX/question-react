import styles from "./style.module.css";
interface Props {
    keywords: string[]
}
export default function QuestionKeyWordsSidebar( { keywords }: Props ) {
  return (
    <div className={styles.keywords}>
      <h4 className={styles.title}>Ключевые слова:</h4>
      <div className={styles.wrapper}>
        {keywords?.map((keyword) => (
          <span className={styles.keyword} key={keyword}>
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  );
}
