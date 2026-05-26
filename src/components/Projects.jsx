import { useState } from 'react';


export default function Projects({ projects }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="bg-ink text-cream py-28 px-6 md:px-16 overflow-hidden">
      <div className="reveal-left flex items-center gap-3 text-xs tracking-widest uppercase text-blue-400 mb-4">
        <span className="w-8 h-px bg-blue-400 block" />
        Selected Work
      </div>
      <h2
        className="reveal-left font-display font-black leading-[1.05] tracking-tighter mb-12"
        style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
      >
        Projects I've built.
      </h2>

      <div className="flex flex-col">
        {projects.map((p, idx) => (
          <div
            key={p.num}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="reveal border-t border-gray-800 py-10 grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-start
              last:border-b last:border-gray-800
              transition-all duration-400 cursor-default"
            style={{
              paddingLeft: hovered === idx ? '1rem' : '0',
              transition: 'padding 0.35s cubic-bezier(.22,1,.36,1)',
            }}
          >
            <div
              className="font-display text-sm pt-1 transition-colors duration-300"
              style={{ color: hovered === idx ? '#6a9fc0' : '#444' }}
            >
              {p.num}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold tracking-tight transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 34px)',
                    color: hovered === idx ? '#6a9fc0' : '#f8f6f1',
                  }}
                >
                  {p.title}
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4 stagger">
                {p.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1 border rounded-full transition-all duration-200"
                    style={{
                      borderColor: hovered === idx ? '#2c5f8a55' : '#333',
                      color: hovered === idx ? '#6a9fc0' : '#666',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed max-w-xl mb-4">{p.desc}</p>

              {/* Highlights — animate in on hover */}
              <div
                className="flex flex-col gap-2 overflow-hidden transition-all duration-500"
                style={{ maxHeight: hovered === idx ? '400px' : '0', opacity: hovered === idx ? 1 : 0 }}
              >
                {p.highlights.map((h, i) => (
                  <div
                    key={h}
                    className="flex gap-3 items-start text-sm text-gray-500"
                    style={{
                      transitionDelay: `${i * 50}ms`,
                      opacity: hovered === idx ? 1 : 0,
                      transform: hovered === idx ? 'translateX(0)' : 'translateX(-8px)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0 text-xs">→</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-2xl self-center transition-all duration-300 hover:opacity-80"
              style={{
                color: hovered === idx ? '#6a9fc0' : '#333',
                transform: hovered === idx ? 'translate(4px,-4px)' : 'translate(0,0)',
              }}
            >
              ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
