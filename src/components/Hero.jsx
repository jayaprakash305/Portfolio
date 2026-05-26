import { useRef, useEffect, useState } from 'react';
import { Camera, ArrowDown } from 'lucide-react';


export default function Hero({ profile }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const anim = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.85s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.85s cubic-bezier(.22,1,.36,1) ${delay}ms`,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 relative overflow-hidden pt-24"
    >
      {/* Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black select-none pointer-events-none whitespace-nowrap tracking-tighter leading-none"
        style={{
          fontSize: 'clamp(80px, 16vw, 220px)',
          WebkitTextStroke: '1px rgba(0,0,0,0.05)',
          color: 'transparent',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 600ms',
        }}
      >
        REACT
      </div>

      {/* Subtle animated dots */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-accent/10 dark:bg-accent/15 pointer-events-none"
          style={{
            width: `${[140,80,60,100,50][i]}px`,
            height: `${[140,80,60,100,50][i]}px`,
            top: `${[15,70,30,55,80][i]}%`,
            left: `${[5,80,60,40,20][i]}%`,
            animation: `floatDot ${[6,8,7,9,5.5][i]}s ease-in-out ${[0,1,2,0.5,1.5][i]}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        {/* Left */}
        <div className="flex-1">
          <div style={anim(100)}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-accent border border-accent px-4 py-1.5 rounded-full mb-6">
              <span className="pulse-dot" />
              {profile.tagline}
            </span>
          </div>

          <h1
            className="font-display font-black leading-[0.92] tracking-tighter mb-8"
            style={{ fontSize: 'clamp(52px, 9vw, 110px)', ...anim(220) }}
          >
            Jaya<br />
            <span className="text-accent">Prakash</span> V.
          </h1>

          {/* Mobile photo */}
          <div className="md:hidden mb-8" style={anim(300)}>
            <ProfilePhoto />
          </div>

          <p
            className="text-base font-light text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed mb-8"
            style={anim(360)}
          >
            Frontend Developer crafting scalable web experiences with React.js & the MERN Stack.
            Based in Tamil Nadu, India.
          </p>

          <div className="flex flex-wrap gap-3" style={anim(460)}>
            <a
              href="#projects"
              className="group relative bg-ink text-cream dark:bg-cream dark:text-ink text-xs tracking-widest uppercase px-8 py-4 rounded-full overflow-hidden
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border-[1.5px] border-ink text-ink dark:border-cream dark:text-cream text-xs tracking-widest uppercase px-8 py-4 rounded-full
                hover:bg-ink hover:text-cream dark:hover:bg-cream dark:hover:text-ink transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-10">
          <div className="hidden md:block" style={anim(300)}>
            <ProfilePhoto />
          </div>
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-gray-400" style={anim(560)}>
            <div className="w-10 h-px bg-gray-300 dark:bg-gray-600 scroll-line-anim" />
            Scroll
            <ArrowDown size={12} className="animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
}

function ProfilePhoto() {
  return (
    <div
      className="photo-container relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden
        border-2 border-border dark:border-gray-800
        transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/15"
    >
      <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
    </div>
  );
}
