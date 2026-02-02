import styles from "./NotFoundPage.module.css";

import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          404
          <br /> Страница не найдена
        </h1>
        <div className={styles.actions}>
          <button className={styles.goToMain} onClick={handleGoMain}>На главную</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
