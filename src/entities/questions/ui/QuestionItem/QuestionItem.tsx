import { useState } from "react";
import styles from "./style.module.css";
import type { PublicQuestion } from "@entities/questions/model/types";
import { Link } from "react-router-dom";
import preview from "@shared/assets/images/preview.jpg"
import { arrowRight } from "@shared/assets";
interface Props {
  question: PublicQuestion;
}
export default function QuestionItem({ question }: Props) {
  const { id, title, rate, complexity, shortAnswer } = question;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <li className={styles.item} onClick={handleClick}>
      <div className={styles.wrapper}>
        <span className={styles.dot}>•</span>
        <div className={styles.title}>{title}</div>
        <span
          className={`${styles.arrow} ${isOpen ? styles.arrowActive : ""}`}
        ></span>
      </div>

      {isOpen ? (
        <div className={styles.content}>
          <div className={styles.detail}>
            <span className={styles.rate}>Рейтинг:</span>
            <span className={styles.range}>{rate}</span>
            <span className={styles.complexity}>Сложность:</span>
            <span className={styles.range}>{complexity}</span>
          </div>
          <img className={styles.img} src={preview}></img>
          <p className={styles.p}>{shortAnswer}</p>
          <Link to={`/detail/${id}`} className={styles.link}>
            Подробнее
            <img src={arrowRight} alt={"arrowRight"} />
          </Link>
        </div>
      ) : null}
    </li>
  );
}
