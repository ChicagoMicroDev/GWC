import { Link } from 'react-router-dom';
import { Title } from '../components/Catalog';

const VALUES = [
  { icon: '🎯', title: 'Our Mission', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' },
  { icon: '🖨️', title: 'Our Craft', text: 'Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.' },
  { icon: '🤝', title: 'Our Community', text: 'Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow reveal">About Us</p>
        <h1 className="reveal">The Story Behind <span className="grad">The Ink.</span></h1>
        <p className="lead reveal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </section>

      <section className="section about-grid">
        <div className="reveal">
          <Title n="✦">Who We Are</Title>
          <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p className="muted">Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        </div>
        <div className="card about-stat reveal">
          <ul className="hero-stats">
            <li><strong>500+</strong><span>shirts printed</span></li>
            <li><strong>100+</strong><span>happy clients</span></li>
            <li><strong>2</strong><span>print methods</span></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="cards three">
          {VALUES.map((v) => (
            <div key={v.title} className="card reveal"><div className="icon">{v.icon}</div><h3>{v.title}</h3><p className="muted">{v.text}</p></div>
          ))}
        </div>
      </section>

      <section className="section cta-band reveal">
        <h2 className="section-title">Ready to create something?</h2>
        <p className="section-sub">Lorem ipsum dolor sit amet — get a ballpark price in seconds.</p>
        <Link to="/estimate" className="btn" id="about-cta">Build Your Estimate</Link>
      </section>
    </>
  );
}
