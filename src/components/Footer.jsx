import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="relative w-full bg-[#0a0a0a] py-10 text-[#a0a0a0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.08),transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Himansh Munjal. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#home" className="hover:text-[#e0e0e0]">Home</a>
          <a href="#about" className="hover:text-[#e0e0e0]">About</a>
          <a href="#projects" className="hover:text-[#e0e0e0]">Projects</a>
          <a href="#connect" className="hover:text-[#e0e0e0]">Connect</a>
          <a href="/certifications" className="hover:text-[#e0e0e0]">Certifications</a>
          <a href="/projects" className="hover:text-[#e0e0e0]">All Projects</a>
        </nav>
        <button onClick={backToTop} aria-label="Back to top" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#e0e0e0] transition hover:bg-white/10">
          <ArrowUp size={16} /> Back to top
        </button>
      </div>
    </footer>
  );
}
