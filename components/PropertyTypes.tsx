"use client";

import { Home, Building2, Warehouse, Trees, Building, Store } from "lucide-react";

const types = [
  {
    icon: <Home size={28} />,
    label: "Residential",
    sub: "Flats, Villas, Plots",
    color: "#e53e3e",
    bg: "#fff5f5",
  },
  {
    icon: <Building2 size={28} />,
    label: "Commercial",
    sub: "Offices, Shops",
    color: "#2b6cb0",
    bg: "#ebf8ff",
  },
  {
    icon: <Warehouse size={28} />,
    label: "Industrial",
    sub: "Sheds, Warehouses",
    color: "#276749",
    bg: "#f0fff4",
  },
  {
    icon: <Trees size={28} />,
    label: "Land / Plot",
    sub: "Agricultural, NA Plots",
    color: "#744210",
    bg: "#fffaf0",
  },
  {
    icon: <Building size={28} />,
    label: "Under Construction",
    sub: "New Projects",
    color: "#6b46c1",
    bg: "#faf5ff",
  },
  {
    icon: <Store size={28} />,
    label: "Showroom / Retail",
    sub: "High street, Mall",
    color: "#c05621",
    bg: "#fffaf0",
  },
];

export default function PropertyTypes() {
  return (
    <section
      id="properties"
      style={{
        background: "#fff",
        padding: "56px 0 48px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 26px)",
              fontWeight: 800,
              color: "var(--text-dark)",
            }}
          >
            Browse by Property Type
          </h2>
          <p style={{ color: "var(--text-light)", marginTop: 6, fontSize: 14 }}>
            Find the right property for your needs
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 16,
          }}
        >
          {types.map(({ icon, label, sub, color, bg }) => (
            <button
              key={label}
              style={{
                background: bg,
                border: `1.5px solid ${color}22`,
                borderRadius: 12,
                padding: "24px 16px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                transition: "all 0.2s",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                el.style.borderColor = color;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = `${color}22`;
              }}
            >
              <div style={{ color }}>{icon}</div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text-dark)",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-light)",
                    marginTop: 3,
                  }}
                >
                  {sub}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
