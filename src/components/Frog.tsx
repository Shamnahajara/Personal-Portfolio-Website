/** Minimal, tasteful frog face SVG with expression variants */
export type FrogExpression = 'neutral' | 'surprised' | 'confused' | 'speechless';

interface FrogProps {
  expression?: FrogExpression;
  size?: number;
  className?: string;
  label?: string;
}

export function FrogFace({ expression = 'neutral', size = 40, className = '', label }: FrogProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={label ?? `${expression} frog`}
      role="img"
    >
      {/* Body shadow */}
      <ellipse cx="32" cy="56" rx="20" ry="5" fill="rgba(90,122,74,0.12)" />
      {/* Body */}
      <ellipse cx="32" cy="44" rx="20" ry="16" fill="#5A9A42" />
      {/* Head */}
      <ellipse cx="32" cy="30" rx="22" ry="18" fill="#65B04C" />
      {/* Head highlight */}
      <ellipse cx="32" cy="24" rx="14" ry="8" fill="rgba(130,200,90,0.2)" />

      {/* Eye bumps */}
      <circle cx="20" cy="20" r="9" fill="#65B04C" />
      <circle cx="44" cy="20" r="9" fill="#65B04C" />

      {/* Eyes by expression */}
      {expression === 'neutral' && (
        <>
          <circle cx="20" cy="20" r="6" fill="#2A4520" />
          <circle cx="44" cy="20" r="6" fill="#2A4520" />
          <circle cx="20" cy="20" r="3.5" fill="#0d1a0a" className="frog-eye" />
          <circle cx="44" cy="20" r="3.5" fill="#0d1a0a" className="frog-eye" />
          <circle cx="21.5" cy="18.5" r="1.2" fill="rgba(255,255,255,0.8)" />
          <circle cx="45.5" cy="18.5" r="1.2" fill="rgba(255,255,255,0.8)" />
        </>
      )}
      {expression === 'surprised' && (
        <>
          <circle cx="20" cy="19" r="7.5" fill="#2A4520" />
          <circle cx="44" cy="19" r="7.5" fill="#2A4520" />
          <circle cx="20" cy="19" r="5" fill="#0d1a0a" />
          <circle cx="44" cy="19" r="5" fill="#0d1a0a" />
          <circle cx="22" cy="17" r="1.8" fill="rgba(255,255,255,0.9)" />
          <circle cx="46" cy="17" r="1.8" fill="rgba(255,255,255,0.9)" />
        </>
      )}
      {expression === 'confused' && (
        <>
          <circle cx="20" cy="21" r="6" fill="#2A4520" />
          <circle cx="44" cy="18" r="6" fill="#2A4520" />
          <circle cx="20" cy="22" r="3.5" fill="#0d1a0a" />
          <circle cx="44" cy="17" r="3.5" fill="#0d1a0a" />
          <circle cx="21.5" cy="20.5" r="1.2" fill="rgba(255,255,255,0.8)" />
          <circle cx="45.5" cy="15.5" r="1.2" fill="rgba(255,255,255,0.8)" />
          {/* Eyebrow */}
          <path d="M40 11 Q47 9 51 13" stroke="#2A4520" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </>
      )}
      {expression === 'speechless' && (
        <>
          <path d="M14 22 Q20 16 26 22" stroke="#2A4520" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M38 22 Q44 16 50 22" stroke="#2A4520" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#2A4520" />
          <circle cx="44" cy="20" r="3" fill="#2A4520" />
        </>
      )}

      {/* Nostrils */}
      <circle cx="29" cy="33" r="1.5" fill="rgba(42,69,32,0.5)" />
      <circle cx="35" cy="33" r="1.5" fill="rgba(42,69,32,0.5)" />

      {/* Mouth by expression */}
      {expression === 'neutral' && (
        <path d="M24 41 Q32 44 40 41" stroke="#2A4520" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {expression === 'surprised' && (
        <ellipse cx="32" cy="42" rx="5" ry="4" fill="#2A4520" />
      )}
      {expression === 'confused' && (
        <path d="M26 43 Q32 40 38 43" stroke="#2A4520" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {expression === 'speechless' && (
        <rect x="26" y="40" width="12" height="3" rx="1.5" fill="#2A4520" />
      )}

      {/* Belly spot */}
      <ellipse cx="32" cy="50" rx="12" ry="7" fill="rgba(155,210,120,0.25)" />
    </svg>
  );
}
