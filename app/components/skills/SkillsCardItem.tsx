"use client";
import { cn, getRelativeTimeString } from "@/app/lib/utils";
import { Icon } from "../icons/icons";
import { Skills as ISkills } from "@/app/types/projects";

type SkillsCardItemProps = {
    tech: ISkills;
};

export const SkillsCardItem = ({ tech }: SkillsCardItemProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate),
        "pt-BR"
    )
        .replace("anos", "years of experience")
        .replace("há", "");
    return (
        <div className="flex flex-col items-center font-krona text-white bg-newBlue p-6 rounded-lg hover:bg-primary ease-in-out duration-300">
            <div className={cn("flex items-center text-lg")}>
                <Icon name={tech.iconSvg} className="mr-2" />
                <div>{tech.name}</div>
            </div>
            <div className="text-sm">{relativeTime}</div>
        </div>
    );
};
