"use client";

import { Building2, Phone, MapPin, Mail, Star } from "lucide-react";

const quickLinks = [
  { label: "Buy Property", href: "#properties" },
  { label: "Rent Property", href: "#properties" },
  { label: "Commercial", href: "#properties" },
  { label: "Industrial", href: "#properties" },
  { label: "Land & Plots", href: "#properties" },
  { label: "About Us", href: "#about" },
];

const areas = [
  "Saguna More, Patna",
  "Bihta, Bihar",
  "Danapur, Patna",
  "Kankarbagh, Patna",
  "Boring Road, Patna",
  "Exhibition Road, Patna",
  "Rajendra Nagar, Patna",
  "Patna City",
];

export default function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#e5e7eb", overflowX: "hidden", width: "100%" }}>
      {/* Main footer */}
      <div
        className="mx-auto py-12"
        style={{ maxWidth: 1200, paddingLeft: 16, paddingRight: 16, width: "100%", boxSizing: "border-box" }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  background: "var(--primary)",
                  borderRadius: 8,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Building2 size={22} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  Maheshwari
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontWeight: 600,
                  }}
                >
                  Realcon Pvt. Ltd.
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                color: "#9ca3af",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Bihar&apos;s most trusted real estate agency. Helping families and businesses find their perfect space since 2014.
            </p>

            {/* Rating badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1f2937",
                borderRadius: 8,
                padding: "8px 14px",
                border: "1px solid #374151",
              }}
            >
              <div
                style={{
                  background: "#ffb800",
                  borderRadius: 4,
                  padding: "2px 7px",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#111",
                }}
              >
                4.7
              </div>
              <div style={{ display: "flex", gap: 1 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} fill="#ffb800" color="#ffb800" />
                ))}
              </div>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                borderBottom: "2px solid var(--primary)",
                paddingBottom: 8,
                display: "inline-block",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    fontSize: 13,
                    color: "#9ca3af",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#9ca3af")
                  }
                >
                  <span style={{ color: "var(--primary)", fontSize: 10 }}>▶</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                borderBottom: "2px solid var(--primary)",
                paddingBottom: 8,
                display: "inline-block",
              }}
            >
              Areas We Serve
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {areas.map((area) => (
                <span
                  key={area}
                  style={{
                    fontSize: 13,
                    color: "#9ca3af",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <MapPin size={11} color="var(--primary)" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                borderBottom: "2px solid var(--primary)",
                paddingBottom: 8,
                display: "inline-block",
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <MapPin size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
                  Sri Niwas Avenue, 4th Floor<br />
                  Saguna More, Opp. IndusInd Bank<br />
                  Bihar – 801503
                </span>
              </div>
              <a
                href="tel:+919708309999"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 14,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <Phone size={15} color="var(--primary)" />
                097083 09999
              </a>
              <a
                href="mailto:info@maheshwarirealcon.com"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 13,
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
              >
                <Mail size={15} color="var(--primary)" />
                info@maheshwarirealcon.com
              </a>
            </div>

            {/* Call CTA */}
            <a
              href="tel:+919708309999"
              style={{
                display: "block",
                marginTop: 20,
                background: "var(--primary)",
                color: "#fff",
                textAlign: "center",
                padding: "12px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                transition: "background 0.2s",
                animation: "pulse-ring 2s ease infinite",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--primary-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--primary)")
              }
            >
              📞 Call Now — Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1f2937",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingLeft: 16,
            paddingRight: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            boxSizing: "border-box",
          }}
        >
          <p style={{ fontSize: 12, color: "#6b7280" }}>
            © {new Date().getFullYear()} Maheshwari Realcon Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#6b7280")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
