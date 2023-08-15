"use client";

import { useEffect, useState } from "react";
import { SkillsCardItem } from "./SkillsCardItem";
import { Icon } from "../icons/icons";
import { SectionTitle } from "../section-title/SectionTitle";
import { Skills as ISkills } from "@/app/types/projects";

type skillsProps = {
    tech: ISkills[];
};

export const Skills = ({ tech }: skillsProps) => {
    console.log("tech:", tech);

    const [isMobile, setIsMobile] = useState(false);
    const itemsPerPage = isMobile ? 4 : 8;
    const [visible, setVisible] = useState(itemsPerPage);

    const showMoreItems = () => {
        setVisible((prevVisible) => prevVisible + itemsPerPage);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial isMobile value on component mount
        setIsMobile(window.innerWidth < 768);

        // Attach the resize event listener only on the client-side
        window.addEventListener("resize", handleResize);
        return () => {
            // Clean up the resize event listener on component unmount
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // When isMobile changes, update the number of visible items
        setVisible(itemsPerPage);
    }, [isMobile, itemsPerPage]);

    if (!tech) {
        // Return a fallback UI or loading state if homeInfo is undefined
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="flex flex-col container mt-52 md:my-10">
            <SectionTitle title="Technologies" className="text-text" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
                {tech?.length ? (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
                        {tech?.slice(0, visible).map((tech: ISkills) => (
                            <SkillsCardItem key={tech?.name} tech={tech} />
                        ))}
                    </div>
                ) : (
                    <p>No technologies available.</p>
                )}
            </div>

            {/* Gradient Load More Button */}
            {visible < tech?.length && (
                <button
                    onClick={showMoreItems}
                    className="flex items-center gap-2 justify-center font-krona text-text hover:text-secondary ease-in-out duration-300 relative mt-3 p-4 rounded-lg"
                >
                    <span>Load More</span>
                    <Icon name="FaAngleDown" />
                </button>
            )}
        </div>
    );
};
