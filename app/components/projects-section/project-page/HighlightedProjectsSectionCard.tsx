import Image from "next/image";

import { ProjectsSectionCardItem } from "../ProjectsSectionCardItem";
import { Badges } from "../../Badges/Badges";
import { ProjectsSectionLink } from "../ProjectsSectionLink";
import { HighlightedProject } from "../../../types/page-info";
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

export const HighlightedProjectsSectionCard = ({
    name,
    slug,
    shortDescription,
    imageOne,
    links,
    techTags, // This should be an array of HomePageProject objects
}: HighlightedProject) => {
    return (
        <div className="flex flex-col md:flex-row container pt-20 pb-3 md:py-20 group">
            <div className="w-full h-full mr-8">
                <Image
                    width={700}
                    height={470}
                    src="/images/photo-1481349518771-20055b2a7b24.jpg"
                    alt="Project Thumbnail"
                    className="cover drop-shadow-xl transition-all duration-300 group-hover:scale-110"
                    unoptimized
                />
            </div>

            <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <h3 className="font-inter text-primary text-sm">{name}</h3>
                <p className="font-krona text-text text-lg">
                    <PortableText value={shortDescription} />
                </p>
                <div className="flex flex-wrap gap-4 md:gap-9">
                    {links.map((links, index) => (
                        <ProjectsSectionCardItem
                            key={index}
                            icon={links.icon}
                            label={links.linkName}
                            link={links.url}
                        />
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 md:gap-3">
                    {techTags.map((techTag, index) => (
                        <Badges
                            key={index}
                            label={techTag.tech}
                            className="text-sm"
                        />
                    ))}
                </div>

                <ProjectsSectionLink href={`/projects/${slug}`} />
            </div>
        </div>
    );
};
