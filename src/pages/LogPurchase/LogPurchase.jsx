import LogPurchaseForm from "../../components/shared/LogPurchaseForm";
import styles from "./LogPurchase.module.css";
import { useUser } from "../../context/UserContext";

function LogPurchase() {
  const { user } = useUser();
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Log Purchase</h1>
        <div className={styles.avatar}>{user?.initials || "U"}</div>
      </div>
      <LogPurchaseForm variant="dashboard" />
    </div>
  );
}

export default LogPurchase;
