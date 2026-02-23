import { useState } from "react";
import styles from "./PurchaseHistory.module.css";

const FILTERS = ["Last 7 days", "Last 30 days", "Last 90 days"];

const PURCHASE = [
  { id: 1, date: "Today, 2:34 PM", ammount: "₦5,500", units: "+50kWh" },
  { id: 2, date: "Feb 6, 2026", ammount: "₦5,500", units: "+50kWh" },
  { id: 3, date: "Jan 30, 2026", ammount: "₦5,500", units: "+50kWh" },
  { id: 4, date: "Jan 30, 2026", ammount: "₦5,500", units: "+50kWh" },
];

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
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Purchase History</h3>

        {PURCHASE.map(({ id, date, amount, units }) => (
          <div key={id} className={styles.purchaseItem}>
            <span>icon</span>
            <div>
              <p>{date}</p>
              <p>{amount}</p>
            </div>
            <span>{units}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PurchaseHistory;
