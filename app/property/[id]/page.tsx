"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Phone, BedDouble, Bath, Square, Heart,
  ChevronLeft, ChevronRight, CheckCircle, Star,
  Building2, Calendar, Layers, Car, Compass,
  Sofa, Send, Share2, ArrowLeft, Tag,
} from "lucide-react";
import { getPropertyById, getSimilarProperties } from "@/lib/properties";
import type { Property } from "@/lib/properties";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const statusColors: Record<Property["status"], { bg: string; color: string }> = {
  "Ready to Move": { bg: "#e6f4ea", color: "#1e7e34" },
  "Under Construction": { bg: "#fff3e0", color: "#e65100" },
  "New Launch": { bg: "#e8eaf6", color: "#3949ab" },
};

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  return (
    <>
      <div style={{ borderRadius: 12, overflow: "hidden", background: "#111" }}>
        {/* Main image */}
        <div style={{ position: "relative", height: "clamp(260px, 45vw, 480px)", cursor: "pointer" }}
          onClick={() => setLightbox(true)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active]}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Overlay gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)",
            pointerEvents: "none",
          }} />
          {/* Counter */}
          <span style={{
            position: "absolute", bottom: 16, right: 16,
            background: "rgba(0,0,0,0.6)", color: "#fff",
            borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 600,
          }}>
            {active + 1} / {images.length}
          </span>
          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%",
                width: 40, height: 40, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.9)", border: "none", borderRadius: "50%",
                width: 40, height: 40, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}>
                <ChevronRight size={20} />
              </button>
            </>
          )}
          {/* View all hint */}
          <span style={{
            position: "absolute", bottom: 16, left: 16,
            background: "rgba(0,0,0,0.55)", color: "#fff",
            borderRadius: 6, padding: "5px 12px", fontSize: 12, fontWeight: 600,
          }}>
            🔍 Click to zoom
          </span>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div style={{
            display: "flex", gap: 6, padding: "8px",
            background: "#222", overflowX: "auto",
          }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  flexShrink: 0, width: 72, height: 52, borderRadius: 5,
                  overflow: "hidden", border: "2px solid",
                  borderColor: active === i ? "var(--primary)" : "transparent",
                  cursor: "pointer", padding: 0, transition: "border-color 0.15s",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{
            position: "absolute", left: 20, background: "rgba(255,255,255,0.15)",
            border: "none", borderRadius: "50%", width: 48, height: 48,
            color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ChevronLeft size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[active]}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "90vh",
              objectFit: "contain", borderRadius: 8,
            }}
          />
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={{
            position: "absolute", right: 20, background: "rgba(255,255,255,0.15)",
            border: "none", borderRadius: "50%", width: 48, height: 48,
            color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <ChevronRight size={24} />
          </button>
          <button onClick={() => setLightbox(false)} style={{
            position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)",
            border: "none", borderRadius: "50%", width: 40, height: 40,
            color: "#fff", cursor: "pointer", fontSize: 20, display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>
      )}
    </>
  );
}

