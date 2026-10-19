import { SunflowerDecor } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

export function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#F5EFE3' }}>
      {/* Growing sunflower decoration */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
        <SunflowerDecor size={300} />
      </div>
      <div className="absolute right-16 top-8 opacity-[0.06] pointer-events-none">
        <SunflowerDecor size={200} spin />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="reveal">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            09 — Get in touch
          </p>

          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: '#1C1B18',
              marginBottom: '1.25rem',
            }}
          >
            Let's build<br />
            <em style={{ color: '#EDB82A', fontWeight: 400, fontStyle: 'italic' }}>something.</em>
          </h2>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', color: '#7A746A', maxWidth: '500px', lineHeight: 1.75, marginBottom: '3rem' }}>
            Have a project, an opportunity, or just an interesting problem to solve?
            I'm genuinely open to conversations — no pressure, no pitch deck required. Just drop a message.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a href="mailto:shamnshajara@gmail.com" className="btn btn-dark">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.5 3.5L7 7.5l5.5-4M1.5 3.5h11v8h-11v-8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Email me
            </a>
            <a href="https://linkedin.com/in/hajarathu-shamna" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="3.5" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="2.75" cy="2.75" r="1" fill="currentColor" />
                <path d="M6.5 5.5v8M6.5 7.5C6.5 6 8 5 9.5 5c1.5 0 3 1 3 3v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/hajshamna" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 .5C3.41.5.5 3.41.5 7c0 2.9 1.88 5.37 4.49 6.24.33.06.45-.14.45-.32v-1.13c-1.83.4-2.21-.88-2.21-.88-.3-.76-.73-.97-.73-.97-.6-.41.05-.4.05-.4.66.05 1.01.68 1.01.68.59 1.01 1.54.72 1.92.55.06-.43.23-.72.42-.89-1.46-.16-2.99-.73-2.99-3.24 0-.71.25-1.3.67-1.76-.07-.17-.29-.83.06-1.73 0 0 .55-.18 1.8.67A6.3 6.3 0 017 4.5c.56 0 1.12.08 1.64.22 1.25-.85 1.8-.67 1.8-.67.36.9.13 1.56.06 1.73.42.46.67 1.04.67 1.76 0 2.52-1.53 3.07-2.99 3.23.24.21.44.61.44 1.23v1.82c0 .18.12.38.45.32A6.52 6.52 0 0013.5 7C13.5 3.41 10.59.5 7 .5z" fill="currentColor" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Availability */}
          <div
            className="inline-flex flex-wrap gap-4 p-5 rounded-sm"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(180,174,164,0.35)' }}
          >
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.12em', color: '#9A9490', textTransform: 'uppercase', alignSelf: 'center' }}>
              Open to:
            </p>
            {['Full-time roles', 'Remote work', 'Freelance projects'].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.8rem',
                  background: '#FDF6D6',
                  color: '#5C3E18',
                  border: '1px solid rgba(237,184,42,0.35)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
