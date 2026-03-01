import { useNavigate } from "react-router-dom";
import styles from "./UserType.module.css";

const UserType = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Background image */}
      <div className={styles.bg} />

      {/* Logo */}
      <div className={styles.logoBar}>
        <div className={styles.logoIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
          >
            <rect width="36" height="36" fill="#008070" rx="10" />
            <path
              fill="#f59e0b"
              stroke="#f59e0b"
              strokeWidth=".04"
              d="m22.47 9.02-1.56 6.27-.005.027h4.477L14.46 26.93l2.444-9.82.007-.027H13.31l2.006-8.058z"
            />
          </svg>
        </div>
        <span className={styles.logoText}>EnergyWise</span>
      </div>

      {/* Card */}
      <div className={styles.center}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>I'm using EnergyWise for....</h1>
            <p className={styles.subtitle}>
              Choose the option that best describes you
            </p>
          </div>

          <div className={styles.options}>
            {/* Home */}
            <div className={styles.option}>
              <div className={styles.upperCard}>
                <div
                  className={styles.optionIconWrap}
                  style={{ background: "#09907F" }}
                >
                  <span className={styles.optionEmoji}>🏠</span>
                </div>
                <h3 className={styles.optionTitle}>My Home</h3>
                <p className={styles.optionDesc}>
                  Track household energy usage and reduce your electricity bills
                </p>
              </div>
              <button
                className={`${styles.optionBtn} ${styles.optionBtnGreen}`}
                onClick={() => navigate("/homeinfo")}
              >
                Continue as Home
              </button>
            </div>

            {/* Business */}
            <div className={styles.option}>
              <div className={styles.upperCard}>
                <div
                  className={styles.optionIconWrap}
                  style={{ background: "#F59E0B" }}
                >
                  <span className={styles.optionEmoji}>🏢</span>
                </div>
                <h3 className={styles.optionTitle}>My Business</h3>
                <p className={styles.optionDesc}>
                  Monitor energy usage and optimise operational costs
                </p>
              </div>
              <button
                className={`${styles.optionBtn} ${styles.optionBtnAmber}`}
                onClick={() => navigate("/businessinfo")}
              >
                Continue as Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;
