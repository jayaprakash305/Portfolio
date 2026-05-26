

const icons = ['⚡', '🔧', '📡', '🔒', '🛠', '🚀'];

export default function Skills({ skills }) {
  // Marquee of all skill tags
  const allTags = skills.flatMap((s) => s.tags);

  return (
    <section id="skills" className="bg-cream dark:bg-ink py-28 overflow-hidden">
      <div className="px-6 md:px-16">
        <div className="reveal flex items-center gap-3 text-xs tracking-widest uppercase text-accent mb-4">
          <span className="w-8 h-px bg-accent block" />
          Skills & Technologies
        </div>
        <h2
          className="reveal font-display font-black leading-[1.05] tracking-tighter mb-12"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
        >
          What I work with.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border dark:bg-gray-800 border border-border dark:border-gray-800 stagger">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal-scale skill-card bg-cream dark:bg-ink hover:bg-accent-light dark:hover:bg-zinc-900 p-8 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-accent mb-3">
                <span className="text-base">{icons[i]}</span>
                {s.category}
              </div>
              <div className="text-base font-medium mb-4 group-hover:text-accent transition-colors duration-200">{s.name}</div>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 rounded-full
                      transition-all duration-200 hover:bg-accent hover:text-cream cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 border-t border-b border-border dark:border-gray-800 py-4 overflow-hidden">
        <div className="marquee-track gap-6 select-none">
          {[...allTags, ...allTags].map((t, i) => (
            <span key={i} className="flex-shrink-0 text-xs tracking-widest uppercase text-gray-400 dark:text-gray-600 px-4">
              {t} <span className="text-accent ml-4">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
