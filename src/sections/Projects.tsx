import { useState } from 'react';
import { FrogFace } from '../components/Frog';
import { SunflowerDecor } from '../components/Sunflower';
import { useReveal } from '../hooks/useReveal';

export type Project = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  tech: string[];
  challenge: string;
  outcome: string;
  accentColor: string;
  bgColor: string;
  hasFrog?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'crm',
    num: '01',
    name: 'Lead Management CRM (SaaS)',
    tagline: 'Multi-tenant SaaS',
    description: 'Architected and deployed a multi-tenant SaaS platform using Next.js, Node.js and MongoDB to manage the end-to-end lead lifecycle — used daily across multiple client organisations.',
    problem: 'Manual lead tracking across spreadsheets and WhatsApp messages caused missed follow-ups, unclear ownership, and zero visibility into team performance.',
    role: 'Backend lead & full-stack contributor. Designed the data architecture, built the API layer, JWT + RBAC auth system, real-time tracking, and automated assignment workflows.',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'Next.js', 'MongoDB', 'Mongoose', 'JWT Auth', 'RBAC', 'WebSockets', 'CSV Ingestion'],
    challenge: 'Building a dynamic CSV ingestion engine with automated deduplication across millions of lead records while maintaining data integrity and zero downtime.',
    outcome: 'Reduced lead response time by 60% through event-driven assignment workflows. Replaced spreadsheets entirely with a production SaaS serving multiple businesses.',
    accentColor: '#EDB82A',
    bgColor: '#FDF6D6',
    hasFrog: false,
  },
  {
    id: 'lhcc',
    num: '02',
    name: 'Care Home Management System',
    tagline: 'HealthTech SaaS',
    description: 'A secure healthcare SaaS platform to manage medical, physical and mental health records — with real-time staff alerts, audit trails, record versioning and RBAC for care homes.',
    problem: 'Care providers needed a digital system to track health records, staff actions, and medication administration with complete audit trails for regulatory compliance.',
    role: 'Full-stack developer. Built the real-time alert system using WebSockets, designed complex MongoDB schemas, implemented RBAC, and built the audit/versioning infrastructure.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'WebSockets', 'JWT Auth', 'RBAC', 'Audit Logging', 'Record Versioning'],
    challenge: 'The audit trail system required complete, tamper-proof versioning of all record changes across multiple staff roles — a compliance-critical feature with real consequences if wrong.',
    outcome: 'Reduced administrative overhead by 45% through MongoDB schema optimisation. Deployed to production serving real care homes at crm.lhcogroup.co.uk.',
    accentColor: '#6DAA52',
    bgColor: '#EBF2E6',
    hasFrog: true,
  },
  {
    id: 'astro',
    num: '03',
    name: 'AstroVagmi — Astrology Platform',
    tagline: 'Automation Platform',
    description: 'A full-stack automation platform delivering personalised astrology reports to a global user base — with third-party API integration, Razorpay payments, PDF generation and Cloudinary media delivery.',
    problem: 'Generating personalised astrology reports was completely manual, inconsistent and slow. The business needed a scalable, automated system to serve thousands of users.',
    role: 'Backend developer & integration lead. Integrated external astrology APIs, built the PDF generation pipeline, implemented Razorpay payment flows, and optimised Cloudinary media delivery.',
    tech: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Razorpay', 'Cloudinary', 'PDF Generation', 'External APIs'],
    challenge: 'Integrating multiple external astrology APIs with complex birth chart calculations, timezone edge cases from location-based data, and real-time payment verification before report delivery.',
    outcome: 'Reduced image payload sizes by 70% via Cloudinary optimisation. Fully automated report generation removing all manual work — live at astrovagmi.com.',
    accentColor: '#8882C0',
    bgColor: '#EEEAF8',
    hasFrog: true,
  },
];

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="reveal proj-card rounded-sm overflow-hidden group"
      style={{ border: '1px solid rgba(180,174,164,0.3)', background: '#FAF7F2', cursor: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual area */}
      <div
        className="relative overflow-hidden"
        style={{ height: '260px', background: project.bgColor }}
      >
        <div className="proj-img absolute inset-0 flex items-center justify-center">
          <SunflowerDecor
            size={120}
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-60"
            spin={hovered}
          />
        </div>

        {/* Number */}
        <div className="absolute top-5 left-6">
          <span
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '4rem',
              fontWeight: 900,
              color: project.accentColor,
              opacity: 0.15,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {project.num}
          </span>
        </div>

        {/* Frog easter egg — only on certain cards */}
        {project.hasFrog && hovered && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 animate-[fade-up_0.3s_ease_both]">
            <FrogFace expression="surprised" size={28} />
            <span
              className="px-2 py-1 rounded text-xs"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: 'rgba(255,255,255,0.85)',
                color: '#3A3835',
                fontSize: '0.68rem',
              }}
            >
              Something broke? 🐸
            </span>
          </div>
        )}

        {/* Hover line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
          style={{ width: hovered ? '100%' : '0%', background: project.accentColor }}
        />
      </div>

      {/* Info */}
      <div className="p-7 lg:p-8">
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: project.accentColor,
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}
        >
          {project.tagline}
        </p>

        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: '#1C1B18',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '0.85rem',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}
        >
          {project.name}
        </h3>

        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#7A746A', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        {/* Challenge callout */}
        <div
          className="p-4 rounded-sm mb-5"
          style={{ background: '#F5EFE3', borderLeft: `2px solid ${project.accentColor}` }}
        >
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', color: '#9A9490', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            Key challenge
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.82rem', color: '#3A3835', lineHeight: 1.65 }}>
            {project.challenge}
          </p>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="skill-chip" style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}>{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="skill-chip" style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}>+{project.tech.length - 5}</span>
          )}
        </div>

        <button
          className="inline-flex items-center gap-2 group/link"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '0.82rem', color: project.accentColor }}
          onClick={() => onOpen(project.id)}
        >
          View case study
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/link:translate-x-1">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface ProjectsProps {
  onOpenCase: (id: string) => void;
}

export function Projects({ onOpenCase }: ProjectsProps) {
  const ref = useReveal();

  return (
    <section id="projects" className="py-28 lg:py-36 bg-[#FAF7F2]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div ref={ref} className="reveal mb-16">
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#EDB82A', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            05 — Portfolio
          </p>
          <div className="flex items-end justify-between flex-wrap gap-6">
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
              Things I've built
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.875rem', color: '#7A746A', maxWidth: '280px', textAlign: 'right', lineHeight: 1.6 }}>
              Real products, real clients, real workflows — not toy projects.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpenCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
