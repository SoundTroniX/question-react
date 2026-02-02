import { useFetchQuestionByIdQuery } from "@entities/questions/api/questionsApi";
import { arrowLeft } from "@shared/assets";
import { useParams, Link } from "react-router-dom";
import styles from "./style.module.css";
import QuestionsInfo from "@widgets/questions/ui/QuestionsInfo/QuestionsInfo";
import { QuestionsSidebar } from "@widgets/questions";
import Skeleton from "@shared/ui/Skeleton/Skeleton";
const QuestionDetailPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { data: question, isLoading } = useFetchQuestionByIdQuery(questionId!);
  if (isLoading) return <Skeleton count={10}></Skeleton>;
  if (!question) return <div>Ошибка</div>;
  return (
    <main className={styles.detail}>
      <Link to={"/"} className={styles.link}>
        <img src={arrowLeft} alt={"arrowLeft"} />
        <span className={styles.back}>Назад</span>
      </Link>
      <div className={styles.wrapper}>
        <QuestionsInfo question={question}></QuestionsInfo>
        <QuestionsSidebar question={question}></QuestionsSidebar>
      </div>
    </main>
  );
};

export default QuestionDetailPage;
