

export default function Experience({ experience }) {
  return (
    <section id="experience" className="bg-cream dark:bg-ink py-28 px-6 md:px-16">
      <div className="reveal flex items-center gap-3 text-xs tracking-widest uppercase text-accent mb-4">
        <span className="w-8 h-px bg-accent block" />
        Career
      </div>
      <h2
        className="reveal font-display font-black leading-[1.05] tracking-tighter mb-12"
        style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
      >
        Work Experience.
      </h2>

      <div className="flex flex-col relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-[188px] top-0 bottom-0 w-px bg-border dark:bg-gray-800 hidden md:block" />

        {experience.map((e, i) => (
          <div
            key={i}
            className="reveal border-t border-border dark:border-gray-800 py-10
              grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-12 items-start
              last:border-b last:border-border dark:last:border-gray-800
              group"
          >
            <div className="flex items-start gap-3">
              {/* Timeline dot */}
              <div
                className="hidden md:flex items-center justify-end w-full"
              >
                <span className="text-xs text-gray-400 tracking-wide">{e.date}</span>
                <div className="w-2 h-2 rounded-full bg-accent ml-4 flex-shrink-0
                  group-hover:scale-150 transition-transform duration-300" />
              </div>
              <div className="md:hidden text-xs text-gray-400 tracking-wide pt-1">{e.date}</div>
            </div>

            <div className="md:pl-8">
              <div className="text-lg font-medium mb-1 group-hover:text-accent transition-colors duration-300">{e.role}</div>
              <div className="text-sm text-accent mb-4">{e.company}</div>
              <div className="flex flex-col gap-3">
                {e.points.map((pt, j) => (
                  <div
                    key={j}
                    className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                      transition-all duration-200 hover:text-ink dark:hover:text-cream hover:translate-x-1"
                  >
                    <span className="text-border dark:text-gray-600 flex-shrink-0 mt-0.5">—</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
