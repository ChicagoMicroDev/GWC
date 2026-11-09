import { STYLES, SUB_TIERS, VINYL_TIERS, ADDONS, money } from '../data/pricing';

export const Title = ({ n, children }) => <h2 className="section-title reveal"><span>{n}</span> {children}</h2>;

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <Title n="01">Choose Your Style &amp; Price</Title>
      <p className="section-sub reveal">Every price includes a 100% cotton shirt + standard center-chest print.</p>
      <div className="cards three">
        {STYLES.map((s) => (
          <article key={s.title} className={`card price-card reveal ${s.featured ? 'featured' : ''}`}>
            <div className="badge">{s.badge}</div>
            <h3>{s.title}{s.sub && <><br /><small>{s.sub}</small></>}</h3>
            <p className="muted">{s.desc}</p>
            <div className="price">${s.price}<small>/shirt</small></div>
            <p className="plus">Plus 2XL–3XL: {money(s.plus)}</p>
            <ul className="bulk">
              {['6–15 shirts', '16+ shirts'].map((l, i) => (
                <li key={l}><span>{l}</span><b>{money(s.bulk[i][0])}</b><em>Plus {money(s.bulk[i][1])}</em></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Tiers() {
  return (
    <section id="tiers" className="section">
      <Title n="02">Print Coverage Tiers</Title>
      <p className="section-sub reveal"><b>Note:</b> Your base price already includes Tier 2 (standard center chest). Only upgrade for larger coverage.<br />Dark/Black surcharge: <b>+$4.00/shirt</b> · Plus sizes (2XL–3XL): <b>+$3.00/shirt</b></p>

      <h3 className="sub-head reveal">Sublimation <span className="tag">Light / White Baseline</span></h3>
      <div className="cards tiers">
        {SUB_TIERS.map((t) => (
          <article key={t.name} className={`card tier reveal ${t.kind === 'full' ? 'hot' : ''}`}>
            <div className={`tier-vis ${t.kind || ''}`}>
              <i style={{ '--w': `${t.vis.w}%`, '--h': `${t.vis.h}%`, '--x': `${t.vis.x}%`, '--y': `${t.vis.y}%` }} />
            </div>
            <h4>{t.name}</h4><p>{t.label}</p><span className="muted">{t.detail}</span><b>{money(t.price)}</b>
          </article>
        ))}
      </div>

      <h3 className="sub-head reveal">Cut Vinyl (HTV) <span className="tag">Solid Color &amp; Vector</span></h3>
      <div className="cards four">
        {VINYL_TIERS.map((t) => (
          <article key={t.name} className="card vinyl reveal">
            <h4>{t.name}</h4><b>{money(t.price)}</b><p>{t.label}</p><span className="muted">{t.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AddOns() {
  return (
    <section id="addons" className="section">
      <Title n="03">Add-Ons &amp; Extras</Title>
      <div className="cards three">
        {ADDONS.map((a) => (
          <article key={a.title} className="card addon reveal">
            <div className="icon">{a.icon}</div><h4>{a.title}</h4><b>{a.price}</b><p className="muted">{a.desc}</p>
          </article>
        ))}
      </div>
      <div className="notes reveal">
        <p>🎨 <b>Custom Artwork Setup:</b> $25.00 one-time setup — <span className="hl">WAIVED on orders of 10+ shirts.</span></p>
        <p>🌑 <b>Dark Garment Sublimation Surcharge:</b> +$4.00/shirt. Applies strictly to sublimation printing to cover dark transfer base material. Does not apply to HTV vinyl unless specialty garment upgrades are selected.</p>
      </div>
    </section>
  );
}
