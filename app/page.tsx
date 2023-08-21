import { getPage } from "../sanity/sanity-utils";
import { HeroSection } from "./components/hero-section/HeroSection";

import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";
import { TestimonialsSection } from "./components/testimonials-section/TestimonialsSection";
import { WorkExperienceSection } from "./components/work-experience-section/WorkExperienceSection";

export const metadata = {
    title: "Home",
};

export default async function Home() {
    const projects = await getPage();

    return (
        <>
            <HeroSection />
            {projects.map((HeroSection) => (
                <div key={HeroSection._id}>
                    <Skills tech={HeroSection.skills} />
                    <ProjectsSection />
                    <TestimonialsSection />
                    <WorkExperienceSection />
                </div>
            ))}
        </>
    );
}
