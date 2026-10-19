import { FrogFace } from '../components/Frog';
import { SunflowerDecor } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

export function PersonalNote() {
  const ref = useReveal();

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: '#FDF6D6' }}>
      {/* Background sunflower */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
        <SunflowerDecor size={360} />
      </div>
      <div className="absolute -left-16 -bottom-16 opacity-[0.05] pointer-events-none">
        <SunflowerDecor size={260} />
      </div>

      {/* Organic lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M0 300 C200 180 400 380 700 260 C1000 140 1200 340 1440 220" stroke="#EDB82A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M0 420 C250 320 450 460 720 380 C990 300 1180 440 1440 360" stroke="#6DAA52" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="reveal max-w-2xl">

          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#7A5010', textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.7 }}>
            07 — A note
          </p>

          <blockquote
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#1C1B18',
              marginBottom: '2rem',
            }}
          >
            "Not everything has to be serious."
          </blockquote>

          <div className="flex items-center gap-4 mb-6">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', color: '#5A5450' }}>
              Sometimes the best response is a frog.
            </p>
            <FrogFace expression="speechless" size={40} />
          </div>

          <div className="w-16 h-px mb-6" style={{ background: '#EDB82A' }} />

          <div className="flex items-center gap-4">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', color: '#5A5450', fontStyle: 'italic' }}>
              And sometimes you just keep looking toward the light.
            </p>
            <SunflowerDecor size={40} className="flex-shrink-0 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
