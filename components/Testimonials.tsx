"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Nikesh Sharma",
    rating: 5,
    date: "3 months ago",
    text: "Best price available in Bihta. Good service — the team at Maheshwari Realcon helped me find an industrial shed within my budget. Very professional and transparent throughout the entire process.",
    avatar: "NS",
    property: "Industrial Shed, Bihta",
    source: "Google Review",
  },
  {
    name: "Vikash Kumar",
    rating: 5,
    date: "5 months ago",
    text: "One of the best places to invest your money. I got a residential plot at an excellent rate. The staff is very knowledgeable about the Bihar market and guided me at every step.",
    avatar: "VK",
    property: "Residential Plot, Danapur",
    source: "Google Review",
  },
  {
    name: "Arif Khan",
    rating: 5,
    date: "1 month ago",
    text: "Best service provider and customer satisfaction is awesome. Very honest in dealings — they showed me exactly what I asked for without any hidden charges. Highly recommend!",
    avatar: "AK",
    property: "Commercial Shop, Saguna More",
    source: "Google Review",
  },
  {
    name: "Priya Singh",
    rating: 5,
    date: "2 months ago",
    text: "Maheshwari Realcon made my dream of owning a home in Patna a reality. The legal documentation support was excellent. No stress, no confusion — just smooth buying experience.",
    avatar: "PS",
    property: "3BHK Flat, Kankarbagh",
    source: "Google Review",
  },
  {
    name: "Rajesh Prasad",
    rating: 5,
    date: "6 months ago",
    text: "Excellent agency! Got a warehouse at a very competitive price. They negotiate well on behalf of their clients. The after-sale support is also very good. Will definitely use again.",
    avatar: "RP",
    property: "Warehouse, Bihta Industrial Area",
    source: "Facebook Review",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          fill={s <= rating ? "#ffb800" : "none"}
          color={s <= rating ? "#ffb800" : "#d0d0d0"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const visible = [
    reviews[current],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, #fff 100%)",
        padding: "64px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              Client Stories
            </span>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 800,
                color: "var(--text-dark)",
              }}
            >
              What Our Clients Say
            </h2>
            {/* Rating summary */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  background: "#00897b",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontWeight: 800,
                  fontSize: 22,
                }}
              >
                4.7
              </div>
              <div>
                <StarRow rating={5} />
                <div
                  style={{ fontSize: 12, color: "var(--text-light)", marginTop: 3 }}
                >
                  Based on 28 Google reviews
                </div>
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={prev}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                (e.currentTarget as HTMLElement).style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {visible.map((review, idx) => (
            <div
              key={`${review.name}-${current}-${idx}`}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "28px 24px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                border: "1px solid var(--border)",
                position: "relative",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)";
              }}
            >
              <Quote
                size={32}
                color="var(--primary)"
                style={{
                  opacity: 0.15,
                  position: "absolute",
                  top: 20,
                  right: 20,
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--primary), #6b0a1a)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--text-dark)",
                    }}
                  >
                    {review.name}
                  </div>
                  <StarRow rating={review.rating} />
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-medium)",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--primary)",
                    fontWeight: 600,
                  }}
                >
                  🏠 {review.property}
                </span>
                <span style={{ fontSize: 11, color: "var(--text-light)" }}>
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 28,
          }}
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === current ? "var(--primary)" : "var(--border)",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
