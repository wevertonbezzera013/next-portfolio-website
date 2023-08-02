import Image from "next/image";

import { Badges } from "../../Badges/Badges";
import { ProjectsSectionLink } from "../ProjectsSectionLink";
import { ProjectsSectionCardGridItem } from "./ProjectsSectionCardGridItem";

const PROJECT_SECTION_CARD_ITEMS = [
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

export const ProjectsSectionCardGrid = () => {
    return (
        <div className="container flex flex-col px-0 md:px-10">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="/images/photo-1481349518771-20055b2a7b24.jpg"
                    alt="Project Thumbnail"
                    className="cover drop-shadow-xl"
                />
            </div>

            <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <h3 className="font-inter text-primary text-sm pt-4">
                    LOREM IPSUM
                </h3>
                <p className="font-krona text-text text-sm md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-9">
                    {PROJECT_SECTION_CARD_ITEMS.map((item) => (
                        <ProjectsSectionCardGridItem
                            icon={item.icon}
                            key={item.label}
                            label={item.label}
                            link={item.link}
                        />
                    ))}
                </div>

                <div>
                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-3">
                        <Badges
                            label="javascript"
                            className="text-[9px] md:text-sm"
                        />
                        <Badges
                            label="javascript"
                            className="text-[9px] md:text-sm"
                        />
                        <Badges
                            label="javascript"
                            className="text-[9px] md:text-sm"
                        />
                        <Badges
                            label="javascript"
                            className="text-[9px] md:text-sm"
                        />
                    </div>
                </div>

                <ProjectsSectionLink href="/projects/book-wise" />
            </div>
        </div>
    );
};