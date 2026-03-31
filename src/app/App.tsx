import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificateAccordion } from './components/ui/certificate-accordion';
import { BadgeSection } from './components/BadgeSection';
import { TechStackList } from './components/TechStackList';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      
      <main className="pt-0">
        {/* 1. HERO - First impression */}
        <div id="home">
          <HeroSection />
        </div>
        
        {/* 2. TECH STACK - What I know */}
        <div id="tech">
          <TechStackList />
        </div>
        
        {/* 3. PROJECTS - What I've built */}
        <div id="projects">
          <ProjectsSection />
        </div>
        
        {/* 4. CERTIFICATES - Proof of skills */}
        <div id="certificates">
          <CertificateAccordion />
        </div>
        
        {/* 5. BADGES - Additional recognition */}
        <div id="badges">
          <BadgeSection />
        </div>
        
        {/* 6. CONTACT - Get in touch */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}