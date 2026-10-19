import { SunflowerMini } from '../components/Sunflower';

const TECHS = [
  'Node.js', '·', 'TypeScript', '·', 'Express.js', '·', 'Next.js', '·', 'React', '·',
  'MongoDB', '·', 'Mongoose', '·', 'PostgreSQL', '·', 'MySQL', '·', 'REST APIs', '·',
  'JWT Auth', '·', 'RBAC', '·', 'WebSockets', '·', 'AWS EC2', '·', 'Docker', '·', 'Nginx', '·',
  'Stripe', '·', 'Razorpay', '·', 'Cloudinary', '·', 'Tailwind CSS', '·', 'Redux Toolkit', '·',
  'Node.js', '·', 'TypeScript', '·', 'Express.js', '·', 'Next.js', '·', 'React', '·',
  'MongoDB', '·', 'Mongoose', '·', 'PostgreSQL', '·', 'MySQL', '·', 'REST APIs', '·',
  'JWT Auth', '·', 'RBAC', '·', 'WebSockets', '·', 'AWS EC2', '·', 'Docker', '·', 'Nginx', '·',
  'Stripe', '·', 'Razorpay', '·', 'Cloudinary', '·', 'Tailwind CSS', '·', 'Redux Toolkit', '·',
];

export function TechMarquee() {
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: 'rgba(180,174,164,0.3)', background: '#F5EFE3' }}
    >
      <div className="marquee-track flex items-center gap-5 whitespace-nowrap" style={{ width: 'max-content' }}>
        {TECHS.map((t, i) => (
          t === '·'
            ? <SunflowerMini key={i} size={12} className="opacity-70 flex-shrink-0" />
            : <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', color: '#5A5450', textTransform: 'uppercase', flexShrink: 0 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
