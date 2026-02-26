import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
