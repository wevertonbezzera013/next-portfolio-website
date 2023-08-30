import { getExperience } from "../../../sanity/sanity-utils";
import { SectionTitle } from "../section-title/SectionTitle";
import { WorkExperienceItem } from "./WorkExperienceItem";

export const WorkExperienceSection = async () => {
    const experience = await getExperience();

    return (
        <section className="items-center py-16 my-16 flex flex-col gap-16 bg-gradient-to-t from-text to-primary">
            <div className="text-white">
                <SectionTitle title="Experiences" className="text-white" />
            </div>

            <div className="flex flex-col gap-4">
                {experience.map((content) => (
                    <div key={content._id}>
                        <WorkExperienceItem
                            _id={content._id}
                            _createdAt={content._createdAt}
                            name={content.name}
                            company={content.company}
                            role={content.role}
                            startDate={content.startDate}
                            endDate={content.endDate}
                            description={content.description}
                            companyPicture={content.companyPicture}
                            companyURL={content.companyURL}
                            skills={content.skills}
                            techTags={content.techTags}
                            year={content.year}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
