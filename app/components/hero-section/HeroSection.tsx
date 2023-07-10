import { Icon } from "../icons/icons";
import HeroSectionProfileImage from "./HeroSectionProfileImage";

export default function HeroSection() {
    return (
        <section className="container  font-krona mt-2 md:mt-36 w-full h-[755px] flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="text-sm md:text-lg text-secondary">Hi there! My name is</p>
                    <h1 className="pt-2 pb-2 md:pt-5 md:pb-5 text-2xl md:text-5xl text-primary">Weverton B. Costa</h1>
                    <p className="text-newBlue pb-2 md:pb-5 text-lg md:text-2xl">Full Stack Developer</p>
                    <p className="text-base md:text-lg">I am a highly skilled and versatile <b className="text-primary">Full Stack Developer</b> with a strong background in both frontend and backend technologies. With a passion for creating innovative and user-friendly applications, I strive to deliver high-quality solutions that exceed client expectations.</p>
                    <div className="hidden md:flex pt-10">
                        <a className="pr-3" href="https://github.com/wevertonbezzera013" >
                            <Icon name="FaGithub" className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-3 pr-3" href="wa.me/5521968179138" >
                            <Icon name="FaWhatsapp" className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-3 pr-3" href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/" >
                            <Icon name="FaLinkedin" className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-3" href="mailto:wevertonbezzera013@gmail.com" >
                            <Icon name="MdMail" className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2" />
                        </a>
                    </div>
                </div>

                <div className="flex">
                    <HeroSectionProfileImage />
                    <div className="md:hidden pt-10 flex flex-col justify-between ">
                        <a className="pl-10" href="https://github.com/wevertonbezzera013" >
                            <Icon name="FaGithub" className="text-white bg-primary rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-10" href="wa.me/5521968179138" >
                            <Icon name="FaWhatsapp" className="text-white bg-primary rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-10" href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/" >
                            <Icon name="FaLinkedin" className="text-white bg-primary rounded-full w-9 h-9 p-2" />
                        </a>
                        <a className="pl-10" href="mailto:wevertonbezzera013@gmail.com" >
                            <Icon name="MdMail" className="text-white bg-primary rounded-full w-9 h-9 p-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
