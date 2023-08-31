import { getExperience, getPage, getProjects } from "../sanity/sanity-utils";
import { HeroSection } from "./components/hero-section/HeroSection";
import { ProjectsSection } from "./components/projects-section/ProjectsSection";
import { Skills } from "./components/skills/Skills";
import { TestimonialsSection } from "./components/testimonials-section/TestimonialsSection";
import { WorkExperienceSection } from "./components/work-experience-section/WorkExperienceSection";

export const metadata = {
    title: "Wev_Dev",
};

export default async function Home() {
    const pageInfo = await getPage();
    const projects = await getProjects();

    return (
        <>
            <HeroSection />
            {pageInfo.map((content) => (
                <div key={content._id}>
                    <Skills tech={content.skills} />
                    {projects.map((projectContent) => (
                        <div key={projectContent._id}>
                            <ProjectsSection projects={projects} />
                        </div>
                    ))}
                    <TestimonialsSection />
                    <WorkExperienceSection />
                </div>
            ))}
        </>
    );
}
