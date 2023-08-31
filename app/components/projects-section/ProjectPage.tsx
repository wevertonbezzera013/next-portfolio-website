import Image from "next/image";
import { ProjectsSectionCardItem } from "./ProjectsSectionCardItem";
import { ProjectTitle } from "../section-title/ProjectTitle";
import { SectionTitle } from "../section-title/SectionTitle";
import { HomePageProject } from "../../types/page-info";
import { PortableText } from "@portabletext/react";

export const ProjectPage = ({
    projects, // This should be an array of HomePageProject objects
}: {
    projects: HomePageProject[];
}) => {
    return (
        <section className="container pt-12">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col container">
                    {projects.map((item) => (
                        <div key={item._id}>
                            <ProjectTitle title={item.name} />
                        </div>
                    ))}
                    <div className="w-full h-hull aspect-w-1 aspect-h-1">
                        {projects.map((item) => (
                            <Image
                                src={item.imageOne.url}
                                alt={item.imageOne.alt}
                                width={700}
                                height={470}
                                unoptimized
                                key={item._id}
                                className="object-cover w-full h-full"
                            />
                        ))}
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row gap-10 space-y-8">
                    <div>
                        <SectionTitle title="Project Description" />
                        {projects.map((item) => (
                            <p
                                className="font-krona text-text text-sm md:text-lg pt-10"
                                key={item._id}
                            >
                                <PortableText value={item.description} />
                            </p>
                        ))}
                    </div>

                    <div className="w-full h-hull md:w-9xl md:h-96 aspect-w-1 aspect-h-1">
                        {projects.map((item) => (
                            <Image
                                src={item.imageTwo.url}
                                alt={item.imageTwo.alt}
                                width={700}
                                height={470}
                                unoptimized
                                key={item._id}
                                className="object-cover w-full h-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 md:gap-9">
                    {projects.map((project) =>
                        project.links.map((link, linkIndex) => (
                            <ProjectsSectionCardItem
                                key={linkIndex}
                                icon={link.icon}
                                label={link.linkName}
                                link={link.url}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};
