import { HomePageProject } from "../../../types/page-info";
import { Badges } from "../../Badges/Badges";
import { SectionTitle } from "../../section-title/SectionTitle";
import { ProjectIntroductionDescription } from "./ProjectIntroductionDescription";

export const ProjectIntroductionSection = ({
    projects,
}: {
    projects: HomePageProject;
}) => {
    return (
        <section className="items-center text-white py-52 flex flex-col bg-gradient-to-t from-text to-primary">
            <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[340px] lg:w-[430px] lg:h-[406px] border-[1px] lg:border-[3px] border-newBlue opacity-50"></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[340px] lg:w-[430px] lg:h-[406px] border-[1px] lg:border-[3px] border-newBlue opacity-50"></div>
                <div className="relative">
                    <div className="items-center text-center flex flex-col container gap-8">
                        <SectionTitle title={projects.name} />
                        <ProjectIntroductionDescription
                            description={projects.shortDescription}
                        />

                        <div className="container ">
                            <div className="flex flex-wrap place-content-center gap-4 md:gap-3">
                                {projects.techTags.map((techTag) => (
                                    <Badges
                                        key={techTag._id}
                                        label={techTag.tech}
                                        className="text-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
