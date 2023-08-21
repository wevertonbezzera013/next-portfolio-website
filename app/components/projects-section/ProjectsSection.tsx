"use client";
import Link from "next/link";
import { useState } from "react";
import { SectionTitle } from "../section-title/SectionTitle";
import { ProjectsSectionCard } from "./ProjectsSectionCard";
import { Icon } from "../icons/icons";

export const ProjectsSection = () => {
    const itemsPerPage = 2;
    const [visible, setVisible] = useState(itemsPerPage);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + itemsPerPage);
    };

    //TODO: Replace this with the actual number of projects
    const totalProjects = 4;

    return (
        <section className="container py-11">
            <SectionTitle title="Projects" className="text-text" />
            <div className="flex flex-col gap-11 my-11">
                {/* Render the visible projects */}
                {Array.from({ length: visible }).map((_, index) => (
                    <ProjectsSectionCard key={index} />
                ))}
                {/* Gradient Load More Button */}
                {visible < totalProjects && (
                    <button
                        onClick={showMoreItems}
                        className="flex items-center gap-2 justify-center font-krona text-text hover:text-secondary ease-in-out duration-300 relative mt-3 p-4 rounded-lg"
                    >
                        <span>Load More</span>
                        <Icon name="FaAngleDown" />
                    </button>
                )}
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
