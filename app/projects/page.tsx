import { IntroductionSection } from "../components/introduction-section/IntroductionSection";
import { HighlightedProjectsSectionCard } from "../components/projects-section/project-page/HighlightedProjectsSectionCard";
import { ProjectsSectionGrid } from "../components/projects-section/project-page/ProjectsSectionGrid";

export default function Projects() {
    return (
        <main>
            <IntroductionSection />
            <HighlightedProjectsSectionCard />
            <ProjectsSectionGrid />
        </main>
    );
}
