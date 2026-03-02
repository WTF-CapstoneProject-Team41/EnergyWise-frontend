import BuyEnergyForm from "../../components/shared/BuyEnergyForm";
import styles from "./BuyEnergy.module.css";
import { useUser } from "../../context/UserContext";

function BuyEnergy() {
  const { user } = useUser();
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Buy Energy</h1>
        <div className={styles.avatar}>{user?.initials || "U"}</div>
      </div>
      <BuyEnergyForm variant="dashboard" />
    </div>
  );
}

export default BuyEnergy;
