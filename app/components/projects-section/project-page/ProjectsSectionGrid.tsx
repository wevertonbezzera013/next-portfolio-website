"use client";
import { useState } from "react";
import { Icon } from "../../icons/icons";
import { ProjectsSectionCardGrid } from "./ProjectsSectionCardGrid";

export const ProjectsSectionGrid = () => {
    const itemsPerPage = 4;
    const [visible, setVisible] = useState(itemsPerPage);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + itemsPerPage);
    };

    //TODO: Replace this with the actual number of projects
    const totalProjects = 8;

    return (
        <section className="container py-11 flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-11 my-11">
                {/* Render the visible projects */}
                {Array.from({ length: visible }).map((_, index) => (
                    <ProjectsSectionCardGrid key={index} />
                ))}
                {/* Gradient Load More Button */}
            </div>
            {visible < totalProjects && (
                <button
                    onClick={showMoreItems}
                    className="flex items-center gap-2 justify-center font-krona text-text hover:text-secondary ease-in-out duration-300 relative mt-3 p-4 rounded-lg"
                >
                    <span>Load More</span>
                    <Icon name="FaAngleDown" />
                </button>
            )}
        </section>
    );
};
