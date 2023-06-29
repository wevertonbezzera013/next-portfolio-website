import Link from "next/link";
import { HeaderItem } from "./HeaderItem";

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Contact',
        href: '/Contact'
    }
]

export default function Header() {
    return (
        <header className="bg-primary absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container pl-5 pr-5 flex items-center justify-between">
                <Link href="/">
                    <div className="text-white text-base md:text-2xl">WEV_DEV</div>
                </Link>
                <nav className="md:flex items-center gap-10 text-base hidden">
                    {NAV_ITEMS.map(item => (
                        <HeaderItem {...item} key={item.label} />
                    ))}
                    <a href="weverton's cv frontend developer.pdf">
                        <button className="ml-10 text-white bg-secondary hover:bg-grey ease-in-out duration-300 p-3 rounded-sm">
                            Download CV
                        </button>
                    </a>
                </nav>
                <a className="md:hidden block" href="weverton's cv frontend developer.pdf">
                    <button className="ml-10 text-sm text-white bg-secondary hover:bg-grey ease-in-out duration-300 p-2 rounded-sm">
                        Download CV
                    </button>
                </a>
            </div>
        </header>
    )
};
