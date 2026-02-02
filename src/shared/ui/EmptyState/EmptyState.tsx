import styles from "./style.module.css";
interface Props {
    onAction?: () => void;
}
export default function EmptyState({onAction} : Props) {
  return (
    <div className={styles.emptyState}>
      <h4 className={styles.title}>Вопросов нет</h4>
      <p className={styles.message}>Попробуйте сбросить фильтры</p>
      <button className={styles.button} onClick={onAction}>Сбросить</button>
    </div>
  );
}
