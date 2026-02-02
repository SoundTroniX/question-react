import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Image from "../../../../shared/ui/Image/Image";
import logo from '@shared/assets/images/Frame 2087327446.svg'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"}>
          <Image alt='logo yeahub' image={logo}></Image>
        </Link>

        <Link className={styles.link} to="/">
          База вопросов
        </Link>
        <Link className={styles.link} to="training">
          Тренажер
        </Link>
      </div>
      <div className={styles.container}>
        <button className={`${styles.btn} ${styles.in}`}>Вход</button>
        <button className={styles.btn}>Регистрация</button>
      </div>
    </header>
  );
}
