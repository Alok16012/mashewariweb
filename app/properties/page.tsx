"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search, MapPin, BedDouble, Bath, Square, Heart,
  Phone, Tag, X, ChevronDown, Building2,
} from "lucide-react";
import { properties } from "@/lib/properties";
import type { Property } from "@/lib/properties";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const typeFilters   = ["All", "Residential", "Commercial", "Industrial", "Land"];
const statusFilters = ["All Status", "Ready to Move", "New Launch", "Under Construction"];
const sortOptions   = ["Newest First", "Price: Low to High", "Price: High to Low", "Area: Large to Small"];

const statusColors: Record<Property["status"], { bg: string; color: string }> = {
  "Ready to Move":       { bg: "#e6f4ea", color: "#1e7e34" },
  "Under Construction":  { bg: "#fff3e0", color: "#e65100" },
  "New Launch":          { bg: "#e8eaf6", color: "#3949ab" },
};

function PropertyCard({ p, liked, onLike }: { p: Property; liked: boolean; onLike: () => void }) {
  return (
    <Link href={`/property/${p.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#fff", borderRadius: 10, overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transition: "all 0.25s",
          cursor: "pointer", height: "100%",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.14)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; }}
      >
        <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.images[0]} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.06)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
          />
          {p.tag && (
            <span style={{ position: "absolute", top: 12, left: 12, background: "var(--primary)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, display: "flex", alignItems: "center", gap: 4 }}>
              <Tag size={10} /> {p.tag}
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); onLike(); }}
            style={{ position: "absolute", top: 12, right: 12, background: "#fff", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            <Heart size={16} fill={liked ? "#d0021b" : "none"} color={liked ? "#d0021b" : "#767676"} />
          </button>
          <span style={{ position: "absolute", bottom: 12, left: 12, ...statusColors[p.status], fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>
            {p.status}
          </span>
          <span style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: 11, padding: "3px 8px", borderRadius: 4 }}>
            {p.images.length} Photos
          </span>
        </div>

        <div style={{ padding: "14px 16px 16px" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "var(--primary)", background: "var(--primary-light)", padding: "2px 8px", borderRadius: 3, display: "inline-block", marginBottom: 8 }}>
            {p.subType}
          </span>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-dark)", marginBottom: 6, lineHeight: 1.3 }}>{p.title}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
            <MapPin size={13} color="var(--text-light)" />
            <span style={{ fontSize: 13, color: "var(--text-light)" }}>{p.location}</span>
          </div>

          {(p.beds || p.area) && (
            <div style={{ display: "flex", gap: 16, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
              {p.beds && <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "var(--text-medium)" }}><BedDouble size={14} /> {p.beds} Beds</span>}
              {p.baths && <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "var(--text-medium)" }}><Bath size={14} /> {p.baths} Baths</span>}
              <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "var(--text-medium)" }}><Square size={14} /> {p.area}</span>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--primary)" }}>{p.price}</div>
              {p.pricePerSqft && <div style={{ fontSize: 11, color: "var(--text-light)" }}>{p.pricePerSqft}</div>}
            </div>
            <span
              onClick={(e) => { e.preventDefault(); window.location.href = "tel:+919708309999"; }}
              style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--primary)", color: "#fff", borderRadius: 6, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
            >
              <Phone size={12} /> Enquire
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function PropertiesContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const initQ      = searchParams.get("q")      ?? "";
  const initType   = searchParams.get("type")   ?? "All";
  const initStatus = searchParams.get("status") ?? "All Status";
  const initSort   = searchParams.get("sort")   ?? "Newest First";
  const initIntent = searchParams.get("intent") ?? "";

  const [search,       setSearch]       = useState(initQ);
  const [typeFilter,   setTypeFilter]   = useState(initType);
  const [statusFilter, setStatusFilter] = useState(initStatus);
  const [sortBy,       setSortBy]       = useState(initSort);
  const [likedSet,     setLikedSet]     = useState<Set<number>>(new Set());

  // Page title based on intent / type
  const pageTitle = (() => {
    if (initIntent === "buy")        return "Properties for Sale in Bihar";
    if (initIntent === "rent")       return "Properties for Rent in Bihar";
    if (initIntent === "commercial") return "Commercial Properties in Bihar";
    if (typeFilter !== "All")        return `${typeFilter} Properties in Bihar`;
    if (initQ)                       return `Search results for "${initQ}"`;
    return "All Properties in Bihar";
  })();

  const toggleLike = (id: number) =>
    setLikedSet((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  // Push updated params to URL without reload
  const updateParams = (overrides: Record<string, string>) => {
    const p = new URLSearchParams(searchParams.toString());
    Object.entries(overrides).forEach(([k, v]) => v ? p.set(k, v) : p.delete(k));
    router.replace(`/properties?${p.toString()}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    let list = [...properties];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.subType.toLowerCase().includes(q)
      );
    }
    if (typeFilter !== "All") list = list.filter((p) => p.type === typeFilter);
    if (statusFilter !== "All Status") list = list.filter((p) => p.status === statusFilter);

    // intent filter (buy = non-rent, rent = show all with "Rent" tag, etc.)
    if (initIntent === "rent")       list = list.filter((p) => p.status === "Ready to Move");
    if (initIntent === "commercial") list = list.filter((p) => p.type === "Commercial");

    switch (sortBy) {
      case "Price: Low to High":    list.sort((a, b) => a.priceValue - b.priceValue); break;
      case "Price: High to Low":    list.sort((a, b) => b.priceValue - a.priceValue); break;
      case "Area: Large to Small":  list.sort((a, b) => b.areaValue - a.areaValue);   break;
      default: list.sort((a, b) => b.id - a.id);
    }
    return list;
  }, [search, typeFilter, statusFilter, sortBy, initIntent]);

  const clearAll = () => {
    setSearch(""); setTypeFilter("All"); setStatusFilter("All Status");
    router.replace("/properties", { scroll: false });
  };

  const hasFilters = typeFilter !== "All" || statusFilter !== "All Status" || search;

  return (
    <>
      {/* Hero bar */}
      <div style={{ background: "linear-gradient(135deg, #1a0a0e 0%, #6b0a1a 60%, #d0021b 100%)", paddingTop: 100, paddingBottom: 40 }}>
        <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>
            <span style={{ color: "#fff", fontSize: 13 }}>Properties</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, marginBottom: 8 }}>{pageTitle}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
            {properties.length} verified listings — Residential, Commercial, Industrial &amp; Land
          </p>

          {/* Search bar */}
          <div style={{ marginTop: 24, background: "#fff", borderRadius: 10, display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <Search size={18} color="var(--text-light)" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); updateParams({ q: e.target.value }); }}
              onKeyDown={(e) => { if (e.key === "Enter") updateParams({ q: search }); }}
              placeholder="Search by location, type, title..."
              style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "var(--text-dark)", fontFamily: "inherit", background: "transparent" }}
            />
            {search && (
              <button onClick={() => { setSearch(""); updateParams({ q: "" }); }} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={16} color="var(--text-light)" />
              </button>
            )}
            <button
              onClick={() => updateParams({ q: search })}
              style={{ background: "var(--primary)", color: "#fff", border: "none", borderRadius: 6, padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-8" style={{ maxWidth: 1200 }}>
        {/* Filter row */}
        <div className="filter-bar" style={{ background: "#fff", borderRadius: 10, padding: "14px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid var(--border)" }}>
          <div className="filter-pills" style={{ display: "flex", gap: 6, flexWrap: "wrap", flex: 1, minWidth: 0 }}>
            {typeFilters.map((t) => (
              <button key={t} onClick={() => { setTypeFilter(t); updateParams({ type: t === "All" ? "" : t, intent: "" }); }}
                style={{ padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, border: "1.5px solid", cursor: "pointer", transition: "all 0.15s", borderColor: typeFilter === t ? "var(--primary)" : "var(--border)", background: typeFilter === t ? "var(--primary)" : "#fff", color: typeFilter === t ? "#fff" : "var(--text-medium)", whiteSpace: "nowrap" }}>
                {t}
              </button>
            ))}
          </div>
          <div className="filter-selects" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            {[{ val: statusFilter, opts: statusFilters, key: "status", setter: setStatusFilter },
              { val: sortBy,       opts: sortOptions,   key: "sort",   setter: setSortBy }].map(({ val, opts, key, setter }) => (
              <div key={key} style={{ position: "relative" }}>
                <select value={val} onChange={(e) => { setter(e.target.value); updateParams({ [key]: e.target.value }); }}
                  style={{ appearance: "none", border: "1.5px solid var(--border)", borderRadius: 6, padding: "7px 28px 7px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "var(--text-medium)", outline: "none", fontFamily: "inherit", maxWidth: 140 }}>
                  {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
                <ChevronDown size={12} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-light)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Results count + clear */}
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: 14, color: "var(--text-medium)", fontWeight: 600 }}>
            Showing <span style={{ color: "var(--primary)" }}>{filtered.length}</span> properties
            {typeFilter !== "All" && ` · ${typeFilter}`}
            {search && ` · "${search}"`}
          </p>
          {hasFilters && (
            <button onClick={clearAll} style={{ fontSize: 12, color: "var(--primary)", fontWeight: 600, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
              <X size={12} /> Clear all filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
            <Building2 size={48} style={{ opacity: 0.3, margin: "0 auto 16px" }} />
            <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>No properties found</p>
            <p style={{ fontSize: 14 }}>Try adjusting your filters or search term</p>
            <button onClick={clearAll} style={{ marginTop: 16, background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
              Show All Properties
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map((p) => (
              <PropertyCard key={p.id} p={p} liked={likedSet.has(p.id)} onLike={() => toggleLike(p.id)} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: 48, background: "linear-gradient(135deg, #d0021b, #6b0a1a)", borderRadius: 16, padding: "32px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Can&apos;t find what you&apos;re looking for?</h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>Tell us your requirements — we&apos;ll find the perfect property for you.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="tel:+919708309999" style={{ background: "#fff", color: "var(--primary)", borderRadius: 8, padding: "11px 24px", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>📞 097083 09999</a>
            <Link href="/about#contact" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 8, padding: "11px 24px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Send Enquiry</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .filter-bar      { flex-direction: column; align-items: stretch !important; padding: 12px !important; }
          .filter-pills    { flex: none !important; }
          .filter-selects  { flex-direction: row; width: 100%; }
          .filter-selects select { flex: 1; max-width: none !important; }
        }
      `}</style>
    </>
  );
}

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ paddingTop: 120, textAlign: "center", color: "var(--text-light)" }}>Loading properties…</div>}>
        <PropertiesContent />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
