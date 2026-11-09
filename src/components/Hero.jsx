import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text reveal">
        <p className="eyebrow">Client Pricing Menu &amp; Service Catalog</p>
        <h1>Wear Your <span className="grad">Story.</span></h1>
        <p className="lead">Custom T-Shirts, full-color Sublimation &amp; Cut Vinyl prints on 100% cotton — made in Carbondale.</p>
        <div className="hero-cta">
          <Link to="/estimate" className="btn" id="hero-estimate">Build Your Estimate</Link>
          <a href={`${import.meta.env.BASE_URL}catalog.pdf`} className="btn btn-ghost" id="hero-catalog" target="_blank" rel="noreferrer">Download Catalog</a>
        </div>
        <ul className="hero-stats">
          <li><strong>$15</strong><span>from / shirt (16+)</span></li>
          <li><strong>24–48h</strong><span>quote turnaround</span></li>
          <li><strong>100%</strong><span>cotton tees</span></li>
        </ul>
      </div>
      <div className="hero-art reveal">
        <svg viewBox="0 0 200 200" className="shirt shirt-float" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a78bfa" /><stop offset=".5" stopColor="#f472b6" /><stop offset="1" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path d="M70 20 L40 32 L10 62 L32 86 L46 74 L46 185 L154 185 L154 74 L168 86 L190 62 L160 32 L130 20 Q100 42 70 20Z" fill="#14121c" stroke="url(#g1)" strokeWidth="3" />
          <text x="100" y="105" textAnchor="middle" fontFamily="Bebas Neue" fontSize="30" fill="url(#g1)">GHOST</text>
          <text x="100" y="132" textAnchor="middle" fontFamily="Bebas Neue" fontSize="30" fill="url(#g1)">WRITER</text>
        </svg>
      </div>
    </section>
  );
}
