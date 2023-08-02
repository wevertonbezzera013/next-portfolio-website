"use client";
import Link from "next/link";
import { useState } from "react";
import { HeaderItem } from "./HeaderItem";
import DownloadButton from "../Buttons/DownloadButton";

const NAV_ITEMS = [
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

export default function Header() {
    const logo = "<WEV_DEV/>";
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className="font-krona sticky bg-white top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="w-[90%] pl-1 pr-1 md:pl-5 md:pr-5 flex items-center justify-between">
                <Link href="/">
                    <div className="text-text text-base md:text-2xl">
                        {logo}
                    </div>
                </Link>
                <nav className="md:flex items-center gap-10 text-base hidden">
                    {NAV_ITEMS.map((item) => (
                        <HeaderItem {...item} key={item.label} />
                    ))}
                    <div className="hidden sm:block">
                        <DownloadButton />
                    </div>
                </nav>
                <button
                    className="md:hidden ml-10 text-sm rounded-sm"
                    onClick={toggleMobileNav}
                >
                    <svg
                        width="51"
                        height="52"
                        viewBox="0 0 51 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.75 15.1667H23.375C23.9386 15.1667 24.4791 15.3949 24.8776 15.8013C25.2761 16.2076 25.5 16.7587 25.5 17.3333C25.5 17.908 25.2761 18.4591 24.8776 18.8654C24.4791 19.2717 23.9386 19.5 23.375 19.5H12.75C12.1864 19.5 11.6459 19.2717 11.2474 18.8654C10.8489 18.4591 10.625 17.908 10.625 17.3333C10.625 16.7587 10.8489 16.2076 11.2474 15.8013C11.6459 15.3949 12.1864 15.1667 12.75 15.1667ZM27.625 32.5H38.25C38.8136 32.5 39.3541 32.7283 39.7526 33.1346C40.1511 33.5409 40.375 34.092 40.375 34.6667C40.375 35.2413 40.1511 35.7924 39.7526 36.1987C39.3541 36.605 38.8136 36.8333 38.25 36.8333H27.625C27.0614 36.8333 26.5209 36.605 26.1224 36.1987C25.7239 35.7924 25.5 35.2413 25.5 34.6667C25.5 34.092 25.7239 33.5409 26.1224 33.1346C26.5209 32.7283 27.0614 32.5 27.625 32.5ZM12.75 23.8333H38.25C38.8136 23.8333 39.3541 24.0616 39.7526 24.4679C40.1511 24.8743 40.375 25.4254 40.375 26C40.375 26.5746 40.1511 27.1257 39.7526 27.5321C39.3541 27.9384 38.8136 28.1667 38.25 28.1667H12.75C12.1864 28.1667 11.6459 27.9384 11.2474 27.5321C10.8489 27.1257 10.625 26.5746 10.625 26C10.625 25.4254 10.8489 24.8743 11.2474 24.4679C11.6459 24.0616 12.1864 23.8333 12.75 23.8333Z"
                            fill="#174BA0"
                        />
                    </svg>
                </button>
            </div>
            {isMobileNavOpen && (
                <div className="md:hidden absolute top-0 right-0 w-64 h-9xl bg-white shadow-lg">
                    <nav className="flex flex-col items-end gap-5 pt-6 pr-5">
                        <button
                            className="md:hidden ml-10 text-sm rounded-sm"
                            onClick={toggleMobileNav}
                        >
                            <svg
                                width="51"
                                height="52"
                                viewBox="0 0 51 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.75 15.1667H23.375C23.9386 15.1667 24.4791 15.3949 24.8776 15.8013C25.2761 16.2076 25.5 16.7587 25.5 17.3333C25.5 17.908 25.2761 18.4591 24.8776 18.8654C24.4791 19.2717 23.9386 19.5 23.375 19.5H12.75C12.1864 19.5 11.6459 19.2717 11.2474 18.8654C10.8489 18.4591 10.625 17.908 10.625 17.3333C10.625 16.7587 10.8489 16.2076 11.2474 15.8013C11.6459 15.3949 12.1864 15.1667 12.75 15.1667ZM27.625 32.5H38.25C38.8136 32.5 39.3541 32.7283 39.7526 33.1346C40.1511 33.5409 40.375 34.092 40.375 34.6667C40.375 35.2413 40.1511 35.7924 39.7526 36.1987C39.3541 36.605 38.8136 36.8333 38.25 36.8333H27.625C27.0614 36.8333 26.5209 36.605 26.1224 36.1987C25.7239 35.7924 25.5 35.2413 25.5 34.6667C25.5 34.092 25.7239 33.5409 26.1224 33.1346C26.5209 32.7283 27.0614 32.5 27.625 32.5ZM12.75 23.8333H38.25C38.8136 23.8333 39.3541 24.0616 39.7526 24.4679C40.1511 24.8743 40.375 25.4254 40.375 26C40.375 26.5746 40.1511 27.1257 39.7526 27.5321C39.3541 27.9384 38.8136 28.1667 38.25 28.1667H12.75C12.1864 28.1667 11.6459 27.9384 11.2474 27.5321C10.8489 27.1257 10.625 26.5746 10.625 26C10.625 25.4254 10.8489 24.8743 11.2474 24.4679C11.6459 24.0616 12.1864 23.8333 12.75 23.8333Z"
                                    fill="#174BA0"
                                />
                            </svg>
                        </button>
                        <div className="block">
                            <DownloadButton />
                        </div>
                        {NAV_ITEMS.map((item) => (
                            <HeaderItem {...item} key={item.label} />
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
