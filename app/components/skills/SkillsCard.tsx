"use client";

import { useEffect, useState } from "react";
import { SkillsCardItem } from "./SkillsCardItem";
import { Icon } from "../icons/icons";

const SKILL_CARD_ITEMS = [
    {
        label: "Javascript",
        icon: "FaJsSquare",
        startDate: "2020-01-01",
    },
    {
        label: "Typescript",
        icon: "TbBrandTypescript",
        startDate: "2021-01-01",
    },
    {
        label: "HTML5",
        icon: "FaHtml5",
        startDate: "2020-01-01",
    },
    {
        label: "CSS3",
        icon: "FaCss3Alt",
        startDate: "2020-01-01",
    },
    {
        label: "NodeJs",
        icon: "FaNodeJs",
        startDate: "2020-01-01",
    },
    {
        label: "Git",
        icon: "FaGitAlt",
        startDate: "2020-01-01",
    },
    {
        label: "React",
        icon: "FaReact",
        startDate: "2020-01-01",
    },
    {
        label: "Mongodb",
        icon: "BiLogoMongodb",
        startDate: "2020-01-01",
    },
    {
        label: "JQuery",
        icon: "BiLogoJquery",
        startDate: "2022-05-01",
    },
    {
        label: "NextJs",
        icon: "TbBrandNextjs",
        startDate: "2021-01-01",
    },
    {
        label: "TailwindCss",
        icon: "BiLogoTailwindCss",
        startDate: "2021-01-01",
    },
    {
        label: "Graphql",
        icon: "BiLogoGraphql",
        startDate: "2021-01-01",
    },
];

export default function SkillsCard() {
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

    return (
        <section className="flex flex-col">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
                {SKILL_CARD_ITEMS.slice(0, visible).map((item, index) => (
                    <SkillsCardItem
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        startDate={item.startDate}
                    />
                ))}
            </div>

            {/* Gradient Load More Button */}
            {visible < SKILL_CARD_ITEMS.length && (
                <button
                    onClick={showMoreItems}
                    className="flex items-center gap-2 justify-center font-krona text-text relative mt-3 p-4 rounded-lg z-10"
                >
                    <span>Load More</span>
                    <Icon name="FaAngleDown" />
                </button>
            )}
        </section>
    );
}
