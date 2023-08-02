import { cn } from "@/app/lib/utils";
import Link from "next/link";
import NextLink from "next/link";
import { ComponentProps } from "react";
import { Icon } from "../icons/icons";

type LinkProps = ComponentProps<typeof NextLink>;

export const ProjectsSectionLink = ({
    className,
    children,
    ...props
}: LinkProps) => {
    return (
        <Link
            className={cn(
                "flex items-center gap-2 text-xs md:text-base text-text ease-in-out duration-300 hover:text-secondary",
                className
            )}
            {...props}
        >
            {children}
            View Project
            <Icon name="FaArrowRight" className="ml-2" />
        </Link>
    );
};
