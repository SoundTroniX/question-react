import styles from "./style.module.css";
import type { Skill } from "@entities/skills";
interface Props {
  questionSkills: Skill[];
}
export default function QuestionSkillsSidebar({ questionSkills }: Props) {
  return (
    <div className={styles.skills}>
      <h4 className={styles.title}>Навыки:</h4>
      <div className={styles.btns}>
        {questionSkills?.map(({ id, title }) => (
          <button className={styles.btn} key={id}>
            {title}
          </button>
        ))}
        
      </div>
    </div>
  );
}
