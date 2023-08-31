"use client";
import { useEffect, useState } from "react";
import { Icon } from "../../icons/icons";
import { ProjectsSectionCardGrid } from "./ProjectsSectionCardGrid";
import { HomePageProject } from "../../../types/page-info";

export const ProjectsSectionGrid = ({
    projects, // This should be an array of HomePageProject objects
}: {
    projects: HomePageProject[];
}) => {
    const itemsPerPage = 2;
    const [visible, setVisible] = useState(itemsPerPage);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + itemsPerPage);
    };

    useEffect(() => {
        // When projects change, reset the number of visible items
        setVisible(itemsPerPage);
    }, [projects]);

    if (!projects) {
        // Return a fallback UI or loading state if projects is undefined
        return <div className="container">Loading...</div>;
    }

    return (
        <section className="container py-11 flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-11 my-11">
                {/* Render the visible projects */}
                {projects.slice(0, visible).map((project) => (
                    <p key={project._id}>
                        <ProjectsSectionCardGrid
                            name={project.name}
                            slug={project.slug}
                            shortDescription={project.shortDescription}
                            imageOne={project.imageOne}
                            imageTwo={project.imageTwo}
                            links={project.links}
                            description={project.description}
                            techTags={project.techTags}
                            _id={project._id}
                            linkName={project.linkName}
                            icon={project.icon}
                            url={project.url}
                        />
                    </p>
                ))}
                {/* Gradient Load More Button */}
            </div>
            {visible < projects.length && (
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
