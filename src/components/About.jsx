import { useEffect, useRef, useState } from 'react';


function useCountUp(target, duration = 1400, triggered = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = null;
    const num = parseInt(target, 10);
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return value;
}

function StatItem({ stat, triggered }) {
  const num = useCountUp(stat.num, 1200, triggered);
  return (
    <div className="reveal border-t border-gray-800 pt-5">
      <div className="font-display font-black text-cream leading-none mb-2" style={{ fontSize: '3rem' }}>
        {num}
        <span className="text-accent" style={{ fontSize: '2rem' }}>{stat.suffix}</span>
      </div>
      <div className="text-xs text-gray-600 tracking-wider uppercase">{stat.label}</div>
    </div>
  );
}

export default function About({ profile }) {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-ink text-cream py-28 px-6 md:px-16 overflow-hidden">
      <div className="reveal-left flex items-center gap-3 text-xs tracking-widest uppercase text-blue-400 mb-4">
        <span className="w-8 h-px bg-blue-400 block" />
        About Me
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left */}
        <div>
          <h2
            className="reveal-left font-display font-black leading-[1.05] tracking-tighter mb-8"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            Building the web,<br />one component<br />at a time.
          </h2>
          <div className="reveal-left text-gray-400 font-light text-base leading-relaxed space-y-4">
            {profile.about.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right: stats with count-up */}
        <div className="grid grid-cols-2 gap-6 stagger">
          {profile.stats.map((s) => (
            <StatItem key={s.label} stat={s} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
