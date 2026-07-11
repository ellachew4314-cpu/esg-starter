"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/kindle-pilot", label: "Education pilot" },
  { href: "/impact", label: "Impact pilot" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/founder", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header v2-nav">
    <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)}><span className="mark">A</span><span>ESG <i>starter</i></span></Link>
    <button className={`mobile-nav-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    <nav id="site-navigation" className={menuOpen ? "is-open" : ""}>
      {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
      <Link className="header-button" href="/cyberjaya-pilot" onClick={() => setMenuOpen(false)}>Pilot proposal <b>↗</b></Link>
    </nav>
  </header>;
}

export function SiteFooter() { return <footer><div className="wordmark"><span className="mark">A</span><span>ESG <i>starter</i></span></div><span>A platform by The Awaken Group Sdn Bhd</span><span><Link href="/privacy">Privacy & data governance</Link> · From ESG Action to ESG Opportunity</span></footer>; }
