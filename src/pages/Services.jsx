import { Tiers, AddOns } from '../components/Catalog';
import { Byos } from '../components/Info';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow reveal">Services</p>
        <h1 className="reveal">Coverage, Extras <span className="grad">&amp; BYOS.</span></h1>
        <p className="lead reveal">Everything you need to customize your print — from pocket logos to full coverage, specialty finishes, and bringing your own shirt.</p>
        <div className="sub-nav reveal">
          <a href="#tiers" onClick={jump('tiers')}>Coverage Tiers</a>
          <a href="#addons" onClick={jump('addons')}>Add-Ons</a>
          <a href="#byos" onClick={jump('byos')}>Bring Your Own Shirt</a>
        </div>
      </section>
      <Tiers />
      <AddOns />
      <Byos />
    </>
  );
}

// HashRouter owns the URL hash, so scroll manually instead of using anchor hashes
const jump = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
