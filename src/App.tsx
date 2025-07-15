import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import ContactPage from "./pages/Contact";
import Clients from "./pages/Clients";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

import Seo from "./pages/services/Seo";
// import SMM from "./pages/SMM";
// import PerformanceMarketing from "./pages/PerformanceMarketing";
// import ORM from "./pages/ORM";
// import WebDesign from "./pages/WebDevelopment";
// import GMB from "./pages/GMB";
import Services from "./pages/Services";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import ContentMarketing from "./pages/services/ContentMarketing";
import Website from "./pages/services/Website";
import EmailMarketing from "./pages/services/EmailMarketing";
import SocialMediaOptimization from "./pages/services/SocialMediaOptimization";
import GraphicDesigning from "./pages/services/GraphicDesigning";
import AiAds from "./pages/services/AiAds";
import LandinPageOptimization from "./pages/services/LandinPageOptimization";
import AffiliateMarketing from "./pages/services/AffiliateMarketing";
import VideoShoot from "./pages/services/VideoShoot";
import PublicRelation from "./pages/services/PublicRelation";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import OnlineReputationManagement from "./pages/services/OnlineReputationManagement";
import GallerySection from "./pages/gallery";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminBlog from "./pages/admin/AdminBlogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-works" element={<GallerySection />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/services/search-engine-optimization" element={<Seo />} />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route
          path="/services/website-design-development"
          element={<Website />}
        />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route
          path="/services/social-media-optimization"
          element={<SocialMediaOptimization />}
        />
        <Route
          path="/services/graphic-designing"
          element={<GraphicDesigning />}
        />
        <Route path="/services/ai-cgi-marketing" element={<AiAds />} />
        <Route
          path="/services/landing-page-optimization"
          element={<LandinPageOptimization />}
        />
        <Route
          path="/services/affiliate-marketing"
          element={<AffiliateMarketing />}
        />
        <Route path="/services/video-shoot" element={<VideoShoot />} />
        <Route path="/services/public-relations" element={<PublicRelation />} />
        <Route
          path="/services/influencer-marketing"
          element={<InfluencerMarketing />}
        />
        <Route
          path="/services/online-reputation-management"
          element={<OnlineReputationManagement />}
        />

        {/* Route for Team Page */}
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/social-media-management" element={<SMM />} />
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
        <Route path="/google-my-business" element={<GMB />} /> */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}
