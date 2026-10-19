import { FrogFace } from '../components/Frog';
import { SunflowerMini } from '../components/Sunflower';

export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="py-10 border-t"
      style={{ background: '#FAF7F2', borderColor: 'rgba(180,174,164,0.3)' }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <SunflowerMini size={16} />
              <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '0.9rem', color: '#1C1B18', letterSpacing: '-0.01em' }}>SHAMNA</span>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: '#9A9490', fontStyle: 'italic', marginBottom: '0.3rem' }}>
              Built with curiosity, too much debugging, and a little sunflower energy. 🌻
            </p>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#B4AEA4', letterSpacing: '0.06em' }}>
              © 2026 Hajarathu Shamna
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { label: 'About', id: 'about' },
              { label: 'Work', id: 'work' },
              { label: 'Projects', id: 'projects' },
              { label: 'Contact', id: 'contact' },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.id)}
                className="nav-ul"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', color: '#7A746A', letterSpacing: '0.04em' }}
              >
                {l.label}
              </button>
            ))}
            <FrogFace expression="neutral" size={28} />
          </div>
        </div>
      </div>
    </footer>
  );
}
