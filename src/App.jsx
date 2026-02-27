import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MyEnergy from "./pages/MyEnergy/MyEnergy";
import BuyEnergy from "./pages/BuyEnergy/BuyEnergy";
import BuyEnergyOnboarding from "./pages/Onboarding/BuyEnergyOnboarding";
import LogPurchase from "./pages/LogPurchase/LogPurchase";
import LogPurchaseOnboarding from "./pages/Onboarding/LogPurchaseOnboarding";

// Stub pages to be replaced with real components
function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Insights() {
  return <h1>Insights</h1>;
}
function Services() {
  return <h1>Services</h1>;
}
function Account() {
  return <h1>Account</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/onboarding/buy-energy"
          element={<BuyEnergyOnboarding />}
        />
        <Route
          path="/onboarding/log-purchase"
          element={<LogPurchaseOnboarding />}
        />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-energy" element={<MyEnergy />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<Account />} />
          <Route path="/buy-energy" element={<BuyEnergy />} />

          <Route path="/log-purchase" element={<LogPurchase />} />
        </Route>

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
