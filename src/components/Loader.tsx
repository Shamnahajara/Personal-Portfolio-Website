import { useEffect } from 'react';
import { FrogFace } from './Frog';

export function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF7F2]"
      style={{ animation: 'loader-out 2.4s ease forwards' }}
    >
      {/* Frog */}
      <div style={{ animation: 'sf-bob 1.2s ease-in-out infinite' }}>
        <FrogFace expression="speechless" size={72} />
      </div>

      <p
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: '1.35rem',
          color: '#1C1B18',
          marginTop: '1.5rem',
          animation: 'fade-up 0.7s cubic-bezier(.16,1,.3,1) 0.4s both',
          letterSpacing: '-0.01em',
        }}
      >
        Looking for something?
      </p>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.68rem',
          color: '#9A9490',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginTop: '0.75rem',
          animation: 'fade-up 0.7s cubic-bezier(.16,1,.3,1) 0.8s both',
        }}
      >
        Loading Shamna's portfolio…
      </p>

      {/* Progress bar */}
      <div
        className="mt-8 w-24 h-px bg-[#E5DDD0] rounded overflow-hidden"
      >
        <div
          className="h-full bg-[#EDB82A] rounded"
          style={{ animation: 'reveal 2s ease forwards', animationDelay: '0.2s' }}
        />
      </div>
    </div>
  );
}
