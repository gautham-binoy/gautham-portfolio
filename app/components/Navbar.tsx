"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "calc(100% - 3rem)",
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.875rem 1.75rem",
            borderRadius: "16px",
            background: scrolled
              ? "rgba(3, 7, 18, 0.85)"
              : "rgba(3, 7, 18, 0.4)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "0 4px 16px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              textDecoration: "none",
              background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            GB<span style={{ color: "#3b82f6", WebkitTextFillColor: "#3b82f6" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "10px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#ffffff";
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/RESUME/Resume (3).pdf"
              target="_blank"
              style={{
                marginLeft: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "10px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#3b82f6",
                textDecoration: "none",
                border: "1px solid rgba(59,130,246,0.4)",
                background: "rgba(59,130,246,0.08)",
                transition: "all 0.2s ease",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(59,130,246,0.2)";
                (e.target as HTMLElement).style.borderColor = "rgba(59,130,246,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                (e.target as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)";
              }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "white",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "5rem",
              left: "1.5rem",
              right: "1.5rem",
              zIndex: 999,
              background: "rgba(3, 7, 18, 0.95)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
