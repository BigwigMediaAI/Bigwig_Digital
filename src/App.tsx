import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import ContactPage from "./pages/Contact";
import Clients from "./pages/Clients";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Route for Team Page */}
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
