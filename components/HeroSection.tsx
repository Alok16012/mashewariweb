"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, Building, Warehouse } from "lucide-react";

const tabs = [
  { label: "Buy",         type: "buy" },
  { label: "Rent",        type: "rent" },
  { label: "Commercial",  type: "commercial" },
  { label: "PG / Co-living", type: "pg" },
];

const suggestions = [
  "Saguna More, Patna",
  "Bihta, Bihar",
  "Danapur, Patna",
  "Kankarbagh, Patna",
  "Boring Road, Patna",
  "Exhibition Road, Patna",
  "Rajendra Nagar, Patna",
  "Patna City",
];

const quickTypes = [
  { icon: <Home size={13} />,      label: "Residential", type: "Residential" },
  { icon: <Building size={13} />,  label: "Commercial",  type: "Commercial" },
  { icon: <Warehouse size={13} />, label: "Industrial",  type: "Industrial" },
  { icon: <MapPin size={13} />,    label: "Land/Plot",   type: "Land" },
];

const stats = [
  { value: "500+",  label: "Properties Listed" },
  { value: "1200+", label: "Happy Clients" },
  { value: "10+",   label: "Years Experience" },
  { value: "4.7★",  label: "Google Rating" },
];

export default function HeroSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery]         = useState("");
  const [showSugg, setShowSugg]   = useState(false);

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const doSearch = (q?: string, propertyType?: string) => {
    const searchQuery = q ?? query;
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (propertyType)        params.set("type", propertyType);
    // also respect active tab
    const tabType = tabs[activeTab].type;
    if (!propertyType && tabType !== "pg") params.set("intent", tabType);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a0a0e 0%, #6b0a1a 50%, #d0021b 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
        paddingBottom: 60,
      }}
    >
      {/* Background patterns */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative mx-auto px-4 w-full" style={{ maxWidth: 900, zIndex: 1 }}>
        {/* Trust badge */}
        <div className="flex justify-center mb-6">
          <span style={{
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff", borderRadius: 20, padding: "6px 18px",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", backdropFilter: "blur(8px)",
          }}>
            🏆 Bihar&apos;s Most Trusted Real Estate Agency
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          color: "#fff", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800,
          textAlign: "center", lineHeight: 1.15, marginBottom: 12,
          animation: "fadeUp 0.5s 0.1s ease forwards", opacity: 0,
        }}>
          Find Your Dream Property
          <br /><span style={{ color: "#ffb3b8" }}>in Bihar</span>
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.75)", fontSize: "clamp(14px, 2vw, 17px)",
          textAlign: "center", marginBottom: 40,
          animation: "fadeUp 0.5s 0.2s ease forwards", opacity: 0,
        }}>
          Residential · Industrial · Commercial · Land — Your trusted partner since 2014
        </p>

        {/* Search card */}
        <div style={{
          background: "#fff", borderRadius: 12, overflow: "visible",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          animation: "fadeUp 0.5s 0.3s ease forwards", opacity: 0,
          position: "relative",
        }}>
          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1, padding: "14px 8px", fontSize: 13, fontWeight: 700,
                  cursor: "pointer", border: "none", background: "none",
                  borderBottom: activeTab === i ? "3px solid var(--primary)" : "3px solid transparent",
                  color: activeTab === i ? "var(--primary)" : "var(--text-light)",
                  transition: "all 0.2s", whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div style={{ display: "flex", alignItems: "center", padding: "12px 16px", gap: 12, position: "relative" }}>
            <div style={{ position: "relative", flex: 1 }}>
              <MapPin size={17} color="var(--primary)" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="text"
                placeholder="Search by location, locality, landmark..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowSugg(true); }}
                onFocus={(e) => { setShowSugg(true); (e.target as HTMLInputElement).style.borderColor = "var(--primary)"; }}
                onBlur={(e) => { setTimeout(() => setShowSugg(false), 160); (e.target as HTMLInputElement).style.borderColor = "var(--border)"; }}
                onKeyDown={(e) => e.key === "Enter" && doSearch()}
                style={{
                  width: "100%", border: "1.5px solid var(--border)", borderRadius: 6,
                  padding: "11px 12px 11px 38px", fontSize: 14, outline: "none",
                  transition: "border-color 0.2s", fontFamily: "inherit",
                }}
              />

              {/* Suggestions dropdown */}
              {showSugg && filtered.length > 0 && (
                <div style={{
                  position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                  background: "#fff", border: "1px solid var(--border)", borderRadius: 8,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 200, overflow: "hidden",
                }}>
                  <div style={{ padding: "8px 14px 4px", fontSize: 11, fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    Popular Locations
                  </div>
                  {filtered.slice(0, 6).map((s) => (
                    <div
                      key={s}
                      onMouseDown={() => { setQuery(s); setShowSugg(false); doSearch(s); }}
                      style={{
                        padding: "10px 14px", cursor: "pointer", fontSize: 14,
                        display: "flex", alignItems: "center", gap: 10, color: "var(--text-medium)",
                        transition: "background 0.1s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
                    >
                      <MapPin size={13} color="var(--text-light)" /> {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => doSearch()}
              style={{
                background: "var(--primary)", color: "#fff", border: "none",
                borderRadius: 6, padding: "11px 28px", fontWeight: 700, fontSize: 14,
                cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                whiteSpace: "nowrap", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary)")}
            >
              <Search size={16} /> Search
            </button>
          </div>

          {/* Quick type filters */}
          <div style={{ borderTop: "1px solid var(--border)", padding: "10px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "var(--text-light)", marginRight: 4, alignSelf: "center" }}>Quick:</span>
            {quickTypes.map(({ icon, label, type }) => (
              <button
                key={label}
                onClick={() => doSearch("", type)}
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  background: "var(--primary-light)", color: "var(--primary)",
                  border: "1px solid rgba(208,2,27,0.2)", borderRadius: 20,
                  padding: "4px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-light)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12,
          marginTop: 40, animation: "fadeUp 0.5s 0.4s ease forwards", opacity: 0,
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              textAlign: "center", background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)", borderRadius: 10, padding: "18px 12px",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              <div style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
          <path d="M0 60L60 50C120 40 240 20 360 18C480 16 600 32 720 38C840 44 960 40 1080 34C1200 28 1320 20 1380 16L1440 12V60H0Z" fill="#f7f8fa" />
        </svg>
      </div>
    </section>
  );
}
