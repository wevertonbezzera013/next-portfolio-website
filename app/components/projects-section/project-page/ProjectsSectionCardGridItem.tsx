"use client";
import Link from "next/link";
import { Icon } from "../../icons/icons";

type ProjectsSectionCardGridItemProps = {
    label: string;
    icon: string;
    link: string;
};

export const ProjectsSectionCardGridItem = ({
    label,
    icon,
    link,
}: ProjectsSectionCardGridItemProps) => {
    return (
        <div className="flex gap-9 text-xs lg:text-base">
            <Link href={link}>
                <div className="uppercase flex items-center text-white bg-button hover:bg-newBlue ease-in-out duration-300 p-2 px-8 lg:p-5 lg:px-12 font-bold">
                    <Icon name={icon} className="mr-2" /> {label}
                </div>
            </Link>
        </div>
    );
};
