import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  'Backend API development',
  'REST API design & implementation',
  'Next.js web applications',
  'CRM systems & admin dashboards',
  'MongoDB database design',
  'Third-party API integrations',
  'Business workflow automation',
  'Authentication & access control',
  'Existing app improvements',
  'Bug fixing & performance',
];

export function Freelance() {
  const ref = useReveal();

  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            08 — Freelance
          </p>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#1C1B18',
                  marginBottom: '1.25rem',
                }}
              >
                Have a problem<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>that needs building?</em>
              </h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#7A746A', lineHeight: 1.8, maxWidth: '460px', marginBottom: '2rem' }}>
                I'm available for focused freelance projects. I work best with clients who care about
                the actual outcome — not just a list of deliverables. If you have a real problem that
                needs a practical solution, let's talk.
              </p>
              <a
                href="mailto:hajarathu.shamna@gmail.com?subject=Freelance Enquiry"
                className="btn btn-dark"
              >
                Start a conversation
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* Right: services */}
            <div className="p-8 rounded-sm" style={{ background: '#F5EFE3', border: '1px solid rgba(180,174,164,0.3)' }}>
              <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1rem', color: '#1C1B18', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
                I can help you with:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="mt-2.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#EDB82A' }} />
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#3A3835', lineHeight: 1.5 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
