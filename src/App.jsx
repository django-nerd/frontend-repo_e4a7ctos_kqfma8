import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useEffect } from 'react';

function useHashNavigation() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

export default function App() {
  useHashNavigation();
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <CustomCursor />
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="text-sm font-semibold text-[#e0e0e0]">HM</a>
          <div className="hidden items-center gap-6 text-sm text-[#a0a0a0] md:flex">
            <a href="#about" className="hover:text-[#e0e0e0]">About</a>
            <a href="#projects" className="hover:text-[#e0e0e0]">Projects</a>
            <a href="#connect" className="hover:text-[#e0e0e0]">Connect</a>
            <a href="/certifications" className="hover:text-[#e0e0e0]">Certifications</a>
            <a href="/projects" className="hover:text-[#e0e0e0]">All Projects</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
