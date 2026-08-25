"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  number: string;
  accentColor?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  number,
  accentColor = "#3b82f6",
  link,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Wrapper = link ? "a" : "div";

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          position: "relative",
          padding: "2rem",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
          cursor: link ? "pointer" : "default",
          height: "100%",
          transition: "border-color 0.3s ease",
        }}
        className="project-card-inner"
      >
        {/* Glow Orb */}
        <div
          style={{
            position: "absolute",
            top: "-30%",
            right: "-10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.05,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Corner Number */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: accentColor,
            opacity: 0.7,
            letterSpacing: "0.1em",
          }}
        >
          {number}
        </span>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.375rem",
            fontWeight: 700,
            marginTop: "0.75rem",
            marginBottom: "0.5rem",
            color: "#f1f5f9",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.2rem 0.625rem",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                background: `${accentColor}18`,
                border: `1px solid ${accentColor}30`,
                color: accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          {description}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(to right, ${accentColor}, transparent)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          className="card-bottom-bar"
        />
      </div>

      <style>{`
        .project-card-inner:hover .card-bottom-bar { opacity: 1; }
        .project-card-inner:hover { border-color: ${accentColor}40 !important; }
      `}</style>
    </motion.div>
  );
}
