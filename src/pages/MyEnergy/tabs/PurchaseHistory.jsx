import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./PurchaseHistory.module.css";

const FILTERS = ["Last 7 days", "Last 30 days", "Last 90 days"];
const CHART_FILTERS = ["Week", "Month", "Year"];

const PURCHASE = [
  { id: 1, date: "Today, 2:34 PM", amount: "₦5,500", units: "+50kWh" },
  { id: 2, date: "Feb 6, 2026", amount: "₦5,500", units: "+50kWh" },
  { id: 3, date: "Jan 30, 2026", amount: "₦5,500", units: "+50kWh" },
  { id: 4, date: "Jan 30, 2026", amount: "₦5,500", units: "+50kWh" },
];

const CHART_DATA = {
  Week: [
    { label: "Mon", kwh: 8.2 },
    { label: "Tue", kwh: 5.1 },
    { label: "Wed", kwh: 7.4 },
    { label: "Thur", kwh: 6.3 },
    { label: "Fri", kwh: 5.8 },
    { label: "Sat", kwh: 7.9 },
    { label: "Sun", kwh: 6.5 },
  ],
  Month: [
    { label: "Week 1", kwh: 42 },
    { label: "Week 2", kwh: 38 },
    { label: "Week 3", kwh: 51 },
    { label: "Week 4", kwh: 44 },
  ],
  Year: [
    { label: "Jan", kwh: 180 },
    { label: "Feb", kwh: 155 },
    { label: "Mar", kwh: 200 },
    { label: "Apr", kwh: 170 },
    { label: "May", kwh: 190 },
    { label: "Jun", kwh: 210 },
    { label: "Jul", kwh: 225 },
    { label: "Aug", kwh: 198 },
    { label: "Sep", kwh: 175 },
    { label: "Oct", kwh: 160 },
    { label: "Nov", kwh: 145 },
    { label: "Dec", kwh: 188 },
  ],
};

function PurchaseHistory() {
  const [activeFilter, setActiveFilter] = useState("Last 30 days");
  const [activeChartFilter, setActiveChartFilter] = useState("Week");
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
      {/* ----Purchase list------ */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Purchase History</h3>

        {PURCHASE.map(({ id, date, amount, units }) => (
          <div key={id} className={styles.purchaseItem}>
            <span className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
              >
                <rect width="40" height="40" fill="#F0FDFA" rx="8" />
                <path
                  fill="#F59E0B"
                  d="M23.75 23a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3ZM9.5 16.25a3.75 3.75 0 0 1 3.75-3.75h13.5a3.75 3.75 0 0 1 3.75 3.75v7.5a3.75 3.75 0 0 1-3.75 3.75h-13.5a3.75 3.75 0 0 1-3.75-3.75v-7.5ZM29 17v-.75A2.25 2.25 0 0 0 26.75 14h-13.5A2.25 2.25 0 0 0 11 16.25V17h18Zm-18 1.5v5.25A2.25 2.25 0 0 0 13.25 26h13.5A2.25 2.25 0 0 0 29 23.75V18.5H11Z"
                />
              </svg>
            </span>
            <div className={styles.purchaseInfo}>
              <p className={styles.purchaseDate}>{date}</p>
              <p className={styles.purchaseAmount}>{amount}</p>
            </div>
            <span className={styles.purchaseUnits}>{units}</span>
          </div>
        ))}
      </div>
      {/* -----Chart----- */}
      <div className={styles.chartSection}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Consumption Trends</h3>
          <div className={styles.chartFilters}>
            {CHART_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveChartFilter(f)}
                className={`${styles.chartFilterBtn} ${activeChartFilter === f ? styles.chartFilterActive : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        {/* Responsive container--chart */}
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <ResponsiveContainer width="70%" height={260}>
            <BarChart data={CHART_DATA[activeChartFilter]} barSize={30}>
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#000", fontWeight: 600 }}
              />
              <YAxis hide />
              <Tooltip
                cursor={{ fill: "#f0faf6" }}
                formatter={(value) => [`${value} kWh`, "Usage"]}
              />
              <Bar dataKey="kwh" fill="#09907F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default PurchaseHistory;
