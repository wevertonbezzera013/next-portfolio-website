import Image from "next/image";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { ProjectTitle } from "../section-title/ProjectTitle";
import { SectionTitle } from "../section-title/SectionTitle";
import { HomePageProject } from "../../types/page-info";
import { PortableText } from "@portabletext/react";

export const ProjectPage = ({
    projects, // This should be an array of HomePageProject objects
}: {
    projects: HomePageProject;
}) => {
    return (
        <section className="container pt-12">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col container">
                    <ProjectTitle title={projects.name} />

                    <div className="w-full h-hull aspect-w-1 aspect-h-1">
                        <Image
                            src={projects.imageOne.url}
                            alt={projects.imageOne.alt}
                            width={700}
                            height={470}
                            unoptimized
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row gap-10 space-y-8">
                    <div>
                        <SectionTitle title="Project Description" />

                        <p className="font-inter text-text text-sm md:text-lg pt-10">
                            <PortableText value={projects.description} />
                        </p>
                    </div>

                    <div className="w-full h-hull md:w-9xl md:h-96 aspect-w-1 aspect-h-1">
                        <Image
                            src={projects.imageTwo.url}
                            alt={projects.imageTwo.alt}
                            width={700}
                            height={470}
                            unoptimized
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="flex gap-4 md:gap-9">
                    {projects.links.map((link, linkIndex) => (
                        <ProjectsSectionCardItem
                            key={linkIndex}
                            icon={link.icon}
                            label={link.linkName}
                            link={link.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
