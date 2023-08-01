import { SectionTitle } from "../section-title/SectionTitle";
import { WorkExperienceItem } from "./WorkExperienceItem";

export const WorkExperienceSection = () => {
    return (
        <section className="items-center py-16 my-16 flex flex-col gap-16 bg-gradient-to-t from-text to-primary">
            <div className="text-white">
                <SectionTitle title="Experiences" className="text-white" />
            </div>

            <div className="flex flex-col gap-4">
                <WorkExperienceItem />
                <WorkExperienceItem />
                <WorkExperienceItem />
            </div>
        </section>
    );
};
