import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4
          bg-cream/90 dark:bg-ink/90 backdrop-blur-md
          transition-all duration-500
          ${scrolled ? 'border-b border-border dark:border-gray-800 shadow-sm' : 'border-b border-transparent'}`}
        style={{ animation: 'fadeUp 0.6s 0s both' }}
      >
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight text-ink dark:text-cream
            transition-colors duration-200 hover:text-accent dark:hover:text-accent"
        >
          Jaya Prakash V
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l, i) => {
            const id = l.toLowerCase();
            return (
              <li key={l} style={{ animation: `fadeUp 0.5s ${i * 60 + 100}ms both` }}>
                <a
                  href={`#${id}`}
                  className={`relative text-xs tracking-widest uppercase transition-colors duration-200
                    ${active === id ? 'text-accent' : 'text-gray-400 hover:text-ink dark:hover:text-cream'}`}
                >
                  {l}
                  {active === id && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      style={{ animation: 'slideRight 0.3s ease forwards', transformOrigin: 'left' }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4" style={{ animation: 'fadeUp 0.5s 400ms both' }}>
          <ThemeToggle />
          <button
            className="md:hidden text-ink dark:text-cream transition-transform duration-200 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block transition-all duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8
          bg-ink dark:bg-zinc-950
          transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-display text-5xl font-bold text-cream hover:text-accent transition-all duration-200
              hover:translate-x-2"
            style={{
              transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.4s cubic-bezier(.22,1,.36,1) ${i * 60 + 100}ms`,
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </>
  );
}
