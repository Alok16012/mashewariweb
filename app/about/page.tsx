"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2, Phone, MapPin, Mail, Clock, Star,
  ShieldCheck, TrendingUp, Headphones, FileText,
  Handshake, Award, Users, CheckCircle, Send, ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const team = [
  {
    name: "Rajesh Maheshwari",
    role: "Founder & Managing Director",
    exp: "15+ Years Experience",
    avatar: "RM",
    color: "#d0021b",
    speciality: "Residential & Industrial",
  },
  {
    name: "Priya Maheshwari",
    role: "Commercial Property Head",
    exp: "10+ Years Experience",
    avatar: "PM",
    color: "#2b6cb0",
    speciality: "Commercial & Retail",
  },
  {
    name: "Suresh Kumar",
    role: "Industrial Property Specialist",
    exp: "8+ Years Experience",
    avatar: "SK",
    color: "#276749",
    speciality: "Industrial & Warehouses",
  },
  {
    name: "Anjali Singh",
    role: "Client Relations Manager",
    exp: "6+ Years Experience",
    avatar: "AS",
    color: "#744210",
    speciality: "Customer Support & Legal",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Started at Saguna More, Patna with a vision to transform Bihar's real estate market." },
  { year: "2016", title: "500 Properties Sold", desc: "Crossed 500 successful property transactions across Patna and Bihta." },
  { year: "2019", title: "Industrial Expansion", desc: "Became Bihar's leading industrial property consultant in Bihta EPIP zone." },
  { year: "2022", title: "1000+ Happy Clients", desc: "Served over 1000 families and businesses across Bihar." },
  { year: "2024", title: "4.7★ Google Rating", desc: "Recognised as top-rated real estate agency in Bihar on Google." },
  { year: "2026", title: "Digital Platform Launch", desc: "Launched our digital property portal for easier property discovery." },
];

const values = [
  { icon: <ShieldCheck size={28} />, title: "Transparency", desc: "We believe in complete transparency — no hidden charges, no false promises." },
  { icon: <Handshake size={28} />, title: "Trust", desc: "Every client relationship is built on trust, integrity and honest dealings." },
  { icon: <TrendingUp size={28} />, title: "Value for Money", desc: "We negotiate the best market rates so you always get maximum value." },
  { icon: <Headphones size={28} />, title: "Customer First", desc: "Your satisfaction is our priority. We're available 7 days a week." },
  { icon: <FileText size={28} />, title: "Legal Clarity", desc: "We ensure all documentation and legal processes are clean and clear." },
  { icon: <Award size={28} />, title: "Excellence", desc: "A decade of delivering excellence in Bihar's dynamic real estate market." },
];

const reviews = [
  { name: "Nikesh Sharma",    text: "Best price available in Bihta. Good service.", rating: 5, avatar: "NS" },
  { name: "Vikash Kumar",     text: "One of the best places to invest your money.", rating: 5, avatar: "VK" },
  { name: "Arif Khan",        text: "Best service provider and customer satisfaction awesome.", rating: 5, avatar: "AK" },
  { name: "Priya Singh",      text: "Maheshwari Realcon made my dream of owning a home in Patna a reality. No stress, no confusion.", rating: 5, avatar: "PS" },
  { name: "Rajesh Prasad",    text: "Excellent agency! Got a warehouse at a very competitive price. Will definitely use again.", rating: 5, avatar: "RP" },
];

const inputStyle: React.CSSProperties = {
  width: "100%", border: "1.5px solid var(--border)", borderRadius: 6,
  padding: "11px 14px", fontSize: 14, outline: "none",
  transition: "border-color 0.2s", fontFamily: "inherit", background: "#fff",
};

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <Header />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #1a0a0e 0%, #6b0a1a 55%, #d0021b 100%)",
        paddingTop: 120, paddingBottom: 72, position: "relative", overflow: "hidden",
      }}>
        {/* grid overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

        <div className="mx-auto px-4" style={{ maxWidth: 1200, position: "relative" }}>
          {/* breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ color: "#fff", fontSize: 13 }}>About Us</span>
          </div>

          <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 700, display: "inline-block", marginBottom: 16, backdropFilter: "blur(8px)" }}>
                Est. 2014 · Saguna More, Patna
              </span>
              <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                Bihar&apos;s Most Trusted<br />
                <span style={{ color: "#ffb3b8" }}>Real Estate Partner</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Maheshwari Realcon Pvt. Ltd. has been helping families and businesses find their perfect space in Bihar since 2014. With 10+ years of expertise, 1200+ happy clients, and a 4.7★ Google rating — we are Patna&apos;s go-to real estate agency.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+919708309999" style={{ background: "#fff", color: "var(--primary)", borderRadius: 8, padding: "12px 24px", fontWeight: 800, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={16} /> Call: 097083 09999
                </a>
                <a href="#contact" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.4)", borderRadius: 8, padding: "12px 24px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                  Send Enquiry
                </a>
              </div>
            </div>

            {/* Stats cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { val: "10+",   label: "Years in Business",  icon: <Award size={24} /> },
                { val: "1200+", label: "Happy Clients",       icon: <Users size={24} /> },
                { val: "500+",  label: "Properties Sold",     icon: <Building2 size={24} /> },
                { val: "4.7★",  label: "Google Rating",       icon: <Star size={24} /> },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ color: "#ffb3b8", marginBottom: 10, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
            <path d="M0 48L60 40C120 32 240 16 360 14C480 12 600 24 720 30C840 36 960 32 1080 26C1200 20 1320 14 1380 11L1440 8V48H0Z" fill="#f7f8fa" />
          </svg>
        </div>
      </section>

      {/* ── Who We Are ──────────────────────────────────────────── */}
      <section style={{ background: "#f7f8fa", padding: "64px 0" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div className="about-who-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: 10 }}>Who We Are</span>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.25, marginBottom: 18 }}>
                We&apos;re Not Just Agents —<br />We&apos;re Your Neighbors
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-medium)", lineHeight: 1.85, marginBottom: 16 }}>
                Founded in 2014 by <strong>Rajesh Maheshwari</strong>, Maheshwari Realcon Pvt. Ltd. started with a simple mission: bring transparency and trust to Bihar&apos;s real estate market. Based at Saguna More, Patna — the heart of Bihar&apos;s property market — we know every street, every colony, every upcoming zone.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-medium)", lineHeight: 1.85, marginBottom: 24 }}>
                From a small family office to Bihar&apos;s most-rated agency, our growth has been driven by one thing: our clients&apos; trust. We specialize in residential flats, commercial offices, industrial sheds, and land across Patna, Bihta, Danapur, and beyond.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["RERA registered properties", "Clear title verification on every listing", "Free legal documentation support", "Post-sale registration assistance"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle size={17} color="#00897b" />
                    <span style={{ fontSize: 14, color: "var(--text-medium)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office image / map card */}
            <div>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", marginBottom: 16 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.27!2d85.0500!3d25.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaguna+More%2C+Patna%2C+Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="280" style={{ border: 0, display: "block" }}
                  allowFullScreen={false} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maheshwari Realcon Office Location"
                />
              </div>
              <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid var(--border)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: "var(--primary-light)", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={20} color="var(--primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)", marginBottom: 4 }}>Our Office</div>
                  <div style={{ fontSize: 13, color: "var(--text-medium)", lineHeight: 1.6 }}>
                    Sri Niwas Avenue, 4th Floor, Saguna More<br />
                    Opposite: IndusInd Bank, Bihar – 801503
                  </div>
                  <a href="tel:+919708309999" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, color: "var(--primary)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> 097083 09999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "64px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>Our Foundation</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8 }}>
              What We Stand For
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {values.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "var(--bg)", borderRadius: 12, padding: "26px 22px", border: "1.5px solid var(--border)", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >
                <div style={{ width: 52, height: 52, background: "var(--primary-light)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: 16 }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-dark)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-medium)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey / Timeline ──────────────────────────────────── */}
      <section style={{ background: "var(--bg)", padding: "64px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>Our Journey</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8 }}>
              10 Years of Excellence
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--primary), #6b0a1a)", transform: "translateX(-50%)", borderRadius: 2 }} />

            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                alignItems: "center",
                gap: 0,
                marginBottom: 36,
              }}>
                {/* Content */}
                <div style={{ flex: 1, padding: i % 2 === 0 ? "0 32px 0 0" : "0 0 0 32px", textAlign: i % 2 === 0 ? "right" : "left" }}>
                  <div style={{ background: "#fff", borderRadius: 12, padding: "18px 20px", border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "inline-block", maxWidth: 320, width: "100%", textAlign: "left" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", marginBottom: 4 }}>{m.year}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-dark)", marginBottom: 6 }}>{m.title}</div>
                    <div style={{ fontSize: 13, color: "var(--text-medium)", lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                </div>

                {/* Dot */}
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--primary)", border: "3px solid #fff", boxShadow: "0 0 0 3px var(--primary)", flexShrink: 0, zIndex: 1 }} />

                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "64px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>The People Behind</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8 }}>Meet Our Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
            {team.map((member) => (
              <div key={member.name} style={{ background: "var(--bg)", borderRadius: 14, padding: "28px 20px", textAlign: "center", border: "1px solid var(--border)", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${member.color}, #1a0a0e)`, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 24, margin: "0 auto 16px" }}>
                  {member.avatar}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: "var(--text-dark)", marginBottom: 4 }}>{member.name}</h3>
                <p style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, marginBottom: 6 }}>{member.role}</p>
                <p style={{ fontSize: 12, color: "var(--text-light)", marginBottom: 10 }}>{member.exp}</p>
                <span style={{ display: "inline-block", background: "var(--primary-light)", color: "var(--primary)", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>
                  {member.speciality}
                </span>
                <div style={{ marginTop: 14 }}>
                  <a href="tel:+919708309999" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--primary)", color: "#fff", borderRadius: 6, padding: "7px 16px", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
                    <Phone size={12} /> Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--bg)", padding: "64px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>Testimonials</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8 }}>What Clients Say</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 12 }}>
              <div style={{ background: "#00897b", color: "#fff", borderRadius: 8, padding: "6px 14px", fontWeight: 800, fontSize: 22 }}>4.7</div>
              <div>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map((s) => <Star key={s} size={16} fill="#ffb800" color="#ffb800" />)}</div>
                <div style={{ fontSize: 12, color: "var(--text-light)", marginTop: 2 }}>28 Google Reviews</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ background: "#fff", borderRadius: 12, padding: "24px 22px", border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "all 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary), #6b0a1a)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-dark)" }}>{r.name}</div>
                    <div style={{ display: "flex", gap: 2, marginTop: 3 }}>{[1,2,3,4,5].map((s) => <Star key={s} size={12} fill="#ffb800" color="#ffb800" />)}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-medium)", lineHeight: 1.7, fontStyle: "italic" }}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <section id="contact" style={{ background: "#fff", padding: "64px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px" }}>Get In Touch</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: "var(--text-dark)", marginTop: 8 }}>Contact Maheshwari Realcon</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32 }} className="contact-grid">
            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <MapPin size={20} color="var(--primary)" />, title: "Visit Us", lines: ["Sri Niwas Avenue, 4th Floor", "Saguna More, Opp. IndusInd Bank", "Bihar – 801503"] },
                { icon: <Phone size={20} color="var(--primary)" />, title: "Call Us", lines: ["097083 09999"], link: "tel:+919708309999" },
                { icon: <Mail size={20} color="var(--primary)" />, title: "Email Us", lines: ["info@maheshwarirealcon.com"], link: "mailto:info@maheshwarirealcon.com" },
                { icon: <Clock size={20} color="var(--primary)" />, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:30 PM", "Sunday: By appointment only"] },
              ].map(({ icon, title, lines, link }) => (
                <div key={title} style={{ display: "flex", gap: 14, background: "var(--bg)", borderRadius: 10, padding: "16px 18px", border: "1px solid var(--border)" }}>
                  <div style={{ width: 42, height: 42, background: "var(--primary-light)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text-dark)", marginBottom: 4 }}>{title}</div>
                    {lines.map((line) => link
                      ? <a key={line} href={link} style={{ display: "block", fontSize: 14, color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>{line}</a>
                      : <p key={line} style={{ fontSize: 13, color: "var(--text-medium)", margin: 0 }}>{line}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ background: "var(--bg)", borderRadius: 12, padding: "30px 26px", border: "1px solid var(--border)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 16px" }}>
                  <CheckCircle size={56} color="#00897b" style={{ margin: "0 auto 16px" }} />
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Thank you!</h3>
                  <p style={{ color: "var(--text-medium)", fontSize: 14, marginBottom: 16 }}>We&apos;ll contact you within 24 hours.</p>
                  <a href="tel:+919708309999" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", borderRadius: 8, padding: "10px 22px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    <Phone size={14} /> Call: 097083 09999
                  </a>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-dark)", marginBottom: 6 }}>Send us a Message</h3>
                  <p style={{ color: "var(--text-light)", fontSize: 13, marginBottom: 22 }}>Free consultation · No commitment</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Full Name *" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                      <input name="phone" value={form.phone} onChange={handle} required type="tel" placeholder="Phone Number *" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                    <input name="email" value={form.email} onChange={handle} type="email" placeholder="Email Address" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="How can we help you? Tell us about your requirements..." style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    <button type="submit" style={{ background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, padding: "13px", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary-hover)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary)")}>
                      <Send size={16} /> Send Message
                    </button>
                    <p style={{ fontSize: 11, color: "var(--text-light)", textAlign: "center" }}>🔒 Your details are 100% secure with us.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #d0021b, #6b0a1a)", padding: "48px 0" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#fff", marginBottom: 8 }}>Ready to Find Your Property?</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15 }}>Browse our verified listings or call us for a free consultation.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/properties" style={{ background: "#fff", color: "var(--primary)", borderRadius: 8, padding: "12px 28px", fontWeight: 800, fontSize: 15, textDecoration: "none" }}>
              View All Properties
            </Link>
            <a href="tel:+919708309999" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 8, padding: "12px 28px", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid    { grid-template-columns: 1fr !important; }
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .about-who-grid  { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </>
  );
}
