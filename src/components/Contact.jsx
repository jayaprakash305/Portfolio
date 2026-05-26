import { useState } from 'react';


const quickLinks = (p) => [
  { label: '✉ Email Me', href: `mailto:${p.email}` },
  { label: '📞 Call Me', href: `tel:${p.phone}` },
  { label: 'LinkedIn ↗', href: p.linkedin },
  { label: 'GitHub ↗', href: p.github },
];

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
      return;
    }
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="bg-ink text-cream py-28 md:py-36 px-6 md:px-16 text-center overflow-hidden">
      <div className="reveal flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-blue-400 mb-4">
        <span className="w-8 h-px bg-blue-400 block" />
        Let's Connect
        <span className="w-8 h-px bg-blue-400 block" />
      </div>

      <h2
        className="reveal font-display font-black leading-[1.05] tracking-tighter mb-4"
        style={{ fontSize: 'clamp(36px, 7vw, 90px)' }}
      >
        Let's build<br />something{' '}
        <span className="text-accent">great.</span>
      </h2>

      <p className="reveal text-base text-gray-500 font-light mb-12 max-w-md mx-auto">
        Open to frontend roles, freelance projects & collaborations.
      </p>

      {/* Quick links */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 stagger">
        {quickLinks(profile).map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="reveal-scale text-xs tracking-wider uppercase text-gray-400 border border-gray-700 px-6 py-3 rounded-full
              hover:bg-cream hover:text-ink hover:border-cream hover:scale-105
              transition-all duration-250"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Form */}
      <form className="reveal max-w-lg mx-auto text-left" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Field label="Your Name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} focused={focused} setFocused={setFocused} />
          <Field label="Your Email" name="email" type="email" placeholder="hello@email.com" value={form.email} onChange={handleChange} focused={focused} setFocused={setFocused} />
        </div>
        <div className="mb-4">
          <Field label="Subject" name="subject" placeholder="Project collaboration, job opportunity..." value={form.subject} onChange={handleChange} focused={focused} setFocused={setFocused} />
        </div>
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-xs tracking-widest uppercase text-gray-500 transition-colors duration-200" style={{ color: focused === 'message' ? '#2c5f8a' : undefined }}>
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            rows={5}
            className="bg-gray-900 border text-cream px-4 py-3.5 text-sm rounded-sm outline-none resize-y font-body
              transition-all duration-200"
            style={{ borderColor: focused === 'message' ? '#2c5f8a' : '#1f2937' }}
          />
        </div>
        <button
          type="submit"
          className={`w-full py-4 text-xs tracking-widest uppercase font-medium rounded-full
            transition-all duration-300 mt-2 hover:scale-[1.01] active:scale-[0.99]
            ${status === 'error' ? 'bg-red-500 text-white'
              : status === 'sent' ? 'bg-green-500 text-white'
              : 'bg-cream text-ink hover:bg-accent hover:text-cream'}`}
        >
          {status === 'error' ? 'Please fill all fields'
            : status === 'sent' ? 'Opening email client...'
            : 'Send Message →'}
        </button>
      </form>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, value, onChange, focused, setFocused }) {
  const isFocused = focused === name;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs tracking-widest uppercase transition-colors duration-200"
        style={{ color: isFocused ? '#2c5f8a' : '#6b7280' }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="bg-gray-900 border text-cream px-4 py-3.5 text-sm rounded-sm outline-none font-body
          transition-all duration-200"
        style={{ borderColor: isFocused ? '#2c5f8a' : '#1f2937' }}
      />
    </div>
  );
}
