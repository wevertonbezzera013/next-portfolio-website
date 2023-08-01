/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Badges } from "../Badges/Badges";

export const WorkExperienceItem = () => {
    return (
        <div className="container grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4 mr-1">
                <div>
                    <span className="font-krona text-white text-sm md:text-base bg-newBlue p-1 md:p-2">
                        2022
                    </span>
                </div>
                <div className="rounded-full border border-newBlue p-0.5 hover:p-1 duration-300 ease-in-out">
                    <a
                        href="https://www.linkedin.com/company/boostcommerce/"
                        target="_blank"
                    >
                        <Image
                            src="/images/boost-icon.png"
                            alt="company logo"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </a>
                </div>
                <div className="h-full w-[2px] bg-newBlue"></div>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a
                        href="https://www.linkedin.com/company/boostcommerce/"
                        target="_blank"
                        className="text-white hover:text-grey duration-300 ease-in-out text-lg font-krona"
                    >
                        BoostCommerce
                    </a>
                    <h4 className="text-white text-base capitalize font-inter">
                        Front-end Technical Support Engineer
                    </h4>
                    <span className="font-inter text-sm text-white font-bold">
                        may 2022 - may 2023
                    </span>
                    <p className="text-white font-krona text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.
                    </p>

                    <div className="text-white font-inter pt-1">
                        <p className="font-bold">Skills</p>
                        <ul className="list-disc container pt-3">
                            <li>
                                Utilize Javascript, CSS, HTML, REACT, JQuery to
                                setup and customize the company's app for
                                customers store. lioubleshoot technical issues
                                and provide efficient resolutions.
                            </li>
                            <li>
                                Respond to and follow up on support inquiries
                                via helpscout, slack. email, chat and phone.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4 md:gap-3">
                        <Badges label="Javascript" className="text-xs" />
                        <Badges label="Javascript" className="text-xs" />
                        <Badges label="Javascript" className="text-xs" />
                        <Badges label="Javascript" className="text-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};
