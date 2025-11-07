import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'pointer-events-none fixed z-[1000] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00d4ff]/70 bg-[#00d4ff]/20 backdrop-blur-sm transition-transform duration-150 ease-out';
    cursorRef.current = cursor;
    document.body.appendChild(cursor);

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, input, textarea')) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
      } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const spawnParticle = (x, y) => {
      const p = document.createElement('div');
      p.className = 'pointer-events-none fixed z-[999] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6] opacity-80';
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      document.body.appendChild(p);
      const life = 450;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / life);
        const dx = (Math.random() - 0.5) * 30;
        const dy = (Math.random() - 0.5) * 30;
        p.style.transform = `translate(${dx}px, ${dy}px)`;
        p.style.opacity = String(1 - t);
        if (t < 1) requestAnimationFrame(tick);
        else p.remove();
      };
      requestAnimationFrame(tick);
      trailRef.current.push(p);
      if (trailRef.current.length > 24) {
        const old = trailRef.current.shift();
        old && old.remove();
      }
    };

    const onMoveWithTrail = (e) => {
      handleMove(e);
      if (document.hidden) return;
      if (Math.random() < 0.35) spawnParticle(e.clientX, e.clientY);
    };

    window.addEventListener('pointermove', onMoveWithTrail);
    window.addEventListener('mousemove', handleHover);

    return () => {
      window.removeEventListener('pointermove', onMoveWithTrail);
      window.removeEventListener('mousemove', handleHover);
      cursor.remove();
      trailRef.current.forEach((n) => n.remove());
    };
  }, []);

  return null;
}
