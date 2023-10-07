import { getProjects } from "../../../sanity/sanity-utils";
import { ProjectIntroductionSection } from "../../components/introduction-section/project-Introduction-section/ProjectIntroductionSection";
import { ProjectPage } from "../../components/projects-section/ProjectPage";

export const metadata = async () => {
    const projects = await getProjects();
    return {
        title: projects[0].name,
        description: projects[0].description,
    };
};

export default async function Project() {
    const projects = await getProjects();
    return (
        <main>
            <ProjectIntroductionSection projects={projects} />
            <ProjectPage projects={projects} />
        </main>
    );
}
