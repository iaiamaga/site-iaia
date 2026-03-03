import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  isClick?: boolean;
}

const SPRAY_COLORS = [
  "#FF3CAC",
  "#784BA0",
  "#2B86C5",
  "#00F5A0",
  "#F9F047",
  "#FF6B35",
  "#FF0080",
  "#00FFFF",
  "#ADFF2F",
  "#FF4500",
];

let globalId = 0;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: -200, y: -200 });
  const frameRef = useRef<number>(0);
  const pendingParticles = useRef<Particle[]>([]);

  const addParticle = useCallback((x: number, y: number, isClick = false) => {
    const count = isClick ? 18 : 1;
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = isClick
        ? (i / count) * Math.PI * 2
        : Math.random() * Math.PI * 2;
      const speed = isClick
        ? 2 + Math.random() * 4
        : 0.5 + Math.random() * 1.5;

      newParticles.push({
        id: globalId++,
        x: x + (Math.random() - 0.5) * (isClick ? 6 : 3),
        y: y + (Math.random() - 0.5) * (isClick ? 6 : 3),
        color: SPRAY_COLORS[Math.floor(Math.random() * SPRAY_COLORS.length)],
        size: isClick ? 3 + Math.random() * 5 : 1.5 + Math.random() * 3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        isClick,
      });
    }

    pendingParticles.current.push(...newParticles);
  }, []);

  // Flush pending particles in batches to avoid excessive re-renders
  useEffect(() => {
    const flush = () => {
      if (pendingParticles.current.length > 0) {
        const toAdd = [...pendingParticles.current];
        pendingParticles.current = [];
        setParticles((prev) => {
          const combined = [...prev, ...toAdd];
          // Cap total particles for performance
          return combined.slice(-120);
        });
      }
      frameRef.current = requestAnimationFrame(flush);
    };
    frameRef.current = requestAnimationFrame(flush);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      setPosition({ x, y });

      // Spawn particles proportional to movement speed
      if (dist > 3) {
        const steps = Math.min(Math.floor(dist / 6), 4);
        for (let i = 0; i <= steps; i++) {
          const t = steps === 0 ? 1 : i / steps;
          addParticle(
            lastPos.current.x + dx * t,
            lastPos.current.y + dy * t
          );
        }
        lastPos.current = { x, y };
      }
    };

    const handleClick = (e: MouseEvent) => {
      addParticle(e.clientX, e.clientY, true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [addParticle]);

  return (
    <>
      {/* Crosshair mínimo — só duas linhas finas */}
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "tween", duration: 0 }}
        style={{
          position: "fixed",
          top: -8,
          left: -8,
          width: 16,
          height: 16,
          pointerEvents: "none",
          zIndex: 99999,
        }}
      >
        {/* linha horizontal */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: 1,
            background: "rgba(255,255,255,0.9)",
            transform: "translateY(-50%)",
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
          }}
        />
        {/* linha vertical */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 1,
            height: "100%",
            background: "rgba(255,255,255,0.9)",
            transform: "translateX(-50%)",
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
          }}
        />
      </motion.div>

      {/* Partículas de spray */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              x: p.x - p.size / 2,
              y: p.y - p.size / 2,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              x: p.x - p.size / 2 + p.vx * (p.isClick ? 40 : 20),
              y: p.y - p.size / 2 + p.vy * (p.isClick ? 40 : 20),
              scale: p.isClick ? 0.2 : 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: p.isClick ? 0.7 : 0.45,
              ease: p.isClick ? [0.1, 0.8, 0.3, 1] : "easeOut",
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 ${p.isClick ? 8 : 4}px ${p.color}`,
              pointerEvents: "none",
              zIndex: 99998,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}