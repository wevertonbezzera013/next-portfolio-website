import Image from "next/image";

import "./../../../public/images/photo-1481349518771-20055b2a7b24.jpg";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { Badges } from "../Badges/Badges";
import { ProjectsSectionLink } from "./ProjectsSectionLink";
import { Project as IProject } from "../../types/projects";
import { PortableText } from "@portabletext/react";

type projectsProps = {
    projects: IProject[];
};

export const ProjectsSectionCard = ({ projects }: projectsProps) => {
    console.log("projects: ", projects);
    return (
        <div className="flex flex-col md:flex-row group">
            {projects?.map((projects: IProject) => (
                <>
                    <div className="w-full h-full mr-3">
                        <Image
                            width={420}
                            height={304}
                            src={projects.image}
                            alt="Project Thumbnail"
                            unoptimized
                            className="cover drop-shadow-xl transition-all duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-3 mt-6 md:mt-0">
                        <h3 className="font-inter text-primary text-sm">
                            {projects.name}
                        </h3>
                        <p className="font-krona text-text text-lg">
                            <PortableText value={projects?.content || []} />
                        </p>
                        <div className="flex gap-4 md:gap-9">
                            <ProjectsSectionCardItem
                                icon={projects.links.icon}
                                key={projects.links._id}
                                label={projects.links.linkName}
                                link={projects.links.url}
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 md:gap-3">
                            <Badges label="javascript" className="text-sm" />
                            <Badges label="javascript" className="text-sm" />
                            <Badges label="javascript" className="text-sm" />
                            <Badges label="javascript" className="text-sm" />
                        </div>

                        <ProjectsSectionLink href={projects.links.url} />
                    </div>
                </>
            ))}
        </div>
    );
};
