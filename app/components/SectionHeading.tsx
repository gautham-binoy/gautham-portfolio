"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: "3.5rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.875rem",
            color: "#3b82f6",
            letterSpacing: "0.1em",
          }}
        >
          {number}
        </span>
        <div
          style={{
            height: "1px",
            width: "60px",
            background: "linear-gradient(to right, #3b82f6, transparent)",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "0.75rem",
            color: "rgba(255,255,255,0.45)",
            fontSize: "1rem",
            maxWidth: "500px",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
