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

const PAYMENT_METHODS = [
  { id: "card", pname: "Card", sub: "Debit or Credit" },
  { id: "bank_transfer", pname: "Bank Transfer", sub: "Direct Transfer" },
  { id: "mobile_money", pname: "Mobile Money", sub: "Wallet payment" },
];

function CardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
      <path
        fill="#f59e0b"
        d="M49 10.5H7A3.5 3.5 0 0 0 3.5 14v28A3.5 3.5 0 0 0 7 45.5h42a3.5 3.5 0 0 0 3.5-3.5V14a3.5 3.5 0 0 0-3.5-3.5m0 3.5v5.25H7V14zM7 42V22.75h42V42z"
      />
      <path fill="#000" d="M10.5 35H28v3.5H10.5z" />
    </svg>
  );
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
        {/* Payment method */}
        <div>
          <p className={styles.sectionTitle}>Payment Method</p>
          <div className={styles.paymentMethods}>
            {PAYMENT_METHODS.map(({ id, pname, sub }) => (
              <button
                key={id}
                onClick={() => setPaymentMethod(id)}
                className={`${styles.paymentMethod} ${paymentMethod === id ? styles.paymentMethodSelected : ""}`}
              >
                <CardIcon />
                <span className={styles.paymentName}>{pname}</span>
                <span className={styles.paymentSub}>{sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyEnergyForm;
