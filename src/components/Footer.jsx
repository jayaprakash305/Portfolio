export default function Footer({ profile }) {
  return (
    <footer className="bg-ink border-t border-gray-900 px-6 md:px-16 py-8
      flex flex-col md:flex-row items-center justify-between gap-4
      text-xs tracking-wide text-gray-600">
      <span className="hover:text-gray-400 transition-colors duration-200 cursor-default">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </span>
      <span className="flex items-center gap-2">
        <span className="pulse-dot opacity-60" />
        {profile.location}
      </span>
      <span className="hover:text-gray-400 transition-colors duration-200 cursor-default">
        {profile.title} · {profile.subtitle}
      </span>
    </footer>
  );
}
