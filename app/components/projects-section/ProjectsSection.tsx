import Link from "next/link";
import { SectionTitle } from "../section-title/SectionTitle";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import { Icon } from "../icons/icons";

export const ProjectsSection = () => {
    return (
        <section className="container py-11">
            <SectionTitle title="Projects" />
            <div className="flex flex-col gap-11 my-11">
                <ProjectsSectionCard />
                <ProjectsSectionCard />
                <Link href="/projects" className="font-inter text-text">
                    <span className="flex justify-start items-center ease-in-out duration-300 hover:text-secondary">
                        See all projects
                        <Icon name="FaArrowRight" className="ml-2" />
                    </span>
                </Link>
            </div>
        </section>
    );
};
