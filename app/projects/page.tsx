import { getProjects } from "../../sanity/sanity-utils";
import { IntroductionSection } from "../components/introduction-section/IntroductionSection";
import { ProjectsSectionGrid } from "../components/projects-section/project-page/ProjectsSectionGrid";

export const metadata = {
    title: "Projects",
};

export default async function Projects() {
    const projects = await getProjects();
    return (
        <main>
            <IntroductionSection />
            <ProjectsSectionGrid projects={projects} />
        </main>
    );
}
