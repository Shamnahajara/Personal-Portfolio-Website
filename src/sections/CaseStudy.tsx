import { useEffect } from 'react';
import { PROJECTS, Project } from './Projects';
import { SunflowerDecor, SunflowerMini } from '../components/Sunflower';
import { FrogFace } from '../components/Frog';

interface CaseStudyProps {
  projectId: string;
  onClose: () => void;
}

function CaseStudyContent({ project }: { project: Project }) {
  const sections = [
    { label: 'The Problem', content: project.problem },
    { label: 'My Role', content: project.role },
    { label: 'Key Challenge', content: project.challenge },
    { label: 'Outcome', content: project.outcome },
  ];

  return (
    <div className="relative">
      {/* Hero band */}
      <div
        className="relative overflow-hidden"
        style={{ background: project.bgColor, minHeight: '280px', display: 'flex', alignItems: 'center', padding: '3rem 2.5rem' }}
      >
        {/* Decorative sunflower */}
        <div className="absolute right-0 top-0 opacity-15">
          <SunflowerDecor size={220} spin />
        </div>

        {/* Organic lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 280" fill="none" aria-hidden="true">
          <path d="M-40 200 C100 140 200 220 350 160 C500 100 600 180 800 130" stroke={project.accentColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M-20 120 C120 80 220 160 400 100 C580 40 680 120 820 80" stroke={project.accentColor} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </svg>

        <div className="relative z-10 max-w-xl">
          <p
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.18em', color: project.accentColor, textTransform: 'uppercase', marginBottom: '0.75rem' }}
          >
            {project.tagline} · Case Study
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#1C1B18',
            }}
          >
            {project.name}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 lg:p-12">

        {/* Overview */}
        <div className="mb-10 pb-10 border-b" style={{ borderColor: 'rgba(180,174,164,0.25)' }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#9A9490', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Overview
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', color: '#3A3835', lineHeight: 1.8 }}>
            {project.description}
          </p>
        </div>

        {/* Detail sections */}
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          {sections.map((s) => (
            <div key={s.label} className="p-6 rounded-sm" style={{ background: '#F5EFE3', border: '1px solid rgba(180,174,164,0.3)' }}>
              <div className="flex items-center gap-2 mb-3">
                <SunflowerMini size={13} />
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#9A9490', textTransform: 'uppercase' }}>
                  {s.label}
                </p>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#3A3835', lineHeight: 1.75 }}>
                {s.content}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#9A9490', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Technology
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="skill-chip">{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="p-8 rounded-sm text-center"
          style={{ background: project.bgColor, border: `1px solid ${project.accentColor}30` }}
        >
          <p
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: '1.2rem', color: '#1C1B18', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}
          >
            Want to build something similar?
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#7A746A', marginBottom: '1.25rem' }}>
            I'm open to projects like this.
          </p>
          <a
            href="mailto:hajarathu.shamna@gmail.com?subject=Project Enquiry"
            className="btn btn-dark"
          >
            Let's talk
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        {/* Frog note — only for certain projects */}
        {project.hasFrog && (
          <div className="mt-6 flex items-center gap-3">
            <FrogFace expression="speechless" size={28} />
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#9A9490', fontStyle: 'italic' }}>
              Lessons were learned. Bugs were debugged.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function CaseStudyModal({ projectId, onClose }: CaseStudyProps) {
  const project = PROJECTS.find((p) => p.id === projectId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-start justify-center overflow-y-auto no-scroll"
      style={{ background: 'rgba(28,27,24,0.72)', backdropFilter: 'blur(6px)', padding: '2rem 1rem' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-panel relative w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl"
        style={{ background: '#FAF7F2' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(28,27,24,0.08)', color: '#1C1B18' }}
          aria-label="Close case study"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <CaseStudyContent project={project} />
      </div>
    </div>
  );
}
