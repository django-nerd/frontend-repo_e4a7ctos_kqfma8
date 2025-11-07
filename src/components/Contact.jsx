import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Thanks! I will get back to you soon.');
      setTimeout(() => setStatus(''), 4000);
    }, 800);
  };

  return (
    <section id="connect" className="w-full bg-[#0a0a0a] py-24 text-[#e0e0e0]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let’s Connect</h2>
          <p className="mt-2 text-[#a0a0a0]">Have a question or want to collaborate? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#e0e0e0] outline-none transition focus:border-[#8b5cf6]"
                placeholder=" "
                aria-label="Name"
              />
              <label htmlFor="name" className="pointer-events-none absolute left-3 top-2.5 bg-[#0a0a0a] px-1 text-sm text-[#a0a0a0] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
                Name
              </label>
            </div>
            <div className="group relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#e0e0e0] outline-none transition focus:border-[#8b5cf6]"
                placeholder=" "
                aria-label="Email"
              />
              <label htmlFor="email" className="pointer-events-none absolute left-3 top-2.5 bg-[#0a0a0a] px-1 text-sm text-[#a0a0a0] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
                Email
              </label>
            </div>
          </div>
          <div className="group relative mt-6">
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#e0e0e0] outline-none transition focus:border-[#8b5cf6]"
              placeholder=" "
              aria-label="Message"
            />
            <label htmlFor="message" className="pointer-events-none absolute left-3 top-2.5 bg-[#0a0a0a] px-1 text-sm text-[#a0a0a0] transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
              Message
            </label>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#00d4ff]/40 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] px-6 py-3 font-medium text-black/90 shadow-[0_0_30px_rgba(139,92,246,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4ff]"
            aria-label="Send Message"
          >
            <span className="absolute inset-0 h-full w-full animate-pulse bg-gradient-to-r from-white/20 to-transparent opacity-20" />
            <span className="relative">Send Message</span>
          </motion.button>
          {status && (
            <div role="status" className="mt-3 text-center text-sm text-[#a0a0a0]">
              {status}
            </div>
          )}
        </form>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-6">
          <a href="mailto:himansh@example.com" className="inline-flex items-center gap-2 text-[#a0a0a0] transition hover:text-[#e0e0e0]" aria-label="Email">
            <Mail size={20} /> Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#a0a0a0] transition hover:text-[#e0e0e0]" aria-label="LinkedIn">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#a0a0a0] transition hover:text-[#e0e0e0]" aria-label="GitHub">
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
