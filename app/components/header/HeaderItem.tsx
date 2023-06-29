'use client'
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from 'next/navigation'

type NavItemProps = {
    label: string
    href: string
}

export const HeaderItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href} className={cn(
            "flex items-center hover:bg-secondary ease-in-out duration-300 p-2 rounded-sm text-grey gap-2",
            isActive && "text-white"
        )}>
            {label}
        </Link>
    )
}
