import { useState } from "react";
import styles from "./PurchaseHistory.module.css";

const FILTERS = ["Last 7 days", "Last 30 days", "Last 90 days"];

function PurchaseHistory() {
  const [activeFilter, setActiveFilter] = useState("Last 30 days");
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterActive : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <p>Purchase History</p>
    </div>
  );
}

export default PurchaseHistory;
