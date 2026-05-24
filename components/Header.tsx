"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, Menu, X, Search, MapPin } from "lucide-react";

const navLinks = [
  { label: "Buy",        href: "/buy" },
  { label: "Rent",       href: "/rent" },
  { label: "Commercial", href: "/commercial" },
  { label: "Projects",   href: "/projects" },
  { label: "About Us",   href: "/about" },
];

const suggestions = [
  "Saguna More, Patna",
  "Bihta, Bihar",
  "Danapur, Patna",
  "Kankarbagh, Patna",
  "Boring Road, Patna",
  "Exhibition Road, Patna",
  "Rajendra Nagar, Patna",
  "Residential",
  "Commercial",
  "Industrial",
  "Land / Plot",
  "Villa",
  "Warehouse",
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery]           = useState("");
  const [showDrop, setShowDrop]     = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDrop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const doSearch = (q: string) => {
    if (!q.trim()) return;
    window.location.href = `/properties?q=${encodeURIComponent(q)}`;
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "#fff" : "transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.1)" : "none",
      }}
    >
      {/* Top bar */}
      {!scrolled && (
        <div style={{ background: "var(--primary)", padding: "6px 0" }}>
          <div className="mx-auto px-4" style={{ maxWidth: 1200, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#fff", fontSize: 12 }}>🏆 Bihar&apos;s Most Trusted Real Estate Agency</span>
            <a href="tel:+919708309999" style={{ color: "#fff", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
              <Phone size={13} /> 097083 09999
            </a>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav style={{ background: scrolled ? "#fff" : "rgba(255,255,255,0.97)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Image
                src="/logo.png"
                alt="Maheshwari Realcon Pvt. Ltd."
                width={46}
                height={46}
                style={{ objectFit: "contain", display: "block" }}
                priority
              />
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--primary)", lineHeight: 1.1, letterSpacing: "-0.3px" }}>Maheshwari</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Realcon Pvt. Ltd.</div>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive(link.href) ? "var(--primary)" : "var(--text-medium)",
                  background: isActive(link.href) ? "var(--primary-light)" : "transparent",
                  transition: "all 0.15s",
                  borderBottom: isActive(link.href) ? "2px solid var(--primary)" : "2px solid transparent",
                }}
                onMouseEnter={(e) => { if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
                onMouseLeave={(e) => { if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = "var(--text-medium)"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 10, flexShrink: 0 }}>
            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: "none", border: "1.5px solid var(--border)", borderRadius: 6,
                padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center",
                color: "var(--text-medium)", transition: "all 0.2s",
              }}
              title="Search properties"
            >
              <Search size={16} />
            </button>

            <Link
              href="/about#contact"
              style={{
                border: "1.5px solid var(--primary)", color: "var(--primary)",
                borderRadius: 6, padding: "7px 16px", fontWeight: 600, fontSize: 13,
                textDecoration: "none", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
            >
              Contact Us
            </Link>
            <a
              href="tel:+919708309999"
              style={{
                background: "var(--primary)", color: "#fff", borderRadius: 6,
                padding: "8px 16px", fontWeight: 700, fontSize: 13, textDecoration: "none",
                display: "flex", alignItems: "center", gap: 6, transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary)")}
            >
              <Phone size={13} /> Call Now
            </a>
          </div>

          {/* Mobile: search + menu */}
          <div className="md:hidden" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => setSearchOpen(!searchOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", padding: 4 }}>
              <Search size={20} />
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-dark)", padding: 4 }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search dropdown (desktop) */}
        {searchOpen && (
          <div ref={searchRef} style={{ borderTop: "1px solid var(--border)", background: "#fff", padding: "12px 0" }}>
            <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", border: "2px solid var(--primary)", borderRadius: 8, overflow: "hidden" }}>
                  <Search size={18} color="var(--primary)" style={{ marginLeft: 14, flexShrink: 0 }} />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setShowDrop(true); }}
                    onKeyDown={(e) => e.key === "Enter" && doSearch(query)}
                    placeholder="Search by location, property type, locality..."
                    style={{
                      flex: 1, border: "none", outline: "none", padding: "12px 14px",
                      fontSize: 15, fontFamily: "inherit",
                    }}
                  />
                  <button
                    onClick={() => doSearch(query)}
                    style={{
                      background: "var(--primary)", color: "#fff", border: "none",
                      padding: "12px 24px", fontWeight: 700, fontSize: 14,
                      cursor: "pointer", whiteSpace: "nowrap",
                    }}
                  >
                    Search
                  </button>
                </div>

                {showDrop && filtered.length > 0 && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
                    background: "#fff", border: "1px solid var(--border)", borderRadius: 8,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 100, overflow: "hidden",
                  }}>
                    <div style={{ padding: "8px 14px 6px", fontSize: 11, fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Suggestions
                    </div>
                    {filtered.slice(0, 7).map((s) => (
                      <div
                        key={s}
                        onClick={() => { setQuery(s); setShowDrop(false); doSearch(s); }}
                        style={{
                          padding: "10px 16px", cursor: "pointer", fontSize: 14,
                          display: "flex", alignItems: "center", gap: 10, color: "var(--text-medium)",
                          transition: "background 0.1s",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--bg)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
                      >
                        <MapPin size={14} color="var(--primary)" />
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden" style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "16px 20px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block", padding: "13px 0",
                  color: isActive(link.href) ? "var(--primary)" : "var(--text-medium)",
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <Link
                href="/about#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  flex: 1, textAlign: "center", border: "1.5px solid var(--primary)",
                  color: "var(--primary)", borderRadius: 6, padding: "11px",
                  fontWeight: 600, fontSize: 14, textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
              <a
                href="tel:+919708309999"
                style={{
                  flex: 1, textAlign: "center", background: "var(--primary)",
                  color: "#fff", borderRadius: 6, padding: "11px",
                  fontWeight: 700, fontSize: 14, textDecoration: "none",
                }}
              >
                📞 Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
