import { ProjectIntroductionSection } from "@/app/components/introduction-section/project-Introduction-section/ProjectIntroductionSection";
import { ProjectPage } from "@/app/components/projects-section/ProjectPage";

export default function Project() {
    return (
        <main>
            <ProjectIntroductionSection />
            <ProjectPage />
        </main>
    );
}
