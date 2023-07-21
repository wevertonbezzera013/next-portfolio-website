import HeroSection from "./components/hero-section/HeroSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <Skills />
            <ProjectsSection />
        </main>
    );
}
