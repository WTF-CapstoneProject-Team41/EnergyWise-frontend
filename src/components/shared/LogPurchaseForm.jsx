import { useState } from "react";
import { useNavigate } from "react-router-dom";

function getTodayString() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

const FALLBACK_RATE = 110;
const CURRENT_BALANCE = 45.2;

function LogPurchaseForm({ variant }) {
  const navigate = useNavigate();

  const [purchaseDate, setPurchaseDate] = useState(getTodayString());
  const [amountPaid, setAmountPaid] = useState("");
  const [unitsReceived, setUnitsReceived] = useState("");
  const [unitsBalance, setUnitsBalance] = useState("");
  const [source, setSource] = useState("");

  // derived values
  const units = Number(unitsReceived) || 0;
  const newBalance = (CURRENT_BALANCE + units).toFixed(1);
  const balance = Number(unitsBalance) || 0;

  const canContinue = purchaseDate && amountPaid && unitsReceived;
  return (
    <div>
      <p>purchaseDate: {purchaseDate}</p>
      <p>units: {units}</p>
      <p>newBalance: {newBalance}</p>
      <p>canContinue: {String(canContinue)}</p>
    </div>
  );
}

export default LogPurchaseForm;
