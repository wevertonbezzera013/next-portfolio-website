"use client";
import Image from "next/image";

import "./../../../public/images/photo-1481349518771-20055b2a7b24.jpg";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { Badges } from "../Badges/Badges";
import { ProjectsSectionLink } from "./ProjectsSectionLink";
import { HomePageProject } from "../../types/page-info";
import { PortableText } from "@portabletext/react";

export const ProjectsSectionCard = ({
    name,
    slug,
    shortDescription,
    imageOne,
    links,
    techTags,
}: HomePageProject) => {
    return (
        <div className="flex flex-col md:flex-row group">
            <div className="w-full h-full mr-10">
                <a href={slug}>
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
                <h3 className="font-inter text-primary text-sm uppercase">
                    {name}
                </h3>
                <p className="font-krona text-text text-xl">
                    <PortableText value={shortDescription} />
                </p>
                <div className="flex gap-4 md:gap-9">
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

                <ProjectsSectionLink href={slug} />
            </div>
        </div>
    );
};
