import styles from "./MyEnergy.module.css";

function MyEnergy() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>My Energy</h1>
          <p className={styles.subtitle}>
            Manage your energy units and appliances
          </p>
        </div>
        <div className={styles.avatar}>SA</div>
      </div>
    </div>
  );
}

export default MyEnergy;
