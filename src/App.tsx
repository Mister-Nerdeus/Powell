import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { LocalBusinessSchema } from './components/seo/LocalBusinessSchema';
import Home from './pages/Home';
import Services from './pages/Services';
import Materials from './pages/Materials';
import Storage from './pages/Storage';
import Faq from './pages/Faq';
import About from './pages/About';
import Contact from './pages/Contact';
import Land from './pages/Land';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <LocalBusinessSchema />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/land" element={<Land />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
