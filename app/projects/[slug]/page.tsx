import { getProjectPage, getProjects } from "../../../sanity/sanity-utils";
import { ProjectIntroductionSection } from "../../components/introduction-section/project-Introduction-section/ProjectIntroductionSection";
import { ProjectPage } from "../../components/projects-section/ProjectPage";

type Props = {
    params: { slug: string };
};

export const metadata = async () => {
    const projects = await getProjects();
    return {
        title: projects[0].name,
        description: projects[0].description,
    };
};

export default async function Project({ params }: Props) {
    const slug = params.slug;
    const projects = await getProjectPage(slug);
    return (
        <main>
            <ProjectIntroductionSection projects={projects} />
            <ProjectPage projects={projects} />
        </main>
    );
}
