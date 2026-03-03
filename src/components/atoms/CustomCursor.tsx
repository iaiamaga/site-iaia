import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface TouchDot {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  // ───── Desktop state ─────
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const rippleCounter = useRef(0);

  // ───── Mobile state ─────
  const [touchDots, setTouchDots] = useState<TouchDot[]>([]);
  const touchCounter = useRef(0);

  // ───── Detect device type (reactive) ─────
  // "hover: none" + "pointer: coarse" = toque sem hover (mobile/tablet real)
  // Usando useState + useEffect para reagir a mudanças (inclusive no DevTools)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(check.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    check.addEventListener("change", handler);
    return () => check.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // ══════════════════════════════
    //  MOBILE — lógica de toque
    // ══════════════════════════════
    if (isMobile) {
      // No mobile o cursor nativo continua visível (não escondemos)
      // Só adicionamos o efeito de toque

      const handleTouchStart = (e: TouchEvent) => {
        Array.from(e.changedTouches).forEach((touch) => {
          const id = touchCounter.current++;

          // 1. Adiciona o ponto de toque (aparece)
          setTouchDots((prev) => [
            ...prev,
            { id, x: touch.clientX, y: touch.clientY },
          ]);

          // 2. Adiciona ripple no mesmo ponto
          setRipples((prev) => [
            ...prev,
            { id, x: touch.clientX, y: touch.clientY },
          ]);

          // 3. Remove o ponto após 600ms (some com fade)
          setTimeout(() => {
            setTouchDots((prev) => prev.filter((d) => d.id !== id));
          }, 600);

          // 4. Remove o ripple após a animação terminar
          setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
          }, 900);
        });
      };

      window.addEventListener("touchstart", handleTouchStart);

      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
      };
    }

    // ══════════════════════════════
    //  DESKTOP — lógica original
    // ══════════════════════════════
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
  }, [isMobile]);

  return (
    <>
      {/* ══════════════════════════════
           DESKTOP — cursor customizado
          ══════════════════════════════ */}
      {!isMobile && (
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
                "0 0 32px 20px rgba(255,255,255,0.7), 0 0 14px 4px rgba(255,255,255,0.3)",
              pointerEvents: "none",
              zIndex: 99999,
              filter: "blur(4px)",
              mixBlendMode: "screen",
            }}
          />
        </>
      )}

      {/* ══════════════════════════════
           MOBILE — ponto de toque
           Aparece onde o dedo tocou e some após 600ms
          ══════════════════════════════ */}
      <AnimatePresence>
        {touchDots.map((dot) => (
          <motion.div
            key={`touch-${dot.id}`}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: dot.y - 12,
              left: dot.x - 12,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow:
                "0 0 32px 20px rgba(255,255,255,0.7), 0 0 14px 4px rgba(255,255,255,0.3)",
              filter: "blur(4px)",
              pointerEvents: "none",
              zIndex: 99999,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </AnimatePresence>

      {/* ══════════════════════════════
           COMPARTILHADO — Ripples
           Aparecem tanto no clique (desktop) quanto no toque (mobile)
          ══════════════════════════════ */}

      {/* Ripple — onda externa */}
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

      {/* Ripple — onda interna (levemente atrasada) */}
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