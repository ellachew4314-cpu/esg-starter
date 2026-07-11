"use client";

import { FormEvent, useState } from "react";
import { SiteFooter, SiteNav } from "../components/SiteNav";

export default function Contact() {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const text = `Hello ESG Starter, I am ${name || "interested in learning more"}.%0AOrganisation: ${organisation || "Not stated"}%0AEmail: ${email || "Not stated"}%0AType: ${type || "Not stated"}%0A%0A${message || "I would like to discuss ESG Starter."}`;
    window.open(`https://wa.me/60129154314?text=${text}`, "_blank", "noopener,noreferrer");
  };
  return <><SiteNav/><main className="inner-page"><section className="contact-v2"><div className="contact-intro"><div className="v2-kicker">START A CONVERSATION</div><h1>Let’s find your practical ESG starting point.</h1><p>Tell us about your organisation, pilot idea or partnership opportunity. We are currently speaking with SMEs, NGOs, education networks, corporate partners and ecosystem enablers.</p><div className="contact-detail"><span>The Awaken Group Sdn Bhd</span><b>From ESG Action to ESG Opportunity</b><small>Enquiries currently open through WhatsApp while the company email and domain are being prepared.</small></div></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Full name<input required value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Your name"/></label><label>Organisation<input value={organisation} onChange={e=>setOrganisation(e.target.value)} type="text" placeholder="Company or NGO"/></label></div><div className="form-row"><label>Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="name@company.com"/></label><label>Organisation type<select value={type} onChange={e=>setType(e.target.value)}><option value="">Select one</option><option>SME</option><option>NGO / social enterprise</option><option>Corporate / bank</option><option>Accountant / consultant</option><option>Association / foundation</option><option>Other</option></select></label></div><label>What would you like to explore?<textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="Tell us briefly about your ESG starting point or partnership idea."/></label><button type="submit" className="v2-button primary">Continue on WhatsApp <b>↗</b></button><small>This opens a WhatsApp enquiry. This website does not store the information entered in this form. See our <a href="/privacy">Privacy & data governance draft</a>.</small></form></section></main><SiteFooter/></>;
}
