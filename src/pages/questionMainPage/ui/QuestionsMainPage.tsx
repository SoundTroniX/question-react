import { QuestionsList, QuestionsFilters } from "@widgets/questions";
import styles from "./style.module.css";

export default function QuestionsMainPage() {
  return (
    <main className={styles.questions}>
      <QuestionsList></QuestionsList>
      <QuestionsFilters></QuestionsFilters>
    </main>
  );
}
