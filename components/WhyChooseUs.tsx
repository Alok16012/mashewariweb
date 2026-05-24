"use client";

import { ShieldCheck, TrendingUp, Headphones, FileText, Handshake, Star } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Verified Properties",
    desc: "Every listing is physically verified by our team before being published. No fake listings, no fraud.",
    color: "#d0021b",
    bg: "#fff0f1",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Best Market Rates",
    desc: "We analyze the Bihar real estate market daily to give you the most competitive and fair pricing.",
    color: "#2b6cb0",
    bg: "#ebf8ff",
  },
  {
    icon: <Headphones size={32} />,
    title: "Dedicated Support",
    desc: "Our experts are available 7 days a week to guide you through every step of buying or renting.",
    color: "#276749",
    bg: "#f0fff4",
  },
  {
    icon: <FileText size={32} />,
    title: "Legal Assistance",
    desc: "We handle all paperwork, registration, and legal documentation so you can focus on what matters.",
    color: "#744210",
    bg: "#fffaf0",
  },
  {
    icon: <Handshake size={32} />,
    title: "10+ Years Experience",
    desc: "A decade of helping families and businesses find their perfect space across Bihar and Patna.",
    color: "#6b46c1",
    bg: "#faf5ff",
  },
  {
    icon: <Star size={32} />,
    title: "4.7 Google Rating",
    desc: "Rated excellent by 28+ verified clients on Google. Real results, real satisfaction.",
    color: "#c05621",
    bg: "#fffaf0",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      style={{
        background: "#fff",
        padding: "64px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--primary)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: 10,
            }}
          >
            Why Maheshwari Realcon
          </span>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "var(--text-dark)",
              lineHeight: 1.2,
            }}
          >
            Your Trusted Real Estate Partner
            <br />
            <span style={{ color: "var(--primary)" }}>in Bihar</span>
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              fontSize: 15,
              marginTop: 14,
              maxWidth: 520,
              margin: "14px auto 0",
              lineHeight: 1.7,
            }}
          >
            We&apos;re not just agents — we&apos;re your neighbors. Based at Saguna More, Patna, we know Bihar&apos;s real estate market inside out.
          </p>
        </div>

        {/* Features grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map(({ icon, title, desc, color, bg }) => (
            <div
              key={title}
              style={{
                background: bg,
                borderRadius: 12,
                padding: "28px 24px",
                border: `1.5px solid ${color}18`,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
                el.style.borderColor = `${color}44`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = `${color}18`;
              }}
            >
              <div
                style={{
                  color,
                  marginBottom: 16,
                  width: 56,
                  height: 56,
                  background: "#fff",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  marginBottom: 10,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--text-medium)",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg, #d0021b, #6b0a1a)",
            borderRadius: 16,
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h3
              style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}
            >
              Ready to find your perfect property?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>
              Talk to our experts today. Free consultation, zero obligation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="tel:+919708309999"
              style={{
                background: "#fff",
                color: "var(--primary)",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: 800,
                fontSize: 15,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              📞 Call: 097083 09999
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: 8,
                padding: "12px 28px",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
