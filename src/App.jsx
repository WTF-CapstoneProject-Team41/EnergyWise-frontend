import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MyEnergy from "./pages/MyEnergy/MyEnergy";

// Stub pages to be replaced with real components
function Dashboard() {
  return <h1>Dashboard</h1>;
}
// function MyEnergy() {
//   return <h1>My Energy</h1>;
// }
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
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-energy" element={<MyEnergy />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services" element={<Services />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
