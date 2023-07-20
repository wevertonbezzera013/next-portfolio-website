"use client";
import { cn, getRelativeTimeString } from "@/app/lib/utils";
import { Icon } from "../icons/icons";

type SkillsCardItemProps = {
    label: string;
    icon: string;
    startDate: string;
};

export const SkillsCardItem = ({
    label,
    icon,
    startDate,
}: SkillsCardItemProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(startDate),
        "en-US"
    ).replace("ago", "of experience");
    return (
        <div className="flex flex-col items-center font-krona text-white bg-newBlue p-6 rounded-lg hover:bg-primary ease-in-out duration-300">
            <div className={cn("flex items-center text-lg")}>
                <Icon name={icon} className="mr-2" />
                <span>{label}</span>
            </div>
            <span className="text-sm">{relativeTime}</span>
        </div>
    );
};
