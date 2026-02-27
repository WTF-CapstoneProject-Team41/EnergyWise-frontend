import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogPurchaseForm.module.css";

function getTodayString() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

const FALLBACK_RATE = 110;
const CURRENT_BALANCE = 45.2;

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <rect width="32" height="32" fill="#3b82f6" rx="8" />
      <path
        fill="#fff"
        d="M14.667 22.667h2.666v-8h-2.666zm2.284-11.05q.382-.384.382-.95t-.384-.95A1.3 1.3 0 0 0 16 9.333q-.565 0-.95.384a1.3 1.3 0 0 0-.383.95q0 .564.384.95.384.387.949.383.566-.004.95-.384M16 29.333q-2.766 0-5.2-1.05a13.5 13.5 0 0 1-4.233-2.85q-1.8-1.798-2.85-4.233T2.667 16q-.002-2.766 1.05-5.2a13.5 13.5 0 0 1 2.85-4.233 13.45 13.45 0 0 1 4.233-2.85q2.436-1.05 5.2-1.05t5.2 1.05q2.436 1.05 4.233 2.85a13.5 13.5 0 0 1 2.851 4.233q1.053 2.434 1.05 5.2-.005 2.766-1.051 5.2a13.4 13.4 0 0 1-2.85 4.233 13.6 13.6 0 0 1-4.233 2.851q-2.43 1.052-5.2 1.05m0-2.666q4.467 0 7.567-3.1t3.1-7.567-3.1-7.567T16 5.333t-7.567 3.1q-3.1 3.101-3.1 7.567t3.1 7.567 7.567 3.1"
      />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M16 2H15V0H13V2H5V0H3V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V17C0 17.5304 0.210714 18.0391 0.585786 18.4142C0.960859 18.7893 1.46957 19 2 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM16 17H2V6H16V17Z"
        fill="black"
        fill-opacity="0.8"
      />
      <path
        d="M4.5 0.5V2.5H13.5V0.5H14.5V2.5H16C16.3978 2.5 16.7792 2.65815 17.0605 2.93945C17.3419 3.22076 17.5 3.60218 17.5 4V17C17.5 17.3978 17.3419 17.7792 17.0605 18.0605C16.7792 18.3419 16.3978 18.5 16 18.5H2C1.60218 18.5 1.22076 18.3419 0.939453 18.0605C0.658149 17.7792 0.5 17.3978 0.5 17V4C0.5 3.60218 0.658149 3.22076 0.939453 2.93945C1.22076 2.65815 1.60218 2.5 2 2.5H3.5V0.5H4.5ZM1.5 17.5H16.5V5.5H1.5V17.5Z"
        stroke="black"
        stroke-opacity="0.8"
      />
    </svg>
  );
}
function formatDate(date) {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function LogPurchaseForm({ variant }) {
  const navigate = useNavigate();

  const [purchaseDate, setPurchaseDate] = useState(getTodayString());
  const [amountPaid, setAmountPaid] = useState("");
  const [unitsReceived, setUnitsReceived] = useState("");
  const [unitsBalance, setUnitsBalance] = useState("");
  const [source, setSource] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // derived values
  const units = Number(unitsReceived) || 0;
  const newBalance = (CURRENT_BALANCE + units).toFixed(1);
  const balance = Number(unitsBalance) || 0;
  const canContinue = purchaseDate && amountPaid && unitsReceived;

  const handleCancel = () => {
    if (variant === "onboarding") {
      navigate("/dashboard");
    } else {
      navigate("/my-energy");
    }
  };

  const handleContinue = () => {
    //post to backend
    //POST api/purchase/log
    //{purchaseDate, amountPaid, unitsReceived, source }
    setShowSuccess(true);
  };

  return (
    <div className={styles.form}>
      {/* Info banner */}
      <div className={styles.banner}>
        <span className={styles.bannerIcon}>
          <InfoIcon />
        </span>
        <p className={styles.bannerText}>
          Already bought energy elsewhere? Log it here to keep your consumption
          tracking accurate and get reliable forecasts.
        </p>
      </div>
      {/* Form fields */}
      <div className={styles.grid}>
        {/* Purchase date */}
        <div className={styles.field}>
          <label className={styles.label}>Purchase Date</label>
          <div className={styles.dateWrapper}>
            <input
              className={styles.input}
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              placeholder="MM/DD/YYYY"
            />
            <span className={styles.dateIcon}>
              <CalendarIcon />
            </span>
          </div>
        </div>
        {/* Amount Paid */}
        <div className={styles.field}>
          <label className={styles.label}>Amount Paid</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              placeholder="5500"
            />
            <span className={styles.inputSuffix}>₦</span>
          </div>
        </div>

        {/* Units Received */}
        <div className={styles.field}>
          <label className={styles.label}>Units Received (kWh)</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={unitsReceived}
              onChange={(e) => setUnitsReceived(e.target.value)}
              placeholder="50"
            />
            <span className={styles.inputSuffix}>kWh</span>
          </div>
          <p className={styles.rateHint}>
            Rate: <strong>₦{FALLBACK_RATE}/kWh</strong>
          </p>
        </div>

        {/* Units Balance — onboarding only */}
        {variant === "onboarding" && (
          <div className={styles.field}>
            <label className={styles.label}>Units Balance (kWh)</label>
            <div className={styles.inputWrapper}>
              <input
                className={styles.input}
                type="number"
                min="0"
                value={unitsBalance}
                onChange={(e) => setUnitsBalance(e.target.value)}
                placeholder="20"
              />
              <span className={styles.inputSuffix}>kWh</span>
            </div>
          </div>
        )}

        {/* Source */}
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label}>Source (optional)</label>
          <input
            className={styles.input}
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g., IKEDC, Local"
          />
        </div>
      </div>
      {/* Balance preview */}
      <div className={styles.preview}>
        <p className={styles.previewTitle}>Balance Preview</p>

        {variant === "dashboard" ? (
          <>
            <div className={styles.previewRow}>
              <span>Current Balance</span>
              <span>{CURRENT_BALANCE} kWh</span>
            </div>
            <div className={styles.previewRow}>
              <span>Adding</span>
              <span>+{units > 0 ? units : 0} kWh</span>
            </div>
            <hr className={styles.previewDivider} />
            <div className={styles.previewTotal}>
              <span>New Balance</span>
              <span className={styles.previewTotalValue}>
                {units > 0 ? newBalance : CURRENT_BALANCE} kWh
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.previewRow}>
              <span>Added Unit</span>
              <span>{units > 0 ? `${units} kWh` : "—"}</span>
            </div>
            <hr className={styles.previewDivider} />
            <div className={styles.previewTotal}>
              <span>Balance</span>
              <span className={styles.previewTotalValue}>
                {balance > 0 ? `${balance} kWh` : "—"}
              </span>
            </div>
          </>
        )}
      </div>
      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.cancelBtn} onClick={handleCancel}>
          Cancel
        </button>
        <button
          className={styles.continueBtn}
          onClick={handleContinue}
          disabled={!canContinue}
        >
          Continue
        </button>
      </div>
      {/* Success modal */}
      {showSuccess && (
        <div
          className={styles.modalOverlay}
          onClick={() => navigate("/my-energy")}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Successfully Log Purchase!</h2>

            {/* Checkmark with glow */}
            <div className={styles.checkWrapper}>
              <div className={styles.checkGlow} />
              <div className={styles.checkCircle}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Order summary */}
            <div className={styles.modalSummary}>
              <p className={styles.modalSummaryTitle}>Order Summary</p>
              <div className={styles.modalSummaryRow}>
                <span>Added Units</span>
                <span>{units > 0 ? `${units} kWh` : "50 kWh"}</span>
              </div>
              <div className={styles.modalSummaryRow}>
                <span>Transaction date</span>
                <span>{formatDate()}</span>
              </div>
            </div>

            {/* Done button */}
            <button
              className={styles.doneBtn}
              onClick={() => navigate("/my-energy")}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogPurchaseForm;
