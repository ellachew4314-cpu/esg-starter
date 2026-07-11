"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter, SiteNav } from "./components/SiteNav";

const industries = {
  Education: ["Students reached", "Teacher training", "Safeguarding", "Utility baseline"],
  Hospitality: ["Guest nights", "Energy per stay", "Water use", "Responsible sourcing"],
  "F&B": ["Food waste", "Packaging", "Local sourcing", "Staff wellbeing"],
  NGO: ["People reached", "Volunteer hours", "Programme evidence", "Donor reporting"],
};

type Industry = keyof typeof industries;

export default function Home() {
  const [industry, setIndustry] = useState<Industry>("Education");

  return <><SiteNav /><main className="v2-page">
    <section className="v2-hero">
      <div className="v2-hero-copy">
        <div className="v2-eyebrow"><span /> Practical ESG infrastructure for SMEs & impact organisations</div>
        <h1>Turn everyday action into <em>ESG opportunity.</em></h1>
        <p>Collect the data you already have, organise evidence, track a practical annual plan and generate a clear ESG Starter Report — without needing an ESG department.</p>
        <div className="v2-actions"><Link className="v2-button primary" href="/cyberjaya-pilot">View Cyberjaya pilot proposal <b>↗</b></Link><Link className="v2-button ghost" href="/platform">See how it works <b>→</b></Link></div>
        <div className="v2-trust"><span>Built for real starting points</span><b>SMEs</b><b>NGOs</b><b>Education</b><b>Impact projects</b></div>
      </div>
      <div className="v2-product-stage" aria-label="ESG Starter product dashboard preview">
        <div className="v2-glow" />
        <div className="v2-product-window">
          <div className="v2-window-bar"><div className="v2-mini-brand"><i>A</i><span>ESG Starter</span></div><div className="v2-period">FY 2026 <b>⌄</b></div></div>
          <div className="v2-app-body"><aside><b>Overview</b><span>Action plan</span><span>Evidence</span><span>Reports</span><span>Opportunities</span><i /></aside><div className="v2-app-main"><div className="v2-app-heading"><div><small>GOOD MORNING, ELLA</small><h3>Your ESG starting point</h3></div><span className="v2-status">● Pilot active</span></div><div className="v2-metric-grid"><div><span>Data completion</span><strong>72%</strong><i><b style={{width:"72%"}} /></i></div><div><span>Evidence items</span><strong>24</strong><small>+8 this month</small></div><div><span>Next milestone</span><strong>14<small> days</small></strong><small>Baseline report</small></div></div><div className="v2-app-grid"><div className="v2-chart-card"><div><b>ESG readiness</b><span>Across selected locations</span></div><div className="v2-donut"><strong>72%</strong></div><div className="v2-legend"><span><i className="e" />E&nbsp; 70%</span><span><i className="s" />S&nbsp; 82%</span><span><i className="g" />G&nbsp; 64%</span></div></div><div className="v2-task-card"><b>Priority actions</b><div><i>✓</i><span>Utility baseline</span><em>In progress</em></div><div><i>2</i><span>Assign data owner</span><em>Next</em></div><div><i>3</i><span>Upload evidence</span><em>Planned</em></div></div></div></div></div>
        </div>
        <div className="v2-floating-card v2-float-one"><span>Report readiness</span><b>Starter report</b><em>72% complete</em></div>
        <div className="v2-floating-card v2-float-two"><i>✓</i><div><span>Evidence verified</span><b>3 new records</b></div></div>
      </div>
    </section>

    <section className="v2-statement"><div className="v2-eyebrow"><span /> The problem we are solving</div><h2>ESG training explains the concept.<br />Businesses still ask: <em>“What do I do on Monday?”</em></h2><p>ESG Starter closes the gap between understanding ESG and actually putting it into practice.</p></section>

    <section className="v2-brand-card" aria-label="ESG Starter brand statement">
      <img src="/og.png" alt="ESG Starter brand statement" />
      <div><span>THE ESG STARTER PROMISE</span><p>From ESG Action to ESG Opportunity.</p></div>
    </section>

    <section className="v2-flow-section">
      <div className="v2-section-head"><div><div className="v2-kicker">THE ESG STARTER WORKFLOW</div><h2>Start with what you have.<br /><em>Build what you need.</em></h2></div><p>A simple guided journey turns scattered bills, photos, activities and policies into structured data, visible progress and an opportunity-ready report.</p></div>
      <div className="v2-flow"><article><span>01</span><div className="v2-flow-icon">⌁</div><h3>Assess</h3><p>Answer practical questions based on your organisation and industry.</p></article><article><span>02</span><div className="v2-flow-icon">＋</div><h3>Collect</h3><p>Capture monthly data and upload evidence in a familiar format.</p></article><article><span>03</span><div className="v2-flow-icon">▦</div><h3>Track</h3><p>See completion, missing data and annual actions at a glance.</p></article><article><span>04</span><div className="v2-flow-icon">↗</div><h3>Report</h3><p>Generate a Starter Report that shows progress and next steps.</p></article></div>
    </section>

    <section className="v2-feature v2-soft">
      <div className="v2-feature-copy"><div className="v2-kicker">ONE SIMPLE SYSTEM</div><h2>From scattered records to a clear ESG baseline.</h2><p>Each location contributes only the information it can realistically provide. ESG Starter structures it into Environment, Social and Governance — with owners, evidence and status.</p><ul><li>Simple monthly data entry</li><li>Evidence connected to every metric</li><li>Missing-data alerts and reminders</li><li>Clear network and centre-level views</li></ul><Link href="/platform">Explore the platform <b>↗</b></Link></div>
      <div className="v2-feature-visual aqua"><div className="v2-data-card"><div className="v2-data-head"><div><span>Monthly data collection</span><b>Education network</b></div><em>3 centres</em></div><div className="v2-months"><span>JUL ✓</span><span>AUG ✓</span><span>SEP ○</span><span>OCT ○</span></div><div className="v2-location"><b>Bukit Jalil</b><span>Electricity bill</span><em className="done">Complete</em></div><div className="v2-location"><b>Cheras Balakong</b><span>Training hours</span><em className="done">Complete</em></div><div className="v2-location"><b>Puchong Jaya</b><span>Water bill</span><em>Needs review</em></div></div><div className="v2-alert"><i>!</i><div><b>1 missing record</b><span>Puchong Jaya · Water usage</span></div><em>Review →</em></div></div>
    </section>

    <section className="v2-industries">
      <div className="v2-section-head"><div><div className="v2-kicker">INDUSTRY-AWARE BY DESIGN</div><h2>One ESG core.<br /><em>Different questions.</em></h2></div><p>A learning centre should not answer the same questions as a hotel or restaurant. ESG Starter adapts the metrics while keeping one consistent reporting structure.</p></div>
      <div className="v2-industry-tabs" role="tablist">{(Object.keys(industries) as Industry[]).map((item)=><button key={item} className={industry===item?"active":""} onClick={()=>setIndustry(item)}>{item}</button>)}</div>
      <div className="v2-industry-panel"><div><span>SELECTED TEMPLATE</span><h3>{industry}</h3><p>Starter metrics are prioritised by what is material, measurable and realistic for an organisation at the beginning of its ESG journey.</p></div><div className="v2-metric-list">{industries[industry].map((metric,index)=><div key={metric}><i>{String(index+1).padStart(2,"0")}</i><b>{metric}</b><span>Track monthly</span></div>)}</div></div>
    </section>

    <section className="v2-pilots">
      <div className="v2-section-head light"><div><div className="v2-kicker">FOUNDER-LED VALIDATION</div><h2>Built with real action,<br /><em>not hypothetical personas.</em></h2></div><p>Our first two pilots test both sides of ESG Starter: organisation-wide baseline reporting and project-level impact reporting.</p></div>
      <div className="v2-pilot-grid"><Link className="v2-pilot-card education" href="/kindle-pilot"><img src="/kindle-pilot-hero.png" alt="Education professionals reviewing pilot information" /><div className="v2-pilot-overlay"><span>ORGANISATION ESG PILOT</span><h3>Kindle Mind</h3><p>Three Klang Valley centres · Education baseline · 90-day action plan</p><b>View pilot dashboard ↗</b></div></Link><Link className="v2-pilot-card beach" href="/impact"><img src="/beach-cleanup.jpeg" alt="Volunteers collecting waste during a coastal clean-up" /><div className="v2-pilot-overlay"><span>IMPACT DATA PILOT</span><h3>Beach Cleaning</h3><p>Volunteer forms · Waste categories · Evidence-backed impact report</p><b>Explore the field report ↗</b></div></Link></div>
    </section>

    <section className="v2-founder"><div className="v2-founder-quote"><div className="v2-kicker">WHY THE AWAKEN GROUP BUILT ESG STARTER</div><blockquote>“I understood ESG in theory — but I still could not see how to make it happen inside my own businesses.”</blockquote><p>That gap became the starting point for ESG Starter: a method that helps every organisation begin with the work it is already doing.</p><Link href="/founder">Read Ella’s founder story <b>↗</b></Link></div><div className="v2-founder-facts"><div><strong>10,000+</strong><span>adults and students trained</span></div><div><strong>37</strong><span>education centres across the region</span></div><div><strong>2015</strong><span>first education business founded</span></div><div><strong>01</strong><span>practical ESG platform being built</span></div></div></section>

    <section className="v2-final"><div><div className="v2-kicker">FROM ESG ACTION TO ESG OPPORTUNITY</div><h2>Your organisation may already be doing more than you think.</h2></div><div><p>ESG Starter helps you capture it, understand it and build the next step.</p><Link className="v2-button primary" href="/contact">Start a conversation <b>↗</b></Link></div></section>
  </main><SiteFooter /></>;
}