function EnquiryForm({ property }: { property: Property }) {
  const [form, setForm] = useState({ name: "", phone: "", message: `Hi, I'm interested in ${property.title}. Please contact me.` });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return sent ? (
    <div style={{ textAlign: "center", padding: "32px 16px" }}>
      <CheckCircle size={48} color="#00897b" style={{ margin: "0 auto 12px" }} />
      <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Enquiry Sent!</h3>
      <p style={{ color: "var(--text-light)", fontSize: 13, marginBottom: 16 }}>
        Our team will call you within 2 hours.
      </p>
      <a href="tel:+919708309999" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "var(--primary)", color: "#fff", borderRadius: 8,
        padding: "10px 20px", fontWeight: 700, fontSize: 14, textDecoration: "none",
      }}>
        <Phone size={14} /> Call Now
      </a>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <input
        name="name" value={form.name} onChange={handle} required
        placeholder="Your Full Name *"
        style={{
          border: "1.5px solid var(--border)", borderRadius: 6,
          padding: "10px 14px", fontSize: 13, outline: "none", fontFamily: "inherit",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
      <input
        name="phone" value={form.phone} onChange={handle} required
        type="tel" placeholder="Mobile Number *"
        style={{
          border: "1.5px solid var(--border)", borderRadius: 6,
          padding: "10px 14px", fontSize: 13, outline: "none", fontFamily: "inherit",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
      <textarea
        name="message" value={form.message} onChange={handle} rows={3}
        style={{
          border: "1.5px solid var(--border)", borderRadius: 6,
          padding: "10px 14px", fontSize: 13, outline: "none",
          resize: "vertical", fontFamily: "inherit",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
      <button type="submit" style={{
        background: "var(--primary)", color: "#fff", border: "none",
        borderRadius: 8, padding: "12px", fontWeight: 700, fontSize: 14,
        cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", gap: 8,
      }}>
        <Send size={15} /> Send Enquiry
      </button>
      <p style={{ fontSize: 11, color: "var(--text-light)", textAlign: "center" }}>
        🔒 Your info is safe. No spam.
      </p>
    </form>
  );
}

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = getPropertyById(Number(id));
  if (!property) notFound();

  const similar = getSimilarProperties(property, 3);
  const [liked, setLiked] = useState(false);

  const specItems = [
    { icon: <Square size={16} />, label: "Area", value: property.area },
    ...(property.beds ? [{ icon: <BedDouble size={16} />, label: "Bedrooms", value: `${property.beds} BHK` }] : []),
    ...(property.baths ? [{ icon: <Bath size={16} />, label: "Bathrooms", value: `${property.baths}` }] : []),
    ...(property.floor ? [{ icon: <Layers size={16} />, label: "Floor", value: `${property.floor} of ${property.totalFloors || "?"} floors` }] : []),
    ...(property.facing ? [{ icon: <Compass size={16} />, label: "Facing", value: property.facing }] : []),
    ...(property.furnishing ? [{ icon: <Sofa size={16} />, label: "Furnishing", value: property.furnishing }] : []),
    ...(property.parking !== undefined ? [{ icon: <Car size={16} />, label: "Parking", value: `${property.parking} spot${property.parking !== 1 ? "s" : ""}` }] : []),
    ...(property.age ? [{ icon: <Building2 size={16} />, label: "Property Age", value: property.age }] : []),
    ...(property.possession ? [{ icon: <Calendar size={16} />, label: "Possession", value: property.possession }] : []),
  ];

  return (
    <>
      <Header />

      <div style={{ paddingTop: 80, background: "var(--bg)", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
          <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "var(--border)" }}>/</span>
              <Link href="/properties" style={{ color: "var(--text-light)", textDecoration: "none" }}>Properties</Link>
              <span style={{ color: "var(--border)" }}>/</span>
              <span style={{ color: "var(--primary)", fontWeight: 600 }}>{property.title}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto px-4 py-6" style={{ maxWidth: 1200 }}>
          {/* Back button */}
          <Link href="/properties" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "var(--text-medium)", textDecoration: "none", fontSize: 13,
            fontWeight: 600, marginBottom: 20,
          }}>
            <ArrowLeft size={15} /> Back to Listings
          </Link>

          {/* Two-column layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }}
            className="detail-grid">

            {/* LEFT COLUMN */}
            <div>
              {/* Title bar */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "20px 24px",
                marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                      <span style={{
                        background: "var(--primary-light)", color: "var(--primary)",
                        fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 4,
                      }}>
                        {property.subType}
                      </span>
                      <span style={{ ...statusColors[property.status], fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>
                        {property.status}
                      </span>
                      {property.tag && (
                        <span style={{
                          background: "var(--primary)", color: "#fff",
                          fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 4,
                          display: "flex", alignItems: "center", gap: 4,
                        }}>
                          <Tag size={11} /> {property.tag}
                        </span>
                      )}
                    </div>
                    <h1 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: 8 }}>
                      {property.title}
                    </h1>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <MapPin size={15} color="var(--primary)" />
                      <span style={{ fontSize: 14, color: "var(--text-medium)" }}>{property.fullAddress}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, color: "var(--primary)" }}>
                      {property.price}
                    </div>
                    {property.pricePerSqft && (
                      <div style={{ fontSize: 13, color: "var(--text-light)" }}>{property.pricePerSqft}</div>
                    )}
                    <div style={{ display: "flex", gap: 10, marginTop: 10, justifyContent: "flex-end" }}>
                      <button
                        onClick={() => setLiked(!liked)}
                        style={{
                          display: "flex", alignItems: "center", gap: 6,
                          border: "1.5px solid var(--border)", borderRadius: 6,
                          padding: "7px 14px", background: "#fff", cursor: "pointer",
                          fontSize: 13, fontWeight: 600,
                          color: liked ? "var(--primary)" : "var(--text-medium)",
                        }}
                      >
                        <Heart size={14} fill={liked ? "var(--primary)" : "none"} color={liked ? "var(--primary)" : "currentColor"} />
                        {liked ? "Saved" : "Save"}
                      </button>
                      <button
                        onClick={() => navigator.share?.({ title: property.title, url: window.location.href })}
                        style={{
                          display: "flex", alignItems: "center", gap: 6,
                          border: "1.5px solid var(--border)", borderRadius: 6,
                          padding: "7px 14px", background: "#fff", cursor: "pointer",
                          fontSize: 13, fontWeight: 600, color: "var(--text-medium)",
                        }}
                      >
                        <Share2 size={14} /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div style={{ marginBottom: 20 }}>
                <ImageGallery images={property.images} title={property.title} />
              </div>

              {/* Specs grid */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "24px",
                marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
              }}>
                <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-dark)", marginBottom: 20 }}>
                  Property Overview
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
                  {specItems.map(({ icon, label, value }) => (
                    <div key={label} style={{
                      background: "var(--bg)", borderRadius: 10, padding: "14px 16px",
                      border: "1px solid var(--border)",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--primary)", marginBottom: 6 }}>
                        {icon}
                        <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--text-light)" }}>
                          {label}
                        </span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-dark)" }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "24px",
                marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
              }}>
                <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-dark)", marginBottom: 14 }}>
                  About this Property
                </h2>
                <p style={{ fontSize: 14, color: "var(--text-medium)", lineHeight: 1.8 }}>{property.description}</p>

                {property.highlights.length > 0 && (
                  <>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-dark)", marginTop: 20, marginBottom: 12 }}>
                      Key Highlights
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {property.highlights.map((h) => (
                        <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <CheckCircle size={16} color="#00897b" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, color: "var(--text-medium)" }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Amenities */}
              {property.amenities.length > 0 && (
                <div style={{
                  background: "#fff", borderRadius: 12, padding: "24px",
                  marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid var(--border)",
                }}>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-dark)", marginBottom: 16 }}>
                    Amenities & Features
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
                    {property.amenities.map((a) => (
                      <div key={a} style={{
                        display: "flex", alignItems: "center", gap: 8,
                        background: "var(--bg)", borderRadius: 8,
                        padding: "10px 14px", border: "1px solid var(--border)",
                      }}>
                        <div style={{
                          width: 8, height: 8, borderRadius: "50%",
                          background: "var(--primary)", flexShrink: 0,
                        }} />
                        <span style={{ fontSize: 13, color: "var(--text-medium)", fontWeight: 500 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby Places */}
              {property.nearbyPlaces.length > 0 && (
                <div style={{
                  background: "#fff", borderRadius: 12, padding: "24px",
                  marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid var(--border)",
                }}>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-dark)", marginBottom: 16 }}>
                    Nearby Places
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                    {property.nearbyPlaces.map((place) => (
                      <div key={place.name} style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "center", padding: "10px 14px",
                        background: "var(--bg)", borderRadius: 8,
                        border: "1px solid var(--border)",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <MapPin size={14} color="var(--primary)" />
                          <span style={{ fontSize: 13, color: "var(--text-medium)", fontWeight: 500 }}>{place.name}</span>
                        </div>
                        <span style={{
                          fontSize: 12, fontWeight: 700, color: "var(--primary)",
                          background: "var(--primary-light)", padding: "2px 8px", borderRadius: 4,
                        }}>
                          {place.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RERA / Posted */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "16px 24px",
                marginBottom: 20, boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
                display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Calendar size={15} color="var(--text-light)" />
                  <span style={{ fontSize: 13, color: "var(--text-light)" }}>
                    Posted on: <strong style={{ color: "var(--text-dark)" }}>{property.postedOn}</strong>
                  </span>
                </div>
                {property.rera && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={15} color="#00897b" />
                    <span style={{ fontSize: 13, color: "var(--text-light)" }}>
                      RERA: <strong style={{ color: "#00897b" }}>{property.rera}</strong>
                    </span>
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Building2 size={15} color="var(--text-light)" />
                  <span style={{ fontSize: 13, color: "var(--text-light)" }}>
                    Listed by: <strong style={{ color: "var(--text-dark)" }}>Maheshwari Realcon Pvt. Ltd.</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — sticky sidebar */}
            <div style={{ position: "sticky", top: 80 }}>
              {/* Agent card */}
              <div style={{
                background: "#fff", borderRadius: 12, padding: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid var(--border)", marginBottom: 16,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), #6b0a1a)",
                    color: "#fff", display: "flex", alignItems: "center",
                    justifyContent: "center", fontWeight: 800, fontSize: 18, flexShrink: 0,
                  }}>
                    {property.agent.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)" }}>{property.agent.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-light)" }}>{property.agent.designation}</div>
                    <div style={{ display: "flex", gap: 1, marginTop: 3 }}>
                      {[1,2,3,4,5].map((s) => <Star key={s} size={11} fill="#ffb800" color="#ffb800" />)}
                    </div>
                  </div>
                </div>

                <div style={{ fontWeight: 800, fontSize: 20, color: "var(--primary)", marginBottom: 14, textAlign: "center" }}>
                  {property.price}
                  {property.pricePerSqft && (
                    <div style={{ fontSize: 12, fontWeight: 400, color: "var(--text-light)" }}>{property.pricePerSqft}</div>
                  )}
                </div>

                <a
                  href={`tel:+91${property.agent.phone.replace(/\s/g, "")}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "var(--primary)", color: "#fff", borderRadius: 8,
                    padding: "13px", fontWeight: 800, fontSize: 15,
                    textDecoration: "none", marginBottom: 10, transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary-hover)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--primary)")}
                >
                  <Phone size={16} /> {property.agent.phone}
                </a>

                <a
                  href={`https://wa.me/91${property.agent.phone.replace(/\s/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in ${property.title} (₹${property.price}). Please contact me.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    background: "#25D366", color: "#fff", borderRadius: 8,
                    padding: "11px", fontWeight: 700, fontSize: 14,
                    textDecoration: "none", marginBottom: 20,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Agent
                </a>

                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: "var(--text-dark)" }}>
                    Send Enquiry
                  </h3>
                  <EnquiryForm property={property} />
                </div>
              </div>

              {/* Maheshwari trust badge */}
              <div style={{
                background: "linear-gradient(135deg, #1a0a0e, #6b0a1a)",
                borderRadius: 12, padding: "16px 20px",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{
                  background: "var(--primary)", borderRadius: 8, width: 44, height: 44,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Building2 size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "#fff", marginBottom: 2 }}>
                    Maheshwari Realcon Pvt. Ltd.
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>
                    Saguna More, Patna · 4.7★ Google Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          {similar.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-dark)", marginBottom: 20 }}>
                Similar Properties
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {similar.map((p) => (
                  <Link key={p.id} href={`/property/${p.id}`} style={{ textDecoration: "none" }}>
                    <div style={{
                      background: "#fff", borderRadius: 10, overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transition: "all 0.25s", cursor: "pointer",
                    }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.14)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
                      }}
                    >
                      <div style={{ height: 160, overflow: "hidden" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.images[0]} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <span style={{
                          fontSize: 11, fontWeight: 600, color: "var(--primary)",
                          background: "var(--primary-light)", padding: "2px 8px",
                          borderRadius: 3, display: "inline-block", marginBottom: 6,
                        }}>{p.subType}</span>
                        <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-dark)", marginBottom: 4, lineHeight: 1.3 }}>{p.title}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                          <MapPin size={12} color="var(--text-light)" />
                          <span style={{ fontSize: 12, color: "var(--text-light)" }}>{p.location}</span>
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 800, color: "var(--primary)" }}>{p.price}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        .detail-grid {
          grid-template-columns: 1fr 340px;
        }
        @media (max-width: 900px) {
          .detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
