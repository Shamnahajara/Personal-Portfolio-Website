import { useState, useEffect } from 'react';
import { SunflowerMini } from './Sunflower';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250,247,242,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(180,174,164,0.25)' : '1px solid transparent',
        padding: scrolled ? '0.6rem 0' : '1.1rem 0',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 select-none"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <SunflowerMini size={scrolled ? 16 : 20} className="transition-all duration-300" />
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: scrolled ? '0.9rem' : '1rem',
              letterSpacing: '0.04em',
              color: '#1C1B18',
              transition: 'font-size 0.3s',
            }}
          >
            SHAMNA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="nav-ul"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.83rem', color: '#3A3835', letterSpacing: '0.02em' }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:hajarathu.shamna@gmail.com"
            className="btn btn-dark ml-2"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.78rem' }}
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px bg-[#1C1B18] transition-all duration-200"
              style={{
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translateY(4px)' : i === 2 ? 'rotate(-45deg) translateY(-4px)' : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-xl border-t"
          style={{ background: 'rgba(250,247,242,0.98)', borderColor: 'rgba(180,174,164,0.3)', backdropFilter: 'blur(14px)' }}
        >
          <div className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.3rem', color: '#1C1B18', textAlign: 'left', letterSpacing: '-0.01em' }}
              >
                {l.label}
              </button>
            ))}
            <a href="mailto:hajarathu.shamna@gmail.com" className="btn btn-dark mt-2 self-start">
              Hire me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
