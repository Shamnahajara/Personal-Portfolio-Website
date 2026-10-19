import { useState } from 'react';
import { FrogFace, FrogExpression } from '../components/Frog';
import { useReveal } from '../hooks/useReveal';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Understand first',
    body: 'I like knowing why something needs to exist before deciding how to build it.',
  },
  {
    num: '02',
    title: 'Keep it practical',
    body: 'I prefer solutions that are maintainable, understandable and actually useful.',
  },
  {
    num: '03',
    title: 'Learn by building',
    body: 'New technology makes more sense to me when I can build something real with it.',
  },
  {
    num: '04',
    title: 'Keep improving',
    body: "I don't want to stay comfortable with the same stack forever.",
  },
];

const FROG_CYCLE: FrogExpression[] = ['neutral', 'confused', 'surprised', 'speechless'];

export function HowIWork() {
  const ref = useReveal();
  const [frogIdx, setFrogIdx] = useState(0);
  const [frogHovered, setFrogHovered] = useState(false);

  const cycleFrog = () => setFrogIdx((i) => (i + 1) % FROG_CYCLE.length);

  return (
    <section className="py-28 lg:py-36" style={{ background: '#1C1B18' }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal">

          {/* Header row */}
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
                02 — Working style
              </p>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#FAF7F2',
                }}
              >
                How I work
              </h2>
            </div>

            {/* Frog easter egg */}
            <button
              className="group flex flex-col items-center gap-2"
              onMouseEnter={() => setFrogHovered(true)}
              onMouseLeave={() => setFrogHovered(false)}
              onClick={cycleFrog}
              aria-label="Click to see the frog react"
            >
              <FrogFace
                expression={frogHovered ? FROG_CYCLE[frogIdx] : 'neutral'}
                size={52}
              />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: '#5A5450', letterSpacing: '0.08em', transition: 'color 0.2s' }}>
                {frogHovered ? 'click me' : '🐸'}
              </span>
            </button>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.num}
                className="p-8 lg:p-10 reveal"
                style={{
                  background: '#1C1B18',
                  transitionDelay: `${i * 0.08}s`,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: '2.8rem',
                    fontWeight: 300,
                    color: '#EDB82A',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    opacity: 0.7,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#FAF7F2',
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#7A746A', lineHeight: 1.7 }}>
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
