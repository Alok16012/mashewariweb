"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

const inputStyle = {
  width: "100%",
  border: "1.5px solid var(--border)",
  borderRadius: 6,
  padding: "11px 14px",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  background: "#fff",
  fontFamily: "inherit",
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Buy Property",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
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
              marginBottom: 8,
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              color: "var(--text-dark)",
            }}
          >
            Contact Maheshwari Realcon
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Our team is ready to help you find the perfect property
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 32,
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div>
            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <MapPin size={22} color="var(--primary)" />,
                  title: "Our Office",
                  lines: [
                    "Sri Niwas Avenue, 4th Floor",
                    "Saguna More, Opposite: IndusInd Bank",
                    "Bihar - 801503",
                  ],
                },
                {
                  icon: <Phone size={22} color="var(--primary)" />,
                  title: "Call Us",
                  lines: ["097083 09999"],
                  link: "tel:+919708309999",
                },
                {
                  icon: <Mail size={22} color="var(--primary)" />,
                  title: "Email Us",
                  lines: ["info@maheshwarirealcon.com"],
                  link: "mailto:info@maheshwarirealcon.com",
                },
                {
                  icon: <Clock size={22} color="var(--primary)" />,
                  title: "Working Hours",
                  lines: [
                    "Monday – Saturday: 9:00 AM – 6:30 PM",
                    "Sunday: By appointment only",
                  ],
                },
              ].map(({ icon, title, lines, link }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: 16,
                    background: "var(--bg)",
                    borderRadius: 10,
                    padding: "18px 20px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "var(--primary-light)",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        color: "var(--text-dark)",
                        marginBottom: 4,
                      }}
                    >
                      {title}
                    </div>
                    {lines.map((line) =>
                      link ? (
                        <a
                          key={line}
                          href={link}
                          style={{
                            display: "block",
                            fontSize: 14,
                            color: "var(--primary)",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={line}
                          style={{
                            fontSize: 13,
                            color: "var(--text-medium)",
                            margin: 0,
                          }}
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div
              style={{
                marginTop: 20,
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid var(--border)",
                height: 200,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.393!2d85.0500!3d25.5800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaguna+More%2C+Patna%2C+Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maheshwari Realcon Location"
              />
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--bg)",
              borderRadius: 12,
              padding: "32px 28px",
              border: "1px solid var(--border)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  gap: 16,
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <CheckCircle size={64} color="#00897b" />
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "var(--text-dark)",
                  }}
                >
                  Thank you!
                </h3>
                <p style={{ color: "var(--text-medium)", fontSize: 14 }}>
                  We&apos;ve received your enquiry. Our team will contact you within
                  24 hours.
                </p>
                <p style={{ fontSize: 14, fontWeight: 600 }}>
                  Or call us directly:{" "}
                  <a
                    href="tel:+919708309999"
                    style={{ color: "var(--primary)" }}
                  >
                    097083 09999
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      interest: "Buy Property",
                      message: "",
                    });
                  }}
                  style={{
                    background: "var(--primary)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "10px 24px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "var(--text-dark)",
                    marginBottom: 6,
                  }}
                >
                  Send us an Enquiry
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    fontSize: 13,
                    marginBottom: 24,
                  }}
                >
                  Free consultation · No commitment required
                </p>

                <form
                  onSubmit={submit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-medium)",
                          display: "block",
                          marginBottom: 5,
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        required
                        placeholder="Your Name"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--primary)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-medium)",
                          display: "block",
                          marginBottom: 5,
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        required
                        placeholder="10-digit mobile"
                        type="tel"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--primary)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text-medium)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="your@email.com"
                      type="email"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--primary)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text-medium)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      I&apos;m interested in
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handle}
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "auto",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--primary)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                    >
                      <option>Buy Property</option>
                      <option>Rent Property</option>
                      <option>Sell My Property</option>
                      <option>Industrial / Commercial</option>
                      <option>Investment Advice</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text-medium)",
                        display: "block",
                        marginBottom: 5,
                      }}
                    >
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={3}
                      placeholder="Tell us about your budget, location preference, property type..."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--primary)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: "var(--primary)",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                      padding: "13px 24px",
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "var(--primary-hover)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "var(--primary)")
                    }
                  >
                    <Send size={16} />
                    Send Enquiry
                  </button>

                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-light)",
                      textAlign: "center",
                    }}
                  >
                    🔒 Your details are safe with us. We never share your information.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
