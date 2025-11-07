import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Stat({ label, value, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(start + (end - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <div className="text-3xl font-bold text-[#00d4ff]">{count}+</div>
      <div className="mt-1 text-sm text-[#a0a0a0]">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-20 bg-[#0a0a0a] py-24 text-[#e0e0e0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mt-4 text-[#a0a0a0]">
            I'm a developer focused on creating immersive, accessible, and performant web experiences.
            I love combining modern UI with robust engineering to deliver products people enjoy using.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/certifications"
              className="inline-flex items-center rounded-full border border-[#8b5cf6]/40 bg-white/5 px-5 py-2.5 text-sm text-[#e0e0e0] transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]"
              aria-label="View My Certifications"
            >
              View My Certifications
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat label="Projects" value={24} />
            <Stat label="Certifications" value={8} delay={0.1} />
            <Stat label="Years" value={3} delay={0.2} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-2xl">
            <div className="relative h-full w-full transform rounded-xl bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-300 ease-out will-change-transform group-hover:rotate-1 group-hover:scale-[1.03]" role="img" aria-label="Himansh portrait" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
