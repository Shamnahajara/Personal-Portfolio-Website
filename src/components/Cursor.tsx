import { useEffect, useRef } from 'react';
import { SunflowerMini } from './Sunflower';

/** Custom cursor: small circle + trailing sunflower indicator */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
      if (ringRef.current) {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2.5 h-2.5 rounded-full bg-[#EDB82A]"
        style={{ transition: 'background 0.15s' }}
      />
      {/* Outer ring with sunflower */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-10 h-10 flex items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full border border-[rgba(237,184,42,0.35)] flex items-center justify-center">
          <SunflowerMini size={12} />
        </div>
      </div>
    </>
  );
}
