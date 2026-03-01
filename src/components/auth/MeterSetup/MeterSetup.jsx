import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MeterSetup.module.css";

const MeterSetup = () => {
  const navigate = useNavigate();
  const [meterNumber, setMeterNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMeterNumber(e.target.value);
    if (error) setError("");
  };

  const validate = () => {
    if (!meterNumber.trim()) {
      setError("Please enter your meter number");
      return false;
    }
    if (meterNumber.trim().length < 6) {
      setError("Meter number must be at least 6 characters");
      return false;
    }
    return true;
  };

  const createEnergyAccount = async () => {
    const token = localStorage.getItem("ew_token");
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/energy-account`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          meter_number: meterNumber.trim(),
          base_tariff: 0.75,
        }),
      },
    );
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to create account");
  };

  const handleBuyEnergy = async () => {
    if (!validate()) return;
    setError("");
    try {
      await createEnergyAccount();
      sessionStorage.setItem("ew_meter", meterNumber.trim());
      navigate("/onboarding/buy-energy");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleLogPurchase = async () => {
    if (!validate()) return;
    setError("");
    try {
      await createEnergyAccount();
      sessionStorage.setItem("ew_meter", meterNumber.trim());
      navigate("/onboarding/log-purchase");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.page}>
      {/* Background */}
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

      {/* Centered content */}
      <div className={styles.center}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Kindly Enter your Meter Number</h1>
            <p className={styles.subtitle}>
              We'll use this to track your energy account
            </p>
          </div>

          {/* Meter input */}
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Meter Number</label>
            <div
              className={`${styles.inputWrap} ${error ? styles.inputWrapError : ""}`}
            >
              <svg
                className={styles.inputIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h.01M12 12h.01M17 12h.01" />
              </svg>
              <input
                type="text"
                placeholder="e.g. 0101234567890"
                value={meterNumber}
                onChange={handleChange}
                className={styles.input}
                maxLength={20}
              />
            </div>
            {error && <p className={styles.errorText}>{error}</p>}
          </div>

          {/* Info note */}
          <div className={styles.infoNote}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a7a5e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              You can find your meter number on your electricity meter or a
              previous bill
            </span>
          </div>

          {/* Action buttons */}
          <div className={styles.actions}>
            <button
              className={styles.btnAmber}
              onClick={handleBuyEnergy}
              disabled={loading}
            >
              {loading ? "Setting up..." : "Buy Energy"}
            </button>
            <button
              className={styles.btnGreen}
              onClick={handleLogPurchase}
              disabled={loading}
            >
              {loading ? "Setting up..." : "Log Purchase"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeterSetup;
