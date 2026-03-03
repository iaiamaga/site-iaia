import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react"

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const rippleCounter = useRef(0);

  useEffect(() => {
    // Esconde o cursor nativo
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const style = window.getComputedStyle(target).cursor;
      setIsPointer(style === "pointer");
    };

    const handleClick = (e: MouseEvent) => {
      const id = rippleCounter.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      // Remove o ripple após a animação
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 900);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Halo externo — segue com lag suave */}
      <motion.div
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isPointer ? 52 : 40,
          height: isPointer ? 52 : 40,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)",
          boxShadow:
            "0 0 18px 6px rgba(255,255,255,0.13), 0 0 40px 10px rgba(255,255,255,0.06)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s ease, height 0.2s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* Ponto central — segue imediatamente */}
      <motion.div
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.95)",
          boxShadow:
            "0 0 6px 2px rgba(255,255,255,0.7), 0 0 14px 4px rgba(255,255,255,0.3)",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "screen",
        }}
      />

      {/* Ripples - onda externa */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.7, scale: 0.1 }}
            animate={{ opacity: 0, scale: 4.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.2, 0.8, 0.4, 1] }}
            style={{
              position: "fixed",
              top: ripple.y - 30,
              left: ripple.x - 30,
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "1.5px solid rgba(255, 255, 255, 0.6)",
              pointerEvents: "none",
              zIndex: 99997,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Ripples - onda interna (ligeiramente atrasada) */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`inner-${ripple.id}`}
            initial={{ opacity: 0.5, scale: 0.05 }}
            animate={{ opacity: 0, scale: 2.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.1, 0.6, 0.4, 1], delay: 0.05 }}
            style={{
              position: "fixed",
              top: ripple.y - 30,
              left: ripple.x - 30,
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              pointerEvents: "none",
              zIndex: 99997,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}