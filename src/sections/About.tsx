import { SunflowerDecor } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

const TAGS = [
  { emoji: '⚙️', text: 'Backend Engineer' },
  { emoji: '🔍', text: 'Problem solver' },
  { emoji: '📚', text: 'Always learning' },
  { emoji: '☕', text: 'Chai over coffee' },
  { emoji: '🌻', text: 'Sunflower enthusiast' },
  { emoji: '🐸', text: 'Professional frog reactor' },
  { emoji: '🏹', text: 'Kerala-based' },
  { emoji: '🌍', text: 'Remote-ready' },
];

export function About() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative sunflower — far right */}
      <div className="absolute -right-12 top-12 opacity-[0.07] pointer-events-none">
        <SunflowerDecor size={280} />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 lg:gap-24">

          {/* ── Left: label + number ── */}
          <div ref={headRef} className="reveal">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              01 — About
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 700,
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#1C1B18',
              }}
            >
              Behind<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>the code</em>
            </h2>

            {/* Accent line */}
            <div className="mt-8 mb-10 w-12 h-0.5 bg-[#EDB82A]" />

            <SunflowerDecor size={90} className="opacity-60" />
          </div>

          {/* ── Right: content ── */}
          <div ref={bodyRef} className="reveal reveal-delay-2">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#3A3835', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              I'm a backend-focused full-stack engineer with 3 years of experience building and deploying
              scalable SaaS applications — multi-tenant CRMs, healthcare platforms, automation tools
              and production systems used by real businesses every day.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#3A3835', lineHeight: 1.85, marginBottom: '1.4rem' }}>
              My comfort zone is the backend: RESTful APIs, JWT authentication, role-based access control,
              MongoDB schema design, query optimisation, and the complex business logic that makes an interface
              actually useful. I've also grown into confident full-stack work — Next.js, React, Tailwind — because
              good products need both sides done right.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#3A3835', lineHeight: 1.85, marginBottom: '2.4rem' }}>
              Based in Kochi, Kerala — I work well remotely, communicate clearly, and genuinely care
              about the products I help build. Outside of terminals and pull requests, I'm probably
              obsessing over something new to learn, or just looking at sunflowers.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t.text}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.8rem',
                    borderColor: 'rgba(180,174,164,0.5)',
                    background: '#F5EFE3',
                    color: '#3A3835',
                  }}
                >
                  <span>{t.emoji}</span> {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
