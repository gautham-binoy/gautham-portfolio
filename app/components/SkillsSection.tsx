"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const SKILLS = [
  { label: "Flutter", color: "#06b6d4" },
  { label: "Python", color: "#3b82f6" },
  { label: "Dart", color: "#8b5cf6" },
  { label: "PHP", color: "#a78bfa" },
  { label: "C++", color: "#06b6d4" },
  { label: "Java", color: "#f59e0b" },
  { label: "Arduino", color: "#22c55e" },
  { label: "Firebase", color: "#f59e0b" },
  { label: "MySQL", color: "#3b82f6" },
  { label: "IoT", color: "#8b5cf6" },
  { label: "Git", color: "#ef4444" },
  { label: "Linux", color: "#fbbf24" },
  { label: "Bash", color: "#fbbf24" },
  { label: "Bootstrap", color: "#a78bfa" },
];

function SkillOrb({
  position,
  color,
  index,
}: {
  position: [number, number, number];
  color: string;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime + offset;
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + index) * 0.15;
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.z = t * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.22, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function RingConnector() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.015, 8, 80]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.4}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function OrbSystem() {
  const groupRef = useRef<THREE.Group>(null!);

  const orbPositions = useMemo(() => {
    return SKILLS.map((_, i) => {
      const angle = (i / SKILLS.length) * Math.PI * 2;
      const r = 2;
      return [Math.cos(angle) * r, Math.sin(angle) * r * 0.3, Math.sin(angle) * r] as [
        number,
        number,
        number,
      ];
    });
  }, []);

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={groupRef}>
      <RingConnector />
      {orbPositions.map((pos, i) => (
        <SkillOrb key={i} position={pos} color={SKILLS[i].color} index={i} />
      ))}
    </group>
  );
}

function SkillsCanvas() {
  return (
    <Canvas camera={{ position: [0, 1.5, 6], fov: 55 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b5cf6" />
      <OrbSystem />
    </Canvas>
  );
}

export default function SkillsSection() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
      {/* 3D Canvas */}
      <div style={{ height: "400px", borderRadius: "24px", overflow: "hidden", position: "relative" }}>
        <SkillsCanvas />
      </div>

      {/* Skill Tags Grid */}
      <div>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Technologies I work with
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.label}
              style={{
                padding: "0.5rem 1.125rem",
                borderRadius: "999px",
                fontSize: "0.875rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                background: `${skill.color}12`,
                border: `1px solid ${skill.color}30`,
                color: skill.color,
                cursor: "default",
                transition: "all 0.25s ease",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${skill.color}25`;
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}60`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${skill.color}12`;
                (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}30`;
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              {skill.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
