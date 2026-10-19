import { useReveal } from '../hooks/useReveal';

const POINTS = [
  {
    title: 'Real production experience',
    body: "I've shipped multi-tenant SaaS products used by 1,000+ users across real businesses — not side projects. CRMs, healthcare platforms, payment systems. The stakes were real and the code had to work.",
    num: '01',
  },
  {
    title: 'Backend depth that shows',
    body: 'JWT, RBAC, WebSockets, MongoDB aggregations, query optimisation, multi-tenant architecture — I\'ve designed and shipped these in production. API response times improved 20% through indexing strategy alone.',
    num: '02',
  },
  {
    title: 'Full-stack, not half-stack',
    body: 'Next.js, React, Redux — I can own a feature end to end. I don\'t just write backend code and hand off; I build complete, usable features from database schema to deployed UI.',
    num: '03',
  },
  {
    title: 'I grow and I help others grow',
    body: "I mentor junior developers through code reviews and architecture decisions. I also stay ahead — actively working with Redis, BullMQ, AI agents and system design outside work hours.",
    num: '04',
  },
];

export function WhyMe() {
  const ref = useReveal();

  return (
    <section className="py-28 lg:py-36 bg-[#1C1B18] relative overflow-hidden">
      {/* Large italic text decoration */}
      <div
        className="absolute -bottom-10 left-0 right-0 text-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(4rem, 12vw, 11rem)',
            color: 'rgba(237,184,42,0.04)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          BACKEND · FULLSTACK · DEVELOPER
        </span>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="reveal">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            06 — Why work with me
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#FAF7F2',
              marginBottom: '4rem',
            }}
          >
            Somewhere between<br />
            <em style={{ color: '#EDB82A', fontStyle: 'italic', fontWeight: 400 }}>logic and creativity.</em>
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
            {POINTS.map((p, i) => (
              <div
                key={p.num}
                className="reveal p-10 lg:p-12"
                style={{ background: '#1C1B18', transitionDelay: `${i * 0.1}s` }}
              >
                <p
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#EDB82A', opacity: 0.6, marginBottom: '1.2rem', letterSpacing: '-0.01em' }}
                >
                  {p.num}
                </p>
                <h3
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1.25rem', color: '#FAF7F2', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#6A6460', lineHeight: 1.75 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
