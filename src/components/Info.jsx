import { Link } from 'react-router-dom';
import { STEPS, DELIVERY, SUB_TIERS, VINYL_TIERS, EMAIL, UPLOAD_EMAIL, PAYMENTS } from '../data/pricing';
import { Title } from './Catalog';

export function Order() {
  return (
    <section id="order" className="section">
      <Title n="04">Fulfillment &amp; How to Order</Title>
      <div className="order-grid">
        <ol className="steps">
          {STEPS.map(([t, d]) => (
            <li key={t} className="reveal"><b>{t}</b>
              <span>{d === 'UPLOAD_EMAIL'
                ? <>Email logos to <a href={`mailto:${UPLOAD_EMAIL}?subject=Order%20File%20-%20[Your%20Name]`}>{UPLOAD_EMAIL}</a> (Subject: Order File – [Your Name]).</>
                : d}</span>
            </li>
          ))}
        </ol>
        <div className="card reveal">
          <h3>Delivery &amp; Pickup</h3>
          <ul className="list">
            {DELIVERY.map((d) => <li key={d.label}><span>{d.label}{d.note && <small>{d.note}</small>}</span><b>{d.price}</b></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Byos() {
  const table = (tiers) => (
    <table className="tbl"><tbody>
      <tr>{tiers.map((t, i) => <th key={i}>Tier {i + 1}</th>)}</tr>
      <tr>{tiers.map((t, i) => <td key={i}>${t.byos}</td>)}</tr>
    </tbody></table>
  );
  return (
    <section id="byos" className="section">
      <Title n="05">Bring Your Own Shirt (BYOS)</Title>
      <p className="section-sub reveal">Garments must be <b>100% cotton, unwashed, and brand new</b>. We deduct $5.00 off standard menu prices ($12.00 base print labor fee). Ghostwriter Customz is not responsible for fabric defects or melting on customer-supplied apparel.</p>
      <div className="cards two">
        <div className="card reveal"><h3>Sublimation Labor</h3>{table(SUB_TIERS)}</div>
        <div className="card reveal"><h3>Cut Vinyl Labor</h3>{table(VINYL_TIERS)}</div>
      </div>
      <p className="tiny muted reveal center">*Bulk labor discounts: −$2.00/shirt (6–15), −$4.00/shirt (16+). Dark garments still require +$4.00 transfer surcharge.</p>
    </section>
  );
}

export function Info() {
  return (
    <section className="section">
      <div className="cards three">
        <div className="card reveal"><div className="icon">🧺</div><h3>Garment Care</h3><p className="muted">Wash inside-out in cold water with mild detergent. Tumble dry low or hang dry. Do not iron over graphics.</p></div>
        <div className="card reveal"><div className="icon">💳</div><h3>Payments</h3><div className="pills">{PAYMENTS.map((p) => <span key={p}>{p}</span>)}</div></div>
        <div className="card reveal"><div className="icon">📧</div><h3>Questions &amp; Proofs</h3><p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><p className="muted tiny">Orders are not processed via social media DMs. Digital proofs must be approved before printing starts.</p></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">GHOSTWRITER<span>CUSTOMZ</span></Link>
      <p className="muted tiny">© {new Date().getFullYear()} Ghostwriter Customz · Carbondale, IL</p>
    </footer>
  );
}
