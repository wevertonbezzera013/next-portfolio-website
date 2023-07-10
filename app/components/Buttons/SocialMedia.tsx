import { Icon } from "../icons/icons";

export default function SocialMedia() {
    return (
        <>
            <a className="pr-3" href="https://github.com/wevertonbezzera013" >
                <Icon name="FaGithub" className="text-white bg-newBlue rounded-full w-9 h-9 p-2"/>
            </a>
            <a className="pl-3 pr-3" href="wa.me/5521968179138" >
                <Icon name="FaWhatsapp" className="text-white bg-newBlue rounded-full w-9 h-9 p-2"/>
            </a>
            <a className="pl-3 pr-3" href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/" >
                <Icon name="FaLinkedin" className="text-white bg-newBlue rounded-full w-9 h-9 p-2"/>
            </a>
            <a className="pl-3" href="mailto:wevertonbezzera013@gmail.com" >
                <Icon name="MdMail" className="text-white bg-newBlue rounded-full w-9 h-9 p-2"/>
            </a>
        </>
    )
};
