import styles from "./EnergyUnits.module.css";

function EnergyUnits() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <p className={styles.balanceLabel}>AVAILABLE ENERGY</p>
        <p className={styles.balanceValue}>
          45.2 <span>kWh</span>
        </p>
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
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.5 5h14v17h-14V5Z"
            />
            <path
              stroke="#000"
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
  );
}

export default EnergyUnits;
