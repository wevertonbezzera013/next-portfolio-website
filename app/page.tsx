import HeroSection from "./components/hero-section/HeroSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";
import { WorkExperienceSection } from "./components/work-experience-section/WorkExperienceSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Skills />
            <ProjectsSection />
            <WorkExperienceSection />
        </main>
    );
}
