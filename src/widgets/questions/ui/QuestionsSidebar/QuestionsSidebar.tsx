import type { PublicQuestion } from "@entities/questions/model/types";
import styles from "../QuestionsSidebar/style.module.css";

import QuestionSkillsSidebar from "@entities/questions/ui/QuestionSkillsSidebar/QuestionSkillsSidebar";
import QuestionLevelSidebar from "@entities/questions/ui/QuestionLevelSidebar/QuestionLevelSidebar";
import QuestionKeyWordsSidebar from "@entities/questions/ui/QuestionKeyWordsSidebar/QuestionKeyWordsSidebar";

interface Props {
  question: PublicQuestion;
}
export default function QuestionsSidebar({ question }: Props) {
  const { rate, complexity, questionSkills, keywords } = question;
  return (
    <div className={styles.sidebar}>
      <QuestionLevelSidebar
        rate={rate}
        complexity={complexity}
      ></QuestionLevelSidebar>
      <QuestionSkillsSidebar
        questionSkills={questionSkills}
      ></QuestionSkillsSidebar>
      <QuestionKeyWordsSidebar keywords={keywords}></QuestionKeyWordsSidebar>
    </div>
  );
}
