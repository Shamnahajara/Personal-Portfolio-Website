import { useEffect, useState } from 'react';
import { HeroSunflower } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const textRef = useReveal();
  const badgeRef = useReveal();

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollParallax = scrollY * 0.18;

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF7F2]">
      {/* Background grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />

      {/* Organic faint lines in background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-80 700 C200 500 400 750 700 550 C1000 350 1200 600 1600 400" stroke="#EDB82A" strokeWidth="1.5" opacity="0.1" strokeLinecap="round" fill="none" />
        <path d="M-40 450 C150 300 300 550 550 380 C800 210 1050 480 1480 300" stroke="#6DAA52" strokeWidth="1" opacity="0.08" strokeLinecap="round" fill="none" />
        <path d="M400 50 C420 200 380 350 420 500 C460 650 420 750 450 880" stroke="#EDB82A" strokeWidth="1" opacity="0.1" strokeLinecap="round" fill="none" />
      </svg>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* ── Left: Text ── */}
          <div ref={textRef} className="reveal order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-[rgba(180,174,164,0.4)] bg-[rgba(250,247,242,0.7)]">
              <span className="w-2 h-2 rounded-full bg-[#5A9A42]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.12em', color: '#5A9A42', textTransform: 'uppercase' }}>
                Available for hire
              </span>
            </div>

            {/* Main headline */}
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 800,
                fontSize: 'clamp(3.2rem, 7vw, 5.8rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: '#1C1B18',
                marginBottom: '1.5rem',
              }}
            >
              Hi, I'm<br />
              <span style={{ color: '#EDB82A', fontStyle: 'italic' }}>Shamna.</span>
            </h1>

            <p
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                fontWeight: 400,
                color: '#3A3835',
                lineHeight: 1.45,
                marginBottom: '1rem',
                maxWidth: '540px',
              }}
            >
              Backend-focused full-stack engineer building scalable SaaS products that real people use every day.
            </p>

            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem', color: '#7A746A', lineHeight: 1.75, maxWidth: '500px', marginBottom: '2.5rem' }}>
              3 years shipping production systems with Node.js, TypeScript, Next.js, MongoDB and React —
              from multi-tenant architectures and REST APIs to full SaaS products used by 1,000+ users.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button className="btn btn-dark" onClick={() => scrollTo('projects')}>
                View my work
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
                Let's talk
              </button>
            </div>

            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#9A9490', letterSpacing: '0.06em' }}>
              Currently open to full-time & freelance opportunities —{' '}
              <span style={{ color: '#EDB82A' }}>ready to build.</span>
            </p>
          </div>

          {/* ── Right: Sunflower ── */}
          <div
            className="order-1 lg:order-2 relative flex items-center justify-center"
            style={{ minHeight: '380px' }}
          >
            {/* Glow circle */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '420px', height: '420px',
                background: 'radial-gradient(circle, rgba(237,184,42,0.18) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: `translate(-50%, calc(-50% + ${-scrollParallax * 0.3}px))`,
              }}
            />
            <div
              ref={badgeRef as React.RefObject<HTMLDivElement>}
              className="reveal"
              style={{ transform: `translateY(${-scrollParallax}px)`, transition: 'transform 0.1s linear' }}
            >
              <HeroSunflower className="w-full max-w-[440px] lg:max-w-none drop-shadow-lg" />
            </div>

            {/* Floating tech pill */}
            <div
              className="absolute bottom-12 -left-4 hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#FAF7F2] border border-[rgba(180,174,164,0.4)] shadow-sm"
              style={{ animation: 'sf-bob 3.5s ease-in-out infinite 0.5s' }}
            >
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#3A3835' }}>
                Node.js · Next.js · MongoDB
              </span>
            </div>
            <div
              className="absolute top-10 -right-2 hidden lg:flex items-center gap-2 px-4 py-2 rounded-sm bg-[#FDF6D6] border border-[rgba(237,184,42,0.35)] shadow-sm"
              style={{ animation: 'sf-bob 4s ease-in-out infinite 1.2s' }}
            >
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#5C3E18' }}>
                3 yrs · 1,000+ users served
              </span>
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="hidden lg:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', color: '#7A746A', textTransform: 'uppercase' }}>Scroll</span>
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, #7A746A, transparent)', animation: 'sf-bob 2s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  );
}
