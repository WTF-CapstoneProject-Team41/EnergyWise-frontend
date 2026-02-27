import BuyEnergyForm from "../../components/shared/BuyEnergyForm";
import styles from "./BuyEnergyOnboarding.module.css";

function BuyEnergyOnboarding() {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
          >
            <rect width="40" height="40" fill="#008070" rx="12" />
            <path
              fill="#F59E0B"
              stroke="#F59E0B"
              strokeWidth=".047"
              d="m24.97 10.023-1.735 6.971-.006.03h4.975L16.068 29.917l2.715-10.912.008-.03H14.79l2.229-8.953h7.952Z"
            />
          </svg>
        </div>
        <span className={styles.logoName}>EnergyWise</span>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Buy Energy Unit</h1>
        <BuyEnergyForm variant="onboarding" />
      </div>
    </div>
  );
}

export default BuyEnergyOnboarding;
