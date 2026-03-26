import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import Home from './pages/Home';
import Services from './pages/Services';
import Materials from './pages/Materials';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
