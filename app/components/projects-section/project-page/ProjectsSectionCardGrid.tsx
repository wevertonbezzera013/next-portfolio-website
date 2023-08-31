import Image from "next/image";

import { Badges } from "../../Badges/Badges";
import { ProjectsSectionLink } from "../ProjectsSectionLink";
import { ProjectsSectionCardGridItem } from "./ProjectsSectionCardGridItem";
import { HomePageProject } from "../../../types/page-info";
import { PortableText } from "@portabletext/react";

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

export const ProjectsSectionCardGrid = ({
    name,
    slug,
    shortDescription,
    imageOne,
    links,
    techTags,
}: HomePageProject) => {
    return (
        <div className="px-6 pb-6 flex flex-col md:px-10 group">
            <div className="w-full h-full">
                <a href={`projects/${slug}`}>
                    <Image
                        width={420}
                        height={304}
                        src={imageOne.url}
                        alt="Project Thumbnail"
                        loading="eager"
                        className="cover drop-shadow-xl transition-all duration-300 md:group-hover:scale-90"
                    />
                </a>
            </div>

            <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <h3 className="font-inter text-primary text-sm pt-4">{name}</h3>
                <p className="font-krona text-text text-sm md:text-lg">
                    <PortableText value={shortDescription} />
                </p>
                <div className="flex flex-wrap gap-4 md:gap-9">
                    {links.map((links, index) => (
                        <ProjectsSectionCardGridItem
                            key={index}
                            icon={links.icon}
                            label={links.linkName}
                            link={links.url}
                        />
                    ))}
                </div>

                <div>
                    <div className="flex flex-wrap gap-4 md:gap-3">
                        {techTags.map((techTag, index) => (
                            <Badges
                                key={index}
                                label={techTag.tech}
                                className="text-sm"
                            />
                        ))}
                    </div>
                </div>

                <ProjectsSectionLink href={`/projects/${slug}`} />
            </div>
        </div>
    );
};
