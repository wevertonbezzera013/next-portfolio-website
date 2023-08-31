import { getProjects } from "../../../sanity/sanity-utils";
import { ProjectIntroductionSection } from "../../components/introduction-section/project-Introduction-section/ProjectIntroductionSection";
import { ProjectPage } from "../../components/projects-section/ProjectPage";

export default async function Project() {
    const projects = await getProjects();
    return (
        <main>
            {projects.map((projectContent) => (
                <div key={projectContent._id}>
                    <ProjectIntroductionSection projects={projects} />
                    <ProjectPage projects={projects} />
                </div>
            ))}
        </main>
    );
}
