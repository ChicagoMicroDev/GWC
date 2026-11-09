import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/order', 'How to Order']];
  return (
    <header className="nav" id="top">
      <Link to="/" className="logo" id="nav-logo">GHOSTWRITER<span>CUSTOMZ</span></Link>
      <button className="nav-toggle" id="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {links.map(([to, l]) => <NavLink key={to} to={to} end>{l}</NavLink>)}
        <Link to="/estimate" className="btn btn-sm" id="nav-quote">Get Estimate</Link>
      </nav>
    </header>
  );
}
