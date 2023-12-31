export default function DownloadButton() {
    return (
        <>
            <a
                className="sm:hidden md:block"
                href="/weverton cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="text-white bg-primary hover:bg-secondary ease-in-out duration-300 pl-7 pr-7 p-3 rounded-sm">
                    Download CV
                </button>
            </a>
        </>
    );
}
