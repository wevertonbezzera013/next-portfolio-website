import Image from "next/image";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { ProjectTitle } from "../section-title/ProjectTitle";
import { SectionTitle } from "../section-title/SectionTitle";

const PROJECT_PAGE_ITEMS = [
    {
        label: "Github",
        icon: "FaGithub",
        link: "",
    },
    {
        label: "Preview",
        icon: "FaLink",
        link: "",
    },
];

const PROJECT_PAGE_IMAGES = [
    {
        alt: "project image",
        img: "/images/photo-1481349518771-20055b2a7b24.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    },
];

export const ProjectPage = () => {
    return (
        <section className="container pt-12">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col container">
                    <ProjectTitle title="LOREM IPSUM" />
                    <div className="w-full h-hull aspect-w-1 aspect-h-1">
                        {PROJECT_PAGE_IMAGES.map((item) => (
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={700}
                                height={470}
                                unoptimized
                                key={item.alt}
                                className="object-cover w-full h-full"
                            />
                        ))}
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row gap-10 space-y-8">
                    <div>
                        <SectionTitle title="Project Description" />
                        {PROJECT_PAGE_IMAGES.map((item) => (
                            <p
                                className="font-krona text-text text-base md:text-lg pt-10"
                                key={item.alt}
                            >
                                {item.description}
                            </p>
                        ))}
                    </div>

                    <div className="w-full h-hull md:w-9xl md:h-96 aspect-w-1 aspect-h-1">
                        {PROJECT_PAGE_IMAGES.map((item) => (
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={700}
                                height={470}
                                unoptimized
                                key={item.alt}
                                className="object-cover w-full h-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 md:gap-9">
                    {PROJECT_PAGE_ITEMS.map((item) => (
                        <ProjectsSectionCardItem
                            icon={item.icon}
                            key={item.label}
                            label={item.label}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
