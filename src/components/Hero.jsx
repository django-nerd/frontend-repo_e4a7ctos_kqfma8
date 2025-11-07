import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';

const typingText = "Creative Developer • Building immersive, performant web experiences";

function useTypingEffect(text, speed = 40) {
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? text : '');

  useEffect(() => {
    if (shouldReduceMotion) return;
    let i = 0;
    const id = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, shouldReduceMotion]);

  return display;
}

export default function Hero() {
  const subtitle = useTypingEffect(typingText, 22);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const el = indicatorRef.current;
    if (!el) return;
    let raf;
    let t = 0;
    const animate = () => {
      t += 0.035;
      const y = Math.sin(t) * 6; // floating animation
      el.style.transform = `translateY(${y}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleScroll = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#e0e0e0]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00d4ff] bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl"
        >
          Hi, I'm Himansh Munjal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-3xl text-lg text-[#a0a0a0] md:text-xl"
          aria-live="polite"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-white/5 px-6 py-3 text-[#e0e0e0] shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            aria-label="Explore My Work"
          >
            <span className="relative z-10">Explore My Work</span>
            <span className="absolute inset-0 rounded-full bg-[#00d4ff]/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>

        <button
          onClick={handleScroll}
          className="mt-16 flex flex-col items-center text-[#a0a0a0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]"
          aria-label="Scroll to About section"
        >
          <span className="text-sm">Scroll</span>
          <span ref={indicatorRef} className="mt-2 inline-block h-8 w-[2px] rounded-full bg-gradient-to-b from-[#8b5cf6] to-[#00d4ff]" />
        </button>
      </div>
    </section>
  );
}
