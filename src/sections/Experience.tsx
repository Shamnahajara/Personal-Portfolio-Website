import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const JOBS = [
  {
    id: 'i4',
    company: 'I4interface',
    role: 'Full Stack Developer',
    period: 'Dec 2023 – Present',
    location: 'Kochi, Kerala · Remote',
    summary: 'Leading end-to-end development of scalable SaaS applications — backend architecture, RESTful API design, database modelling and frontend integration — for real business clients. Transformed internal tools into commercial multi-tenant SaaS products.',
    highlights: [
      'Converted an internal Lead Management CRM into a commercial multi-tenant SaaS product deployed across multiple client organisations',
      'Optimised MongoDB queries and indexing strategies, improving API response times by approximately 20%',
      'Designed secure authentication and role-based authorisation (RBAC) systems using JWT across multiple user types',
      'Built real-time staff alert systems using WebSockets to reduce emergency response delays in a healthcare platform',
      'Engineered a dynamic CSV ingestion engine with automated deduplication, ensuring high data integrity',
      'Designed complex MongoDB schemas and validation logic, reducing administrative overhead by 45%',
      'Integrated Stripe, Razorpay, PayPal, Cloudinary, Google OAuth, Mapbox and external astrology APIs',
      'Mentored junior developers through code reviews and scalable backend architecture best practices',
    ],
    tech: ['Node.js', 'TypeScript', 'Express.js', 'Next.js', 'React', 'MongoDB', 'Mongoose', 'JWT', 'RBAC', 'WebSockets', 'REST APIs', 'AWS EC2', 'Docker', 'Nginx', 'PM2'],
  },
];

export function Experience() {
  const ref = useReveal();
  const [expanded, setExpanded] = useState<string | null>('i4');

  return (
    <section id="experience" className="py-28 lg:py-36" style={{ background: '#F5EFE3' }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            04 — Career
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1C1B18',
              marginBottom: '3.5rem',
            }}
          >
            Experience
          </h2>

          <div className="space-y-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="rounded-sm overflow-hidden"
                style={{ background: '#FAF7F2', border: '1px solid rgba(180,174,164,0.3)' }}
              >
                <button
                  className="w-full p-8 lg:p-10 flex items-start gap-6 text-left group"
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                >
                  {/* Timeline dot */}
                  <div className="relative tl-dot pl-5 flex-shrink-0 mt-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#EDB82A', boxShadow: '0 0 0 4px rgba(237,184,42,0.2)' }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1.35rem', color: '#1C1B18', letterSpacing: '-0.02em' }}
                      >
                        {job.company}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', background: '#FDF6D6', color: '#7A5010', border: '1px solid rgba(237,184,42,0.3)', letterSpacing: '0.05em' }}
                      >
                        Full-time
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', color: '#5A5450', marginBottom: '0.3rem' }}>
                      {job.role}
                    </p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#9A9490', letterSpacing: '0.06em' }}>
                      {job.period} · {job.location}
                    </p>
                  </div>

                  <div
                    className="flex-shrink-0 text-[#9A9490] mt-1.5 transition-transform duration-300"
                    style={{ transform: expanded === job.id ? 'rotate(180deg)' : 'none' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {expanded === job.id && (
                  <div
                    className="px-8 lg:px-10 pb-10 border-t"
                    style={{ borderColor: 'rgba(180,174,164,0.25)' }}
                  >
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', color: '#5A5450', lineHeight: 1.75, margin: '1.75rem 0 1.5rem' }}>
                      {job.summary}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="mt-2.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#EDB82A' }} />
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#3A3835', lineHeight: 1.7 }}>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span key={t} className="skill-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
