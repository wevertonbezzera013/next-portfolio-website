"use client";
import { cn, getRelativeTimeString } from "@/app/lib/utils";
import { Icon } from "../icons/icons";
import Link from "next/link";
import link from "next/link";
import { useRef } from "react";

type ProjectsSectionCardItemProps = {
    label: string;
    icon: string;
    link: string;
};

export const ProjectsSectionCardItem = ({
    label,
    icon,
    link,
}: ProjectsSectionCardItemProps) => {
    const linkRef = useRef<HTMLAnchorElement | null>(null);

    return (
        <div className="flex justify-start gap-9">
            <Link href={link}>
                <div className="uppercase flex items-center text-white bg-button hover:bg-newBlue ease-in-out duration-300 p-2 px-8 md:p-5 md:px-12 font-bold">
                    <Icon name={icon} className="mr-2" /> {label}
                </div>
            </Link>
        </div>
    );
};
