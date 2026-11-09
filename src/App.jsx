import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { Pricing } from './components/Catalog';
import Estimator from './components/Estimator';
import { Order, Info, Footer } from './components/Info';
import Services from './pages/Services';
import About from './pages/About';

// Re-run scroll reveal + scroll to top on every route change
function useRouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = `${(i % 5) * 70}ms`; io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);
}

const Home = () => (
  <>
    <Hero />
    <Pricing />
    <section className="section cta-band reveal">
      <h2 className="section-title">Need more coverage?</h2>
      <p className="section-sub">Explore print tiers, add-ons and Bring Your Own Shirt rates.</p>
      <Link to="/services" className="btn" id="home-services">View Services</Link>
    </section>
  </>
);

function Layout() {
  useRouteEffects();
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/estimate" element={<Estimator />} />
          <Route path="/order" element={<><Order /><Info /></>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// HashRouter avoids 404s on GitHub Pages when refreshing deep links
export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
