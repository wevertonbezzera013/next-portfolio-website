import { getHighlightedProjects, getProjects } from "../../sanity/sanity-utils";
import { IntroductionSection } from "../components/introduction-section/IntroductionSection";
import { HighlightedProjectsSectionCard } from "../components/projects-section/project-page/HighlightedProjectsSectionCard";
import { ProjectsSectionGrid } from "../components/projects-section/project-page/ProjectsSectionGrid";

export default async function Projects() {
    const projects = await getProjects();
    const highlighted = await getHighlightedProjects();
    return (
        <main>
            {projects.map((projectContent) => (
                <div key={projectContent._id}>
                    <IntroductionSection />
                    {highlighted.map((content) => (
                        <div key={content._id}>
                            <HighlightedProjectsSectionCard
                                name={content.name}
                                slug={content.slug}
                                shortDescription={content.shortDescription}
                                imageOne={content.imageOne}
                                imageTwo={content.imageTwo}
                                links={content.links}
                                description={content.description}
                                techTags={content.techTags}
                                _id={content._id}
                                linkName={content.linkName}
                                icon={content.icon}
                                url={content.url}
                            />
                        </div>
                    ))}

                    <ProjectsSectionGrid projects={projects} />
                </div>
            ))}
        </main>
    );
}
