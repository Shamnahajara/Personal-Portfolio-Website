import { SunflowerMini } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

const CATS = [
  {
    label: 'Backend',
    color: '#EDB82A',
    skills: ['Node.js', 'Express.js', 'TypeScript', 'REST APIs', 'JWT Auth', 'RBAC', 'WebSockets', 'Middleware', 'API Security'],
  },
  {
    label: 'Frontend',
    color: '#6DAA52',
    skills: ['Next.js', 'React', 'Redux Toolkit', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Database',
    color: '#C8882A',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Aggregation Pipelines', 'Indexing', 'Query Optimisation'],
  },
  {
    label: 'DevOps & Infra',
    color: '#8882C0',
    skills: ['AWS EC2', 'Nginx', 'PM2', 'Docker', 'CI/CD', 'Vercel', 'Git & GitHub', 'Environment Config'],
  },
  {
    label: 'Integrations',
    color: '#5A9A42',
    skills: ['Stripe', 'Razorpay', 'PayPal', 'Cloudinary', 'Google OAuth', 'NextAuth', 'Firebase Auth', 'Mapbox', 'Multer'],
  },
];

const EXPLORING = ['Redis', 'BullMQ', 'Microservices', 'System Design', 'AI Agents', 'MCP', 'Fastify'];

export function Skills() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const exploreRef = useReveal();

  return (
    <section id="work" className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headRef} className="reveal mb-16">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            03 — Capabilities
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1C1B18',
            }}
          >
            What I build with
          </h2>
        </div>

        {/* Skill grid */}
        <div ref={gridRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CATS.map((cat, ci) => (
            <div key={cat.label} className="reveal" style={{ transitionDelay: `${ci * 0.08}s` }}>
              <div className="flex items-center gap-2 mb-5 pb-4 border-b" style={{ borderColor: 'rgba(180,174,164,0.3)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '0.95rem', color: '#1C1B18', letterSpacing: '-0.01em' }}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Exploring */}
        <div
          ref={exploreRef}
          className="reveal p-8 lg:p-10 rounded-sm"
          style={{ background: '#FDF6D6', border: '1px solid rgba(237,184,42,0.3)' }}
        >
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <SunflowerMini size={18} />
            <span
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1rem', color: '#1C1B18', letterSpacing: '-0.01em' }}
            >
              Currently exploring
            </span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: '#7A746A', fontStyle: 'italic' }}>
              — expanding the stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {EXPLORING.map((s) => (
              <span
                key={s}
                className="skill-chip"
                style={{ background: 'white', borderColor: 'rgba(237,184,42,0.4)', color: '#5C3E18' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
