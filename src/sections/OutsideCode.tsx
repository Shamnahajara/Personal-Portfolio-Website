import { useState } from 'react';
import { FrogFace, FrogExpression } from '../components/Frog';
import { SunflowerDecor } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

const INTERESTS = [
  { emoji: '🤖', label: 'AI agents & automation', sub: 'Building and breaking things after hours' },
  { emoji: '☕', label: 'Chai and long debugging sessions', sub: 'Somehow always related' },
  { emoji: '🌻', label: 'Sunflowers', sub: 'Not just the icon — the real ones too' },
  { emoji: '🏃', label: 'Running & fitness', sub: 'Best way to reset the brain' },
  { emoji: '📷', label: 'Photography', sub: 'Visual storytelling on slow weekends' },
  { emoji: '🌊', label: 'Kerala backwaters', sub: 'Home, and the best reset button' },
];

const FROG_MAP: Record<number, FrogExpression> = { 0: 'surprised', 1: 'neutral', 2: 'confused', 3: 'speechless' };

export function OutsideCode() {
  const ref = useReveal();
  const [activeEmoji, setActiveEmoji] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            10 — The person
          </p>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            <div>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#1C1B18',
                  marginBottom: '1.25rem',
                }}
              >
                Outside<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>the code</em>
              </h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: '#7A746A', lineHeight: 1.8, maxWidth: '420px', marginBottom: '2.5rem' }}>
                There's a whole person behind the pull requests. Someone who genuinely loves the craft,
                obsesses over interesting tech after hours, can't resist chai during a debugging session,
                and occasionally insists that sunflowers fix most problems.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {INTERESTS.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-sm transition-colors"
                    style={{ background: '#F5EFE3', border: '1px solid rgba(180,174,164,0.3)', cursor: 'default' }}
                    onMouseEnter={() => setActiveEmoji(i)}
                    onMouseLeave={() => setActiveEmoji(null)}
                  >
                    <span className="text-xl mt-0.5">{item.emoji}</span>
                    <div>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.875rem', color: '#1C1B18' }}>{item.label}</p>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: '#9A9490' }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="flex flex-col items-center gap-8 pt-4">
              <SunflowerDecor size={160} className="opacity-80" />
              <div className="text-center">
                <FrogFace
                  expression={activeEmoji !== null ? (FROG_MAP[activeEmoji % 4] ?? 'neutral') : 'neutral'}
                  size={60}
                  className="mx-auto mb-2"
                />
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: '#9A9490', letterSpacing: '0.08em' }}>
                  {activeEmoji !== null ? 'hover reactions engaged' : 'hover an interest'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
