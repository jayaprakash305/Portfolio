

export default function Education({ education }) {
  return (
    <section id="education" className="bg-accent-light dark:bg-ink py-28 px-6 md:px-16">
      <div className="reveal flex items-center gap-3 text-xs tracking-widest uppercase text-accent mb-4">
        <span className="w-8 h-px bg-accent block" />
        Education & Certifications
      </div>
      <h2
        className="reveal font-display font-black leading-[1.05] tracking-tighter mb-12"
        style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
      >
        Academic Background.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
        {education.map((e) => (
          <div
            key={e.name}
            className="reveal-scale bg-cream dark:bg-zinc-900 border border-border dark:border-gray-800 rounded-sm p-8
              hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10
              transition-all duration-400 group cursor-default"
          >
            <div className="text-xs tracking-widest uppercase text-accent mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-accent block transition-all duration-300 group-hover:w-8" />
              {e.type}
            </div>
            <div className="text-lg font-medium mb-2 group-hover:text-accent transition-colors duration-300">{e.name}</div>
            <div className="text-sm text-gray-400 mb-3">{e.institution}</div>
            <div className="text-sm text-accent font-medium">{e.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
