"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTrophy,
  FaCertificate,
  FaExternalLinkAlt,
  FaFilePdf,
  FaArrowDown,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";

// Dynamically import heavy 3D components to avoid SSR issues
const HeroScene = dynamic(() => import("./components/HeroScene"), { ssr: false });
const SkillsSection = dynamic(() => import("./components/SkillsSection"), { ssr: false });

// ── Data ─────────────────────────────────────────────────────────────────────

const certs = [
  { title: "Cyber Security Professional", issuer: "Google / Coursera", path: "/RESUME/CERTIFICATES/Google-Foundation on Cyber security.pdf" },
  { title: "Arduino Programming", issuer: "IEDC", path: "/RESUME/CERTIFICATES/Arduino-IEDC.pdf" },
  { title: "C++ Programming", issuer: "IIT Bombay", path: "/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Cpp.pdf" },
  { title: "Java Programming", issuer: "IIT Bombay", path: "/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_JAVA.pdf" },
  { title: "Python Programming", issuer: "IIT Bombay", path: "/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_Python.pdf" },
  { title: "PHP & HTML", issuer: "IIT Bombay", path: "/RESUME/CERTIFICATES/Spoke-tutorial-Participant-Certificate_PHP.pdf" },
  { title: "Voice of Stakeholder", issuer: "YIP / K-DISC", path: "/RESUME/CERTIFICATES/Voice of Stakeholder-YIP.pdf" },
];

const prizes = [
  { title: "1st Place: Tech Arena", event: "Takshak National Level Tech Fest", path: "/RESUME/PRIZES/tech-arena(Takshak national level tech fest MA college) 1st .png", color: "#f59e0b" },
  { title: "1st Place: Clash of Codes", event: "Coding Competition", path: "/RESUME/PRIZES/clash-of-codes-1st.jpg", color: "#3b82f6" },
  { title: "1st Place: Kryptos Hardware", event: "Hardware Hackathon", path: "/RESUME/PRIZES/kryptos-hardware-hackathon-1st.jpg", color: "#8b5cf6" },
];

