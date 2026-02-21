import { useEffect, useRef, useState } from 'react';

type CursorVariant = 'default' | 'hover' | 'click';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Esconde o cursor nativo
    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // O dot segue instantaneamente
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    const onMouseDown = () => setVariant('click');
    const onMouseUp = () => setVariant('default');

    // Detecta elementos interativos para o efeito hover
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label');
      setVariant(isInteractive ? 'hover' : 'default');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // Loop de animação — o ring e o trail seguem com lag (easing)
    const animate = () => {
      // Ring: lag médio
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

      // Trail: lag maior
      trailPos.current.x += (mouse.current.x - trailPos.current.x) * 0.06;
      trailPos.current.y += (mouse.current.y - trailPos.current.y) * 0.06;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const isHover = variant === 'hover';
  const isClick = variant === 'click';

  return (
    <>
      {/* Trail — segue mais devagar, fica atrás de tudo */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          width: isHover ? 60 : 40,
          height: isHover ? 60 : 40,
          background: 'radial-gradient(circle, rgba(147,33,211,0.15) 0%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.4s ease, height 0.4s ease, opacity 0.3s ease',
        }}
      />

      {/* Ring — segue com lag médio */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHover ? 48 : isClick ? 20 : 32,
          height: isHover ? 48 : isClick ? 20 : 32,
          border: `1.5px solid ${isHover ? 'rgba(147,33,211,0.9)' : 'rgba(255,255,255,0.6)'}`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
        }}
      />

      {/* Dot — segue instantaneamente */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHover ? 6 : isClick ? 10 : 6,
          height: isHover ? 6 : isClick ? 10 : 6,
          background: isHover ? '#9321D3' : 'white',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.3s ease',
        }}
      />
    </>
  );
}