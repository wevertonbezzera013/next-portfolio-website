import { HomePageInfo } from "@/app/types/page-info";
import { Icon } from "../icons/icons";
import { HeroSectionItems } from "./HeroSectionItems";
import HeroSectionProfileImage from "./HeroSectionProfileImage";
import { RichText } from "../rich-text";

type HeroSectionProps = {
    homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
    if (!homeInfo) {
        // Return a fallback UI or loading state if homeInfo is undefined
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="text-text">
            <div className="container font-krona mt-2 md:mt-36 w-full h-[755px] flex flex-col">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full lg:max-w-[530px]">
                        <div className="text-sm md:text-lg text-secondary">
                            Hi there! My name is
                        </div>
                        <h1 className="pt-2 pb-2 md:pt-5 md:pb-5 text-2xl md:text-5xl text-primary">
                            Weverton B. Costa
                        </h1>
                        <div className="text-newBlue pb-2 md:pb-5 text-lg md:text-2xl">
                            {homeInfo?.introductionTitle ||
                                "Fallback Introduction Title"}
                        </div>
                        <div className="text-base md:text-lg">
                            <RichText
                                content={homeInfo?.introduction?.raw || ""}
                            />
                        </div>
                        <div className="hidden md:flex pt-10">
                            <a
                                className="pr-3"
                                href="https://github.com/wevertonbezzera013"
                            >
                                <Icon
                                    name="FaGithub"
                                    className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a className="pl-3 pr-3" href="wa.me/5521968179138">
                                <Icon
                                    name="FaWhatsapp"
                                    className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a
                                className="pl-3 pr-3"
                                href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/"
                            >
                                <Icon
                                    name="FaLinkedin"
                                    className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a
                                className="pl-3"
                                href="mailto:wevertonbezzera013@gmail.com"
                            >
                                <Icon
                                    name="MdMail"
                                    className="text-white bg-primary hover:bg-newBlue duration-300 rounded-full w-9 h-9 p-2"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="container">
                            <HeroSectionProfileImage />
                        </div>
                        <div className="md:hidden pt-10 flex flex-col justify-between">
                            <a
                                target="_blank"
                                href="https://github.com/wevertonbezzera013"
                            >
                                <Icon
                                    name="FaGithub"
                                    className="text-white bg-primary rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://api.whatsapp.com/send/?phone=5521968179138&text&type=phone_number&app_absent=0"
                            >
                                <Icon
                                    name="FaWhatsapp"
                                    className="text-white bg-primary rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/"
                            >
                                <Icon
                                    name="FaLinkedin"
                                    className="text-white bg-primary rounded-full w-9 h-9 p-2"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="mailto:wevertonbezzera013@gmail.com"
                            >
                                <Icon
                                    name="MdMail"
                                    className="text-white bg-primary rounded-full w-9 h-9 p-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-krona container w-full h-[400px]">
                <div>
                    <div className="grid grid-cols-2 gap-2 text-base md:text-2xl break-words">
                        <HeroSectionItems
                            label={"+4 Years"}
                            icon={"HiOutlineCursorClick"}
                        />
                        <HeroSectionItems
                            label={"+20 Clients"}
                            icon={"HiOutlineGlobe"}
                        />
                        <HeroSectionItems
                            label={"Experienced Freelancer"}
                            icon={"HiOutlineBriefcase"}
                        />
                        <HeroSectionItems
                            label={"Skilled Developer"}
                            icon={"FaSistrix"}
                        />
                    </div>

                    <div className="mt-8 md:mt-24 text-lg md:text-xl flex flex-col md:flex-row justify-between">
                        <div className="pr-2 text-lg md:pr-28">
                            {homeInfo?.descriptionTitle}
                        </div>
                        <div className="font-inter">
                            <RichText
                                content={homeInfo?.descriptionText?.raw || ""}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
