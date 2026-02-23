import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Process from './pages/Process';
import ServiceAreas from './pages/ServiceAreas';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ThankYou from './pages/ThankYou';
import Motorized from './pages/Motorized';
import BuildYourProject from './pages/BuildYourProject';
import CollectionsHub from './pages/collections/CollectionsHub';
import CollectionPage from './pages/collections/CollectionPage';
import Meta from './pages/lp/Meta';
import DocsHub from './pages/docs/DocsHub';
import BrandSystemDoc from './pages/docs/BrandSystemDoc';
import ConversionPathDoc from './pages/docs/ConversionPathDoc';
import SiteArchitectureDoc from './pages/docs/SiteArchitectureDoc';
import AnalyticsDoc from './pages/docs/AnalyticsDoc';
import ClarityDoc from './pages/docs/ClarityDoc';
import WebhookDoc from './pages/docs/WebhookDoc';
import ContactFormDoc from './pages/docs/ContactFormDoc';
import ThankYouDoc from './pages/docs/ThankYouDoc';
import SEODoc from './pages/docs/SEODoc';
import GeolocationDoc from './pages/docs/GeolocationDoc';
import DatabaseDoc from './pages/docs/DatabaseDoc';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Standalone pages (no header/footer) */}
          <Route path="/build-your-project" element={<BuildYourProject />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Landing Pages */}
          <Route path="/lp/facebook" element={<Meta />} />
          
          {/* Documentation (internal) */}
          <Route path="/docs" element={<DocsHub />} />
          <Route path="/docs/brand-system" element={<BrandSystemDoc />} />
          <Route path="/docs/conversion-path" element={<ConversionPathDoc />} />
          <Route path="/docs/site-architecture" element={<SiteArchitectureDoc />} />
          <Route path="/docs/analytics" element={<AnalyticsDoc />} />
          <Route path="/docs/clarity" element={<ClarityDoc />} />
          <Route path="/docs/webhook" element={<WebhookDoc />} />
          <Route path="/docs/contact-form" element={<ContactFormDoc />} />
          <Route path="/docs/thank-you" element={<ThankYouDoc />} />
          <Route path="/docs/seo" element={<SEODoc />} />
          <Route path="/docs/geolocation" element={<GeolocationDoc />} />
          <Route path="/docs/database" element={<DatabaseDoc />} />
          
          {/* Main pages with layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          
          {/* Collections */}
          <Route path="/collections" element={<Layout><CollectionsHub /></Layout>} />
          <Route path="/collections/:slug" element={<Layout><CollectionPage /></Layout>} />
          
          {/* Core pages */}
          <Route path="/motorized" element={<Layout><Motorized /></Layout>} />
          <Route path="/process" element={<Layout><Process /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/service-areas" element={<Layout><ServiceAreas /></Layout>} />
          
          {/* Legal */}
          <Route path="/terms" element={<Layout><Terms /></Layout>} />
          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
          
          {/* Redirects from old routes */}
          <Route path="/products/*" element={<Navigate to="/collections" replace />} />
          <Route path="/gallery" element={<Navigate to="/projects" replace />} />
          <Route path="/motorized-blinds" element={<Navigate to="/motorized" replace />} />
          <Route path="/services" element={<Navigate to="/process" replace />} />
          <Route path="/consultation" element={<Navigate to="/build-your-project" replace />} />
          <Route path="/faq" element={<Navigate to="/" replace />} />
          <Route path="/testimonials" element={<Navigate to="/projects" replace />} />
          <Route path="/guides" element={<Navigate to="/collections" replace />} />
          <Route path="/trade" element={<Navigate to="/contact" replace />} />
          
          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
