import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MyEnergy from "./pages/MyEnergy/MyEnergy";
import BuyEnergy from "./pages/BuyEnergy/BuyEnergy";
import BuyEnergyOnboarding from "./pages/Onboarding/BuyEnergyOnboarding";

// New pages
import Landing from "./components/auth/LandingPage/LandingPage";
import Login from "./components/auth/Login/Login";
import SignUp from "./components/auth/SignUp/SignUp";
import HomeInfo from "./components/auth/HomeInfo/HomeInfo";
import BusinessInfo from "./components/auth/BusinessInfo/BusinessInfo";
import QuickSetup from "./components/auth/QuickSetup/QuickSetup";
import ProtectedRoute from './components/auth/ProtectedRoute/ProtectedRoute';

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
        {/* New routes in desired order */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeinfo" element={<HomeInfo />} />
        <Route path="/businessinfo" element={<BusinessInfo />} />
        <Route path="/quicksetup" element={<QuickSetup />} />

        {/* Existing routes */}
        <Route path="/onboarding/buy-energy" element={<BuyEnergyOnboarding />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-energy" element={<MyEnergy />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<Account />} />
          <Route path="/buy-energy" element={<BuyEnergy />} />
          <Route path="/onboarding/buy-energy" element={<BuyEnergyOnboarding />} />
        </Route>

        {/* Fallback */}
        {/* <Route path="*" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
