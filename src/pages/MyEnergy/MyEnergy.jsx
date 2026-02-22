import { useState } from "react";
import styles from "./MyEnergy.module.css";
import EnergyUnits from "./tabs/EnergyUnits";
import Appliances from "./tabs/Appliances";
import PurchaseHistory from "./tabs/PurchaseHistory";

const TABS = ["Energy Units", "Appliances", "Purchase History"];

function MyEnergy() {
  const [activeTab, setActiveTab] = useState("Energy Units");
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
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "Energy Units" && <EnergyUnits />}
        {activeTab === "Appliances" && <Appliances />}
        {activeTab === "Purchase History" && <PurchaseHistory />}
      </div>
    </div>
  );
}

export default MyEnergy;
