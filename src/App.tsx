import { useState, useEffect } from 'react';

import { Loader } from './components/Loader';
import { Nav } from './components/Nav';
import { CustomCursor } from './components/Cursor';

import { Hero } from './sections/Hero';
import { TechMarquee } from './sections/TechMarquee';
import { About } from './sections/About';
import { HowIWork } from './sections/HowIWork';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { WhyMe } from './sections/WhyMe';
import { OutsideCode } from './sections/OutsideCode';
import { PersonalNote } from './sections/PersonalNote';
import { Freelance } from './sections/Freelance';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CaseStudyModal } from './sections/CaseStudy';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null);

  // Activate .reveal elements as they scroll into view
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  // Activate organic line art
  useEffect(() => {
    if (!loaded) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('drawn');
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.organic-path').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Loading screen */}
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* Main site */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease 0.1s' }}>
        <Nav />

        <main>
          <Hero />
          <TechMarquee />
          <About />
          <HowIWork />
          <Skills />
          <Experience />
          <Projects onOpenCase={(id) => setCaseStudyId(id)} />
          <WhyMe />
          <OutsideCode />
          <PersonalNote />
          <Freelance />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Case study modal */}
      {caseStudyId && (
        <CaseStudyModal
          projectId={caseStudyId}
          onClose={() => setCaseStudyId(null)}
        />
      )}
    </>
  );
}
