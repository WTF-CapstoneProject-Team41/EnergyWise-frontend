import BuyEnergyForm from "../../components/shared/BuyEnergyForm";
import styles from "./BuyEnergy.module.css";

function BuyEnergy() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Buy Energy</h1>
        <div className={styles.avatar}>SA</div>
      </div>
      <BuyEnergyForm variant="dashboard" />
    </div>
  );
}

export default BuyEnergy;
