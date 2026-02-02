import { Outlet } from "react-router-dom";
import styles from "./BaseLayout.module.css";

import { Header } from "@widgets/header/ui";
function BaseLayout() {
  return (
    <div className={styles.base}>
      <Header></Header>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
