import LogPurchaseForm from "../../components/shared/LogPurchaseForm";
import styles from "./LogPurchase.module.css";

function LogPurchase() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Log Purchase</h1>
        <div className={styles.avatar}>SA</div>
      </div>
      <LogPurchaseForm variant="dashboard" />
    </div>
  );
}

export default LogPurchase;