// ── Typewriter Effect ──────────────────────────────────────────────────────────

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const target = texts[textIndex];
        if (!isDeleting) {
          if (charIndex < target.length) {
            setCurrentText(target.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(target.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span>
      {currentText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "#3b82f6",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

// ── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)", overflowX: "hidden" }}>
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* 3D Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <HeroScene />
        </div>

        {/* Radial Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(3,7,18,0.4) 0%, rgba(3,7,18,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "900px",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#3b82f6",
              fontSize: "0.8125rem",
              fontFamily: "var(--font-mono)",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                display: "inline-block",
              }}
            />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(3rem, 10vw, 7.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              GAUTHAM
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              BINOY
            </span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2.5rem",
              fontFamily: "var(--font-mono)",
              minHeight: "2rem",
            }}
          >
            <TypewriterText
              texts={[
                "Flutter Developer",
                "CS Student at MACE",
                "IoT Enthusiast",
                "Hackathon Champion 🏆",
                "Problem Solver",
              ]}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="/RESUME/Resume (3).pdf"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                color: "white",
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,130,246,0.4)";
              }}
            >
              <FaFilePdf />
              Download Resume
            </a>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/gautham-binoy", color: "#0077b5" },
                { icon: <FaGithub size={18} />, href: "https://github.com/gautham-binoy", color: "#ffffff" },
                { icon: <FaEnvelope size={18} />, href: "mailto:gautham@example.com", color: "#3b82f6" },
              ].map(({ icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
          }}
        >
          <FaArrowDown />
          scroll
        </motion.div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.015)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
          className="stats-grid"
        >
          {[
            { value: 3, suffix: "+", label: "Competition Wins" },
            { value: 7, suffix: "+", label: "Certifications" },
            { value: 500, suffix: "+", label: "Users Served" },
            { value: 15, suffix: "%", label: "UI Performance Boost" },
          ].map(({ value, suffix, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter end={value} suffix={suffix} />
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            number="01. EXPERIENCE"
            title="Where I've Worked"
            subtitle="Building real-world experience through internships and hands-on development."
          />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              paddingLeft: "2.5rem",
              maxWidth: "700px",
            }}
          >
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)",
                borderRadius: "2px",
              }}
            />

            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-5px",
                top: "1.75rem",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#3b82f6",
                boxShadow: "0 0 16px rgba(59,130,246,0.6)",
                border: "2px solid var(--bg)",
              }}
            />

            <div
              style={{
                padding: "2rem 2.25rem",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40%",
                  left: "-10%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  opacity: 0.04,
                  filter: "blur(50px)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <FaBriefcase size={14} style={{ color: "#3b82f6" }} />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "#3b82f6",
                        letterSpacing: "0.08em",
                      }}
                    >
                      INTERNSHIP
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "white",
                      lineHeight: 1.2,
                    }}
                  >
                    Flutter Intern
                  </h3>
                  <p
                    style={{
                      color: "#06b6d4",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    ICT Academy of Kerala
                  </p>
                </div>
                <span
                  style={{
                    padding: "0.4rem 0.875rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    color: "#3b82f6",
                    whiteSpace: "nowrap",
                  }}
                >
                  JAN 2025 — PRESENT
                </span>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { bold: "Optimized", rest: "cross-platform mobile application modules, increasing UI responsiveness by 15%." },
                  { bold: "Architected", rest: "real-time state management systems to ensure a seamless and scalable user experience." },
                  { bold: "Collaborated", rest: "with industry mentors to implement standard Agile development lifecycles." },
                ].map(({ bold, rest }, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    <span style={{ color: "#3b82f6", flexShrink: 0, marginTop: "1px" }}>▹</span>
                    <span>
                      <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{bold}</strong>{" "}
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        style={{
          padding: "7rem 1.5rem",
          background: "rgba(255,255,255,0.01)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            number="02. SKILLS"
            title="My Tech Stack"
            subtitle="Languages, frameworks, and tools I use to bring ideas to life."
          />
          <SkillsSection />
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            number="03. PROJECTS"
            title="Key Projects"
            subtitle="Things I've built that I'm proud of."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <ProjectCard
              number="01 /"
              title="Hirepoly — Placement Portal"
              tags={["PHP", "SQL", "Bootstrap", "Full-Stack"]}
              description="Constructed a full-stack campus placement portal that automated recruiter-student interactions for 500+ users. Features job listings, application tracking, and admin dashboards."
              accentColor="#3b82f6"
            />
            <ProjectCard
              number="02 /"
              title="Hardware Innovation Project"
              tags={["Arduino C", "IoT", "C++", "Sensors"]}
              description="Pioneered an IoT-based hardware prototype using Arduino C for real-time environmental monitoring. Integrated multiple sensors and built a wireless data pipeline."
              accentColor="#8b5cf6"
            />
            <ProjectCard
              number="03 /"
              title="Flutter Mobile App"
              tags={["Flutter", "Dart", "Firebase"]}
              description="Cross-platform mobile application with real-time state management, achieving a 15% improvement in UI responsiveness. Built during internship at ICT Academy of Kerala."
              accentColor="#06b6d4"
            />
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
      <section
        id="achievements"
        style={{
          padding: "7rem 1.5rem",
          background: "rgba(255,255,255,0.01)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            number="04. ACHIEVEMENTS"
            title="Competition Wins"
            subtitle="3-time first place winner in national and college-level competitions."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {prizes.map((prize, i) => (
              <motion.a
                key={i}
                href={prize.path}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                style={{
                  display: "block",
                  padding: "2rem",
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, ${prize.color}08 0%, rgba(3,7,18,0.5) 100%)`,
                  border: `1px solid ${prize.color}20`,
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${prize.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${prize.color}20`;
                }}
              >
                {/* Glow behind trophy */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30%",
                    right: "-20%",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background: prize.color,
                    opacity: 0.06,
                    filter: "blur(40px)",
                  }}
                />
                <FaTrophy
                  style={{
                    color: prize.color,
                    fontSize: "2rem",
                    marginBottom: "1.25rem",
                    display: "block",
                    filter: `drop-shadow(0 0 8px ${prize.color}60)`,
                  }}
                />
                <div
                  style={{
                    display: "inline-flex",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    background: `${prize.color}15`,
                    border: `1px solid ${prize.color}30`,
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    color: prize.color,
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  🥇 FIRST PLACE
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "0.375rem",
                    lineHeight: 1.3,
                  }}
                >
                  {prize.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>{prize.event}</p>

                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: prize.color,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    opacity: 0.7,
                  }}
                >
                  View Proof <FaExternalLinkAlt size={10} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section id="certifications" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            number="05. CERTIFICATIONS"
            title="Certifications"
            subtitle="Verified credentials from top institutions and industry leaders."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "0.875rem",
            }}
          >
            {certs.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.path}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(59,130,246,0.07)";
                  el.style.borderColor = "rgba(59,130,246,0.3)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.025)";
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaCertificate style={{ color: "#3b82f6", fontSize: "1rem" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "rgba(255,255,255,0.9)" }}>
                      {cert.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.4)",
                        marginTop: "0.125rem",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                <FaExternalLinkAlt style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.875rem", flexShrink: 0 }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "7rem 1.5rem 8rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              color: "#3b82f6",
              letterSpacing: "0.1em",
            }}
          >
            06. CONTACT
          </span>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginTop: "1rem",
              marginBottom: "1.25rem",
              background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "1.0625rem",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            I&apos;m open to internship roles, freelance projects, and exciting collaborations.
            Let&apos;s build something awesome!
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: <FaEnvelope />, label: "Send Email", href: "mailto:gautham@example.com", primary: true },
              { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/gautham-binoy", primary: false },
              { icon: <FaGithub />, label: "GitHub", href: "https://github.com/gautham-binoy", primary: false },
            ].map(({ icon, label, href, primary }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "14px",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  ...(primary
                    ? {
                        background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                        color: "white",
                        boxShadow: "0 6px 24px rgba(59,130,246,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.8)",
                      }),
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
          color: "rgba(255,255,255,0.25)",
          fontSize: "0.8125rem",
          fontFamily: "var(--font-mono)",
        }}
      >
        Designed & Built by{" "}
        <span style={{ color: "#3b82f6" }}>Gautham Binoy</span> · {new Date().getFullYear()}
      </footer>
    </main>
  );
}