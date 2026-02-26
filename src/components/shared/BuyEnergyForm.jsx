import { useState, useEffect } from "react";
import styles from "./BuyEnergyForm.module.css";

const PRESETS = [
  { kwh: 25, price: 2750 },
  { kwh: 50, price: 5500 },
  { kwh: 75, price: 8250 },
  { kwh: 100, price: 11050 },
];
const FALLBACK_RATE = 110;
function formatNaira(amount) {
  return "₦" + amount.toLocaleString("en-NG");
}

function BuyEnergyForm({ variant }) {
  const [selectedKwh, setSelectedKwh] = useState(null);
  const [customKwh, setCustomKwh] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [rate, setRate] = useState(FALLBACK_RATE);

  // derived values
  const activeKwh = selectedKwh ?? (customKwh ? Number(customKwh) : 0);
  const totalAmount = activeKwh * rate;
  const canContinue = activeKwh > 0 && paymentMethod !== null;

  // ‼️‼️‼️get rate from backend‼️‼️‼️

  useEffect(() => {
    fetch("/api/energy/rate")
      .then((res) => res.json())
      .then((data) => setRate(data.rate))
      .catch(() => {});
  }, []);

  const handlePresetClick = (kwh) => {
    setSelectedKwh(kwh);
    setCustomKwh("");
  };

  const handleCustomChange = (e) => {
    setCustomKwh(e.target.value);
    setSelectedKwh(null);
  };

  return (
    <div>
      <p className={styles.formHeading}>Buy Energy</p>
      <div className={styles.form}>
        {/* balance card----dashboard only */}
        {variant === "dashboard" && (
          <div className={styles.balanceCard}>
            <p className={styles.balanceCardLabel}>Current Balance</p>
            <p className={styles.balanceCardValue}>
              45.2<span>kWh</span>
            </p>
            <p className={styles.balanceCardSub}>Lasts approximately 6 days</p>
          </div>
        )}
        <div>
          <p className={styles.sectionTitle}>Select Amount</p>
          <div className={styles.presets}>
            {PRESETS.map(({ kwh, price }) => (
              <button
                key={kwh}
                onClick={() => handlePresetClick(kwh)}
                className={`${styles.preset} ${selectedKwh === kwh ? styles.presetSelected : ""}`}
              >
                <span className={styles.presetKwh}>{kwh}</span>
                <span className={styles.presetPrice}>{formatNaira(price)}</span>
              </button>
            ))}
          </div>
        </div>
        {/* custom amount */}
        <div className={styles.customSection}>
          <div className={styles.subSection}>
            <p className={styles.customLabel}>Custom Amount</p>
            <div className={styles.customInputRow}>
              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                value={customKwh}
                onChange={handleCustomChange}
                className={styles.customInput}
              />
            </div>
            {activeKwh > 0 && (
              <p className={styles.customHint}>
                Approximately <strong>{formatNaira(totalAmount)}</strong> at ₦
                {rate}/kWh
              </p>
            )}
          </div>
          <span className={styles.customUnit}>kWh</span>
        </div>
      </div>
    </div>
  );
}

export default BuyEnergyForm;
