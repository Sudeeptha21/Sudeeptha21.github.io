import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProjectsSection,
  SectionShell,
  SkillsSection,
  TopNav,
} from "../components/sections";
import { portfolioData } from "../data/portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <TopNav links={portfolioData.navLinks} />
      <HeroSection hero={portfolioData.hero} stats={portfolioData.stats} />
      <SectionShell>
        <AboutSection about={portfolioData.about} strengths={portfolioData.strengths} />
        <ProjectsSection projects={portfolioData.projects} />
        <SkillsSection skillGroups={portfolioData.skillGroups} />
        <ExperienceSection experience={portfolioData.experience} education={portfolioData.education} />
        <ContactSection contact={portfolioData.contact} />
      </SectionShell>
      <Footer name={portfolioData.hero.name} />
    </main>
  );
}
