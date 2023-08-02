import { Icon } from "../icons/icons";

export default function SocialMedia() {
    return (
        <div className="grid grid-cols-4 gap-10 absolute">
            <a className=" " href="https://github.com/wevertonbezzera013">
                <Icon
                    name="FaGithub"
                    className="text-white bg-newBlue hover:bg-secondary ease-in-out duration-300 rounded-full w-12 h-12 p-2"
                />
            </a>
            <a className="" href="wa.me/5521968179138">
                <Icon
                    name="FaWhatsapp"
                    className="text-white bg-newBlue hover:bg-secondary ease-in-out duration-300 rounded-full w-12 h-12 p-2"
                />
            </a>
            <a
                className=""
                href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/"
            >
                <Icon
                    name="FaLinkedin"
                    className="text-white bg-newBlue hover:bg-secondary ease-in-out duration-300 rounded-full w-12 h-12 p-2"
                />
            </a>
            <a className="" href="mailto:wevertonbezzera013@gmail.com">
                <Icon
                    name="MdMail"
                    className="text-white bg-newBlue hover:bg-secondary ease-in-out duration-300 rounded-full w-12 h-12 p-2"
                />
            </a>
        </div>
    );
}
