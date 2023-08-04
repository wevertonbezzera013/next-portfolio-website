import Image from "next/image";

import "./../../../public/images/photo-1481349518771-20055b2a7b24.jpg";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { Badges } from "../Badges/Badges";
import { ProjectsSectionLink } from "./ProjectsSectionLink";

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

export const ProjectsSectionCard = () => {
    return (
        <div className="flex flex-col md:flex-row group">
            <div className="w-full h-full mr-3">
                <Image
                    width={420}
                    height={304}
                    src="/images/photo-1481349518771-20055b2a7b24.jpg"
                    alt="Project Thumbnail"
                    unoptimized
                    className="cover drop-shadow-xl transition-all duration-300 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <h3 className="font-inter text-primary text-sm">LOREM IPSUM</h3>
                <p className="font-krona text-text text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                </p>
                <div className="flex gap-4 md:gap-9">
                    {PROJECT_SECTION_CARD_ITEMS.map((item) => (
                        <ProjectsSectionCardItem
                            icon={item.icon}
                            key={item.label}
                            label={item.label}
                            link={item.link}
                        />
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 md:gap-3">
                    <Badges label="javascript" className="text-sm" />
                    <Badges label="javascript" className="text-sm" />
                    <Badges label="javascript" className="text-sm" />
                    <Badges label="javascript" className="text-sm" />
                </div>

                <ProjectsSectionLink href="/projects/book-wise" />
            </div>
        </div>
    );
};
