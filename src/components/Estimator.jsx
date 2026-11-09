import { useMemo, useState } from 'react';
import { SUB_TIERS, VINYL_TIERS, BULK, EMAIL, money } from '../data/pricing';
import { Title } from './Catalog';

const initial = { method: 'sub', tier: 1, color: 'light', byos: false, qty: 1, plus: 0, place: 0, delivery: '0', specialty: false, art: false, rush: false };

function estimate(f) {
  const tiers = f.method === 'sub' ? SUB_TIERS : VINYL_TIERS;
  const t = tiers[Math.min(f.tier, tiers.length - 1)];
  const dark = f.color === 'dark';
  const qty = Math.max(0, f.qty || 0), plus = Math.max(0, f.plus || 0), place = Math.max(0, f.place || 0);
  const total = qty + plus;
  if (!total) return { sum: 0, rows: [['Add at least one shirt', '']] };

  const rows = [];
  let unit = f.byos ? t.byos : t.price;
  rows.push([`${f.byos ? 'BYOS labor' : 'Base'} (${t.name})`, `${money(unit)}/ea`]);

  const bucket = total >= 16 ? 1 : total >= 6 ? 0 : -1;
  if (bucket >= 0) {
    const d = f.byos ? BULK.byos[bucket] : BULK[f.method][f.color][bucket];
    unit -= d;
    rows.push([`Bulk discount (${bucket ? '16+' : '6–15'})`, `−${money(d)}/ea`]);
  }
  if (dark && (f.method === 'sub' || f.byos)) { unit += 4; rows.push(['Dark garment surcharge', '+$4.00/ea']); }
  if (f.method === 'vinyl' && f.specialty) { unit += 4; rows.push(['Specialty vinyl', '+$4.00/ea']); }
  if (place) { unit += place * 6; rows.push([`Extra placements ×${place}`, `+${money(place * 6)}/ea`]); }

  let sum = unit * total;
  rows.push([`${total} shirt${total > 1 ? 's' : ''} × ${money(unit)}`, money(sum)]);
  if (plus && !f.byos) { sum += plus * 3; rows.push([`Plus sizes ×${plus}`, `+${money(plus * 3)}`]); }
  if (f.art) {
    if (total >= 10) rows.push(['Artwork setup', 'WAIVED']);
    else { sum += 25; rows.push(['Artwork setup', '+$25.00']); }
  }
  if (f.rush) { const r = Math.max(15, sum * 0.25); sum += r; rows.push(['Rush order', `+${money(r)}`]); }
  if (f.delivery === 'ship') rows.push(['USPS shipping', 'Quoted']);
  else if (+f.delivery) { sum += +f.delivery; rows.push(['Doorstep delivery', `+${money(+f.delivery)}`]); }
  else rows.push(['Walmart meet-up', 'FREE']);
  rows.push(['50% deposit to start', money(sum / 2)]);
  return { sum, rows };
}

export default function Estimator() {
  const [f, setF] = useState(initial);
  const set = (k) => (e) => {
    const { type, value, checked } = e.target;
    let v = type === 'checkbox' ? checked : type === 'number' ? +value : value;
    if (k === 'byos') v = value === 'yes';
    if (k === 'tier') v = +value;
    setF((p) => {
      const n = { ...p, [k]: v };
      if (k === 'method') n.tier = Math.min(p.tier, (v === 'sub' ? SUB_TIERS : VINYL_TIERS).length - 1);
      return n;
    });
  };
  const { sum, rows } = useMemo(() => estimate(f), [f]);
  const tiers = f.method === 'sub' ? SUB_TIERS : VINYL_TIERS;
  const mailBody = encodeURIComponent(`Hi Ghostwriter Customz,\n\nI'd like a quote:\n${rows.map((r) => `- ${r[0]}: ${r[1]}`).join('\n')}\nEstimated total: ${money(sum)}\n\nThanks!`);

  return (
    <section id="estimator" className="section">
      <Title n="⚙">Instant Price Estimator</Title>
      <p className="section-sub reveal">Get a ballpark number in seconds. Your official quote &amp; invoice arrives within 24–48 hours.</p>
      <div className="estimator card reveal">
        <form className="est-form" onSubmit={(e) => e.preventDefault()}>
          <label>Print method
            <select id="est-method" value={f.method} onChange={set('method')}>
              <option value="sub">Full-Color Sublimation</option>
              <option value="vinyl">Cut Vinyl (HTV)</option>
            </select>
          </label>
          <label>Coverage tier
            <select id="est-tier" value={f.tier} onChange={set('tier')}>
              {tiers.map((t, i) => <option key={t.name} value={i}>{t.name} – {t.label}</option>)}
            </select>
          </label>
          <label>Shirt color
            <select id="est-color" value={f.color} onChange={set('color')}>
              <option value="light">Light / White</option>
              <option value="dark">Dark / Black</option>
            </select>
          </label>
          <label>Supply
            <select id="est-byos" value={f.byos ? 'yes' : 'no'} onChange={set('byos')}>
              <option value="no">We provide the shirt</option>
              <option value="yes">Bring Your Own Shirt (BYOS)</option>
            </select>
          </label>
          <label>Standard sizes (S–XL)<input id="est-qty" type="number" min="0" value={f.qty} onChange={set('qty')} /></label>
          <label>Plus sizes (2XL–3XL)<input id="est-plus" type="number" min="0" value={f.plus} onChange={set('plus')} /></label>
          <label>Extra placements / shirt<input id="est-place" type="number" min="0" max="4" value={f.place} onChange={set('place')} /></label>
          <label>Delivery
            <select id="est-delivery" value={f.delivery} onChange={set('delivery')}>
              <option value="0">Carbondale Walmart Meet-Up (Free)</option>
              <option value="4">Carbondale Doorstep ($4)</option>
              <option value="ship">USPS Shipping (Custom quote)</option>
            </select>
          </label>
          {f.method === 'vinyl' && (
            <label className="check"><input id="est-specialty" type="checkbox" checked={f.specialty} onChange={set('specialty')} /> Specialty vinyl (glitter / metallic / holo)</label>
          )}
          <label className="check"><input id="est-art" type="checkbox" checked={f.art} onChange={set('art')} /> I need custom artwork setup</label>
          <label className="check"><input id="est-rush" type="checkbox" checked={f.rush} onChange={set('rush')} /> Rush order (24–48 hrs)</label>
        </form>
        <aside className="est-result">
          <p className="muted">Estimated total</p>
          <div className="est-total" key={sum}>{money(sum)}</div>
          <ul className="est-breakdown">
            {rows.map(([a, b]) => <li key={a}><span>{a}</span><b>{b}</b></li>)}
          </ul>
          <p className="tiny muted">Estimate only. 50% deposit due to start production.</p>
          <a href={`mailto:${EMAIL}?subject=Quote%20Request&body=${mailBody}`} className="btn" id="est-request">Request Official Quote</a>
        </aside>
      </div>
    </section>
  );
}
