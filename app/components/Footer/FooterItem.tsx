"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

type FooterItemProps = {
    label: string;
    href: string;
};

export const FooterItem = ({ label, href }: FooterItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center hover:border-b-4 hover:border-secondary ease-in-out p-2 rounded-sm text-white gap-2",
                isActive &&
                    "border-b-4 border-secondary hover:border-text text-white"
            )}
        >
            {label}
        </Link>
    );
};
