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
            "flex items-center hover:border-b-4 hover:border-secondary ease-in-out p-2 rounded-sm text-text gap-2",
            isActive && "text-white border-b-4 border-secondary hover:border-text text-text"
        )}>
            {label}
        </Link>
    )
}
