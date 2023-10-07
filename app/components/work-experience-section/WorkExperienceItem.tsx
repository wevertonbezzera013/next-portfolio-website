/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Badges } from "../Badges/Badges";
import { HomePageExperience } from "../../types/page-info";
import { PortableText } from "@portabletext/react";

export const WorkExperienceItem = ({
    company,
    role,
    startDate,
    endDate,
    description,
    companyPicture,
    companyURL,
    skills,
    techTags,
    year,
}: HomePageExperience) => {
    const formattedStartDate = new Date(startDate).toLocaleDateString();
    let formattedEndDate = new Date(endDate).toLocaleDateString();
    const checkIsEmpty = (date: string, secondDate: string) => {
        if (date == secondDate) {
            return "Present";
        } else {
            return date; // Add this line to return the non-empty date
        }
    };

    return (
        <div className="container grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4 mr-1">
                <div>
                    <span className="font-krona text-white text-sm md:text-base bg-newBlue p-1 md:p-2">
                        {year}
                    </span>
                </div>
                <div className="rounded-full border border-newBlue p-0.5 hover:p-1 duration-300 ease-in-out">
                    <a href={companyURL} target="_blank">
                        <Image
                            src={companyPicture}
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
                        href={companyURL}
                        target="_blank"
                        className="text-white hover:text-grey duration-300 ease-in-out text-lg font-krona"
                    >
                        {company}
                    </a>
                    <h4 className="text-white text-base capitalize font-inter">
                        {role}
                    </h4>
                    <span className="font-inter text-sm text-white font-bold">
                        {formattedStartDate} -{" "}
                        {checkIsEmpty(formattedEndDate, formattedStartDate)}
                    </span>
                    <p className="text-white font-krona text-sm">
                        <PortableText value={description} />
                    </p>

                    <div className="text-white font-inter pt-1">
                        <p className="font-bold">Skills</p>
                        <ul className="list-disc container pt-3">
                            {skills.map((skill, index) => (
                                <li key={index}>
                                    <PortableText
                                        value={skill?.skillDescription}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4 md:gap-3">
                        {techTags.map((techTag, index) => (
                            <Badges
                                key={index}
                                label={techTag.tech}
                                className="text-xs"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
