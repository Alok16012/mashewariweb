"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Square, Heart, Phone, Tag } from "lucide-react";
import { properties } from "@/lib/properties";
import type { Property } from "@/lib/properties";

const filterTabs = ["All", "Residential", "Commercial", "Industrial", "Land"];

const statusColors: Record<Property["status"], { bg: string; color: string }> = {
  "Ready to Move": { bg: "#e6f4ea", color: "#1e7e34" },
  "Under Construction": { bg: "#fff3e0", color: "#e65100" },
  "New Launch": { bg: "#e8eaf6", color: "#3949ab" },
};

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const featured = properties.filter((p) => p.featured || p.id <= 6);

  const filtered =
    activeFilter === "All"
      ? featured
      : featured.filter((p) =>
          p.type.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="projects" style={{ background: "var(--bg)", padding: "56px 0" }}>
      <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "var(--text-dark)" }}>
              Featured Properties
            </h2>
            <p style={{ color: "var(--text-light)", marginTop: 6, fontSize: 14 }}>
              Handpicked listings across Bihar
            </p>
          </div>
          <Link
            href="/properties"
            style={{ color: "var(--primary)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
          >
            View All Properties →
          </Link>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: "7px 18px",
                borderRadius: 20,
                border: "1.5px solid",
                borderColor: activeFilter === tab ? "var(--primary)" : "var(--border)",
                background: activeFilter === tab ? "var(--primary)" : "#fff",
                color: activeFilter === tab ? "#fff" : "var(--text-medium)",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((p) => (
            <Link key={p.id} href={`/property/${p.id}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.25s",
                  cursor: "pointer",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.14)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
                  />
                  {p.tag && (
                    <span style={{
                      position: "absolute", top: 12, left: 12,
                      background: "var(--primary)", color: "#fff",
                      fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4,
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <Tag size={10} /> {p.tag}
                    </span>
                  )}
                  <button
                    onClick={(e) => { e.preventDefault(); toggleLike(p.id); }}
                    style={{
                      position: "absolute", top: 12, right: 12,
                      background: "#fff", border: "none", borderRadius: "50%",
                      width: 34, height: 34, display: "flex", alignItems: "center",
                      justifyContent: "center", cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Heart size={16} fill={liked.has(p.id) ? "#d0021b" : "none"} color={liked.has(p.id) ? "#d0021b" : "#767676"} />
                  </button>
                  <span style={{
                    position: "absolute", bottom: 12, left: 12,
                    ...statusColors[p.status],
                    fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4,
                  }}>
                    {p.status}
                  </span>
                  <span style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: "rgba(0,0,0,0.55)", color: "#fff",
                    fontSize: 11, padding: "3px 8px", borderRadius: 4,
                  }}>
                    {p.images.length} Photos
                  </span>
                </div>

                <div style={{ padding: "14px 16px 16px" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, color: "var(--primary)",
                    background: "var(--primary-light)", padding: "2px 8px",
                    borderRadius: 3, display: "inline-block", marginBottom: 8,
                  }}>
                    {p.subType}
                  </span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-dark)", marginBottom: 6, lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
                    <MapPin size={13} color="var(--text-light)" />
                    <span style={{ fontSize: 13, color: "var(--text-light)" }}>{p.location}</span>
                  </div>

                  {(p.beds || p.area) && (
                    <div style={{
                      display: "flex", gap: 16, marginBottom: 12,
                      paddingBottom: 12, borderBottom: "1px solid var(--border)",
                    }}>
                      {p.beds && (
                        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "var(--text-medium)" }}>
                          <BedDouble size={14} /> {p.beds} Beds
                        </div>
                      )}
                      {p.baths && (
                        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "var(--text-medium)" }}>
                          <Bath size={14} /> {p.baths} Baths
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "var(--text-medium)" }}>
                        <Square size={14} /> {p.area}
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "var(--primary)" }}>{p.price}</div>
                      {p.pricePerSqft && <div style={{ fontSize: 11, color: "var(--text-light)" }}>{p.pricePerSqft}</div>}
                    </div>
                    <span
                      onClick={(e) => { e.preventDefault(); window.location.href = "tel:+919708309999"; }}
                      style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "var(--primary)", color: "#fff",
                        borderRadius: 6, padding: "7px 14px",
                        fontSize: 12, fontWeight: 700, cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      <Phone size={12} /> Enquire
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link
            href="/properties"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--primary)", color: "#fff",
              borderRadius: 8, padding: "12px 32px",
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            View All {properties.length} Properties →
          </Link>
        </div>
      </div>
    </section>
  );
}
