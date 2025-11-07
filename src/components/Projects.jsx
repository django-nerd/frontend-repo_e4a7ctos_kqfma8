import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Analytics Dashboard',
    desc: 'Real-time insights with crisp charts and motion transitions.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Commerce Showcase',
    desc: 'Interactive product viewer powered by WebGL/Spline.',
    tech: ['Spline', 'Three.js', 'Vite'],
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Fast, accessible, and SEO-friendly personal site template.',
    tech: ['React', 'Vite', 'SEO'],
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop',
  },
];

function Badge({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#a0a0a0] transition hover:border-[#00d4ff]/40 hover:text-[#e0e0e0]">
      {label}
    </span>
  );
}

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.06, duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-xl backdrop-blur-md"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={p.img}
          alt={`${p.title} thumbnail`}
          loading="lazy"
          className="h-48 w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-[#00d4ff]/40" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#e0e0e0]">{p.title}</h3>
        <p className="mt-2 text-sm text-[#a0a0a0]">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full scroll-mt-20 bg-[#0a0a0a] py-24 text-[#e0e0e0]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-[#a0a0a0]">A snapshot of things I’ve been crafting lately.</p>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center rounded-full border border-[#00d4ff]/40 bg-white/5 px-5 py-2.5 text-sm text-[#e0e0e0] transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            aria-label="View More Projects"
          >
            View More Projects
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
