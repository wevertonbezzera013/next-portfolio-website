import Link from "next/link";
import DownloadButton from "../Buttons/DownloadButton";
import { FooterItem } from "./FooterItem";

const FOOTER_NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Footer() {
    const logo = "<WEV_DEV/>";
    const currentYear = new Date().getFullYear();
    return (
        <footer className="font-inter bg-newBlue text-white top-0 w-full z-10 p-5 flex flex-col items-center justify-center">
            <div className="w-90% pl-1 pr-1 pb-5 md:pl-5 md:pr-5 flex items-start justify-between">
                <div className="flex flex-col md:flex-row items-center gap-10 text-base">
                    {FOOTER_NAV_ITEMS.map((item) => (
                        <FooterItem {...item} key={item.label} />
                    ))}

                    <DownloadButton />
                </div>
            </div>
            <Link href="/">
                <div className="text-base md:text-2xl">{logo}</div>
            </Link>
            <div className="text-white text-sm text-center mt-2">
                &copy; {currentYear} wev_dev. All rights reserved.
            </div>
        </footer>
    );
}
