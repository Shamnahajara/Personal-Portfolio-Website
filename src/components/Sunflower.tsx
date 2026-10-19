import { useEffect, useRef } from 'react';

/** Large hero sunflower — hand-drawn aesthetic with individual petal animation */
export function HeroSunflower({ className = '' }: { className?: string }) {
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.closest('svg')!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      el.style.transform = `rotate(${dx * 6}deg) translateY(${dy * 8}px)`;
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // 16 petals — slightly irregular angles for hand-drawn feel
  const petalAngles = [0, 22, 45, 67, 90, 112, 135, 157, 180, 203, 225, 247, 270, 292, 315, 337];
  const petalColors = ['#F5C842', '#EDB82A', '#F5C842', '#E8B020', '#F5C842', '#EDB82A', '#F5C842', '#E8B020',
    '#F5C842', '#EDB82A', '#F5C842', '#E8B020', '#F5C842', '#EDB82A', '#F5C842', '#E8B020'];

  return (
    <svg
      viewBox="0 0 340 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Organic background lines */}
      <path d="M20 320 C60 280 40 240 80 200 C120 160 100 120 140 80" stroke="#EDB82A" strokeWidth="1" opacity="0.15" strokeLinecap="round" className="organic-path" />
      <path d="M280 340 C260 300 290 260 270 220 C250 180 280 140 260 100" stroke="#5A7A4A" strokeWidth="0.8" opacity="0.1" strokeLinecap="round" className="organic-path" />

      {/* Stem — drawn with animation */}
      <path
        d="M170 370 C168 340 172 310 169 280 C167 255 170 235 170 210"
        stroke="#5A7A4A"
        strokeWidth="5"
        strokeLinecap="round"
        className="stem-path"
      />
      {/* Leaf left */}
      <path
        d="M169 300 C150 285 130 290 120 275 C132 265 155 272 169 300Z"
        fill="#6DAA52"
        opacity="0.85"
        style={{ animation: 'sf-grow 0.8s cubic-bezier(.16,1,.3,1) 1s both' }}
      />
      {/* Leaf right */}
      <path
        d="M170 335 C190 318 210 325 218 312 C208 302 187 310 170 335Z"
        fill="#7FBF63"
        opacity="0.7"
        style={{ animation: 'sf-grow 0.8s cubic-bezier(.16,1,.3,1) 1.2s both' }}
      />

      <g ref={groupRef} style={{ transition: 'transform 0.25s ease-out', transformOrigin: '170px 155px' }}>
        {/* Outer petals */}
        {petalAngles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 170 + 78 * Math.sin(rad);
          const cy = 155 - 78 * Math.cos(rad);
          // Slight random size variation for organic feel
          const rx = 10 + (i % 3) * 1.2;
          const ry = 22 + (i % 5) * 1.5;
          return (
            <ellipse
              key={`op-${i}`}
              cx={cx} cy={cy}
              rx={rx} ry={ry}
              fill={petalColors[i]}
              opacity={0.9 - (i % 4) * 0.04}
              transform={`rotate(${angle}, ${cx}, ${cy})`}
              style={{ animation: `sf-grow 0.4s cubic-bezier(.16,1,.3,1) ${0.05 + i * 0.04}s both` }}
            />
          );
        })}
        {/* Inner petals */}
        {petalAngles.map((angle, i) => {
          const shifted = angle + 11.25;
          const rad = (shifted * Math.PI) / 180;
          const cx = 170 + 63 * Math.sin(rad);
          const cy = 155 - 63 * Math.cos(rad);
          return (
            <ellipse
              key={`ip-${i}`}
              cx={cx} cy={cy}
              rx={8} ry={17}
              fill={i % 2 === 0 ? '#EDB82A' : '#F5C842'}
              opacity={0.65}
              transform={`rotate(${shifted}, ${cx}, ${cy})`}
              style={{ animation: `sf-grow 0.4s cubic-bezier(.16,1,.3,1) ${0.12 + i * 0.035}s both` }}
            />
          );
        })}

        {/* Center disk layers */}
        <circle cx="170" cy="155" r="46" fill="#2E1E04" style={{ animation: 'sf-grow 0.5s cubic-bezier(.16,1,.3,1) 0.7s both' }} />
        <circle cx="170" cy="155" r="40" fill="#3D280A" style={{ animation: 'sf-grow 0.5s cubic-bezier(.16,1,.3,1) 0.72s both' }} />
        <circle cx="170" cy="155" r="33" fill="#4A3210" style={{ animation: 'sf-grow 0.5s cubic-bezier(.16,1,.3,1) 0.75s both' }} />
        {/* Center seed pattern */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r = 20;
          return <circle key={`s1-${i}`} cx={170 + r * Math.cos(a)} cy={155 + r * Math.sin(a)} r="2.2" fill="#5C3E18" opacity="0.7" />;
        })}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          const r = 12;
          return <circle key={`s2-${i}`} cx={170 + r * Math.cos(a)} cy={155 + r * Math.sin(a)} r="1.8" fill="#6B4C1A" opacity="0.5" />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          const r = 4;
          return <circle key={`s3-${i}`} cx={170 + r * Math.cos(a)} cy={155 + r * Math.sin(a)} r="1.5" fill="#7A5A2A" opacity="0.4" />;
        })}
        {/* Highlight on center */}
        <ellipse cx="158" cy="143" rx="10" ry="7" fill="rgba(255,255,255,0.06)" />
      </g>
    </svg>
  );
}

/** Tiny inline sunflower for nav/accent use */
export function SunflowerMini({ size = 18, className = '' }: { size?: number; className?: string }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      {angles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const cx = 10 + 5.5 * Math.sin(rad);
        const cy = 10 - 5.5 * Math.cos(rad);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="2.2" ry="4" fill="#EDB82A" transform={`rotate(${a}, ${cx}, ${cy})`} opacity={0.95} />
        );
      })}
      <circle cx="10" cy="10" r="4.5" fill="#3D280A" />
      <circle cx="10" cy="10" r="3" fill="#4A3210" />
      <circle cx="8.5" cy="8.5" r="1" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

/** Medium decorative sunflower for section accents */
export function SunflowerDecor({ size = 120, className = '', spin = false }: { size?: number; className?: string; spin?: boolean }) {
  const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true"
      style={spin ? { animation: 'sf-spin 20s linear infinite' } : undefined}>
      {angles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const cx = 60 + 36 * Math.sin(rad);
        const cy = 60 - 36 * Math.cos(rad);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="7" ry="14" fill={i % 2 === 0 ? '#EDB82A' : '#F5C842'}
            opacity={i % 3 === 0 ? 0.95 : 0.8}
            transform={`rotate(${a}, ${cx}, ${cy})`} />
        );
      })}
      <circle cx="60" cy="60" r="22" fill="#2E1E04" />
      <circle cx="60" cy="60" r="18" fill="#3D280A" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return <circle key={i} cx={60 + 12 * Math.cos(a)} cy={60 + 12 * Math.sin(a)} r="2" fill="#5C3E18" opacity="0.6" />;
      })}
    </svg>
  );
}
