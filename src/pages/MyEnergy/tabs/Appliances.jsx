import styles from "./Appliances.module.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DONUT_DATA = [
  { name: "Air Conditioner", value: 60, color: "#10b981" },
  { name: "Refrigerator", value: 18, color: "#F59E0B" },
  { name: "Others", value: 22, color: "#E2E8F0" },
];

function DonutLabel() {
  return (
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
      <tspan x="50%" dy="-6" fontSize="22" fontWeight="800" fill="#1a1f1e">
        5
      </tspan>
      <tspan x="50%" dy="20" fontSize="11" fill="#6b7c78">
        Appliances
      </tspan>
    </text>
  );
}

function Appliances() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.searchBox}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 14H14.71L14.43 13.73C15.444 12.5541 16.0012 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="#09907F"
            />
          </svg>
          <input placeholder="Search appliances..." />
        </div>
        <button className={styles.addBtn}>+ Add Appliance</button>
      </div>
      <div className={styles.topGrid}>
        {/* Left card */}
        <div className={styles.balanceCard}>
          <p className={styles.balanceLabel}>Available Energy</p>
          <p className={styles.balanceValue}>
            45.2 <span>kWh</span>
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <p className={styles.statLabel}>Estimated Duration</p>
              <p className={styles.statValue}>6 days</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statLabel}>Daily Average</p>
              <p className={styles.statValue}>7.5 kWh</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statLabel}>Last Purchase</p>
              <p className={styles.statValue}>Feb 8, 2026</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statLabel}>Next Suggested</p>
              <p className={styles.statValue}>Feb 18</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.btnAmber}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M21 4.5H3A1.5 1.5 0 0 0 1.5 6v12A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 21 4.5ZM21 6v2.25H3V6h18ZM3 18V9.75h18V18H3Z"
                />
                <path fill="#000" d="M4.5 15H12v1.5H4.5V15Z" />
              </svg>

              <span>Buy Energy</span>
            </button>
            <button className={styles.btnAmber}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14 21 3M10 14l3.5 7a.55.55 0 0 0 1 0L21 3M10 14l-7-3.5a.55.55 0 0 1 0-1L21 3"
                />
              </svg>

              <span>Send Energy</span>
            </button>
            <button className={styles.btnOutline}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6.5 5h14v17h-14V5Z"
                />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.5 5V2H4a.5.5 0 0 0-.5.5V19h3m4-8h6m-6 4h6"
                />
              </svg>

              <span>Log Purchase</span>
            </button>
          </div>
        </div>
        {/* right card */}
        <div className={styles.breakdown}>
          <div className={styles.containerTop}>
            <div>
              <h3 className={styles.breakdownTitle}>Consumption Breakdown</h3>
              <p className={styles.breakdownSubtitle}>
                How your energy is distributed
              </p>
            </div>
            <div>
              <p className={styles.totalLabel}>Total Daily Consumption</p>
              <p className={styles.totalValue}>20 kWh</p>

              <p className={styles.totalSub}>Across 5 appliances</p>
            </div>
            <div className={styles.chartRow}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={DONUT_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={76}
                    dataKey="value"
                    labelLine={false}
                  >
                    {DONUT_DATA.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => `${v}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appliances;
