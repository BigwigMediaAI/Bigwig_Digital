import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import ContactPage from "./pages/Contact";
import Clients from "./pages/Clients";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import SMM from "./pages/SMM";
import Seo from "./pages/Seo";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import ORM from "./pages/ORM";
import WebDesign from "./pages/WebDevelopment";
import GMB from "./pages/GMB";

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/social-media-management" element={<SMM />} />
        <Route path="/search-engine-optimization" element={<Seo />} />
        <Route
          path="/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route path="/online-reputation-management" element={<ORM />} />
        <Route
          path="/web-desing-and-app-developement"
          element={<WebDesign />}
        />
        <Route path="/google-my-business" element={<GMB />} />
      </Routes>
    </Router>
  );
}
