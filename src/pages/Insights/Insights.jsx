import { useState } from "react";
import ForecastTab from "./tabs/ForecastTab";
import TrendsTab from "./tabs/TrendsTab";
import RecommendationsTab from "./tabs/RecommendationsTab";
import { useUser } from "../../Hooks/useUser";
import styles from "./Insights.module.css";

const TABS = [
  { id: "forecast", label: "Forecast" },
  { id: "recommendations", label: "Recommendations" },
  { id: "trends", label: "Trends" },
];

export default function Insights() {
  const { user } = useUser();
  const [active, setActive] = useState("forecast");

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Insights</h1>
        <div className={styles.avatar}>{user.initials}</div>
      </div>

      <div className={styles.tabPills}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {active === "forecast" && <ForecastTab />}
        {active === "recommendations" && <RecommendationsTab />}
        {active === "trends" && <TrendsTab />}
      </div>
    </div>
  );
}
