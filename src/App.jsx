import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Insights from "./pages/Insights/Insights";

function ComingSoon({ page }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "60vh", flexDirection: "column", gap: 12,
      color: "#6b7280", fontFamily: "var(--font-body)"
    }}>
      <div style={{ fontSize: 40 }}>🚧</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#0b0b0b" }}>{page}</div>
      <div style={{ fontSize: 14 }}>This page is coming soon</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/my-energy"  element={<ComingSoon page="My Energy" />} />
            <Route path="/insights"   element={<Insights />} />
            <Route path="/services"   element={<ComingSoon page="Services" />} />
            <Route path="/account"    element={<ComingSoon page="Account" />} />
            <Route path="*"           element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;