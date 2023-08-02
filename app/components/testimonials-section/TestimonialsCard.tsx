"use client";
import { Icon } from "../icons/icons";
import Link from "next/link";
import Image from "next/image";

type TestimonialsCardProps = {
    label: string;
    image: string;
    title: string;
    subtitle: string;
    link: string;
};

export const TestimonialsCard = ({
    label,
    image,
    title,
    subtitle,
    link,
}: TestimonialsCardProps) => {
    return (
        <div className="container flex items-center gap-9 bg-button hover:bg-newBlue rounded-2xl w-[390px] h-[438px] md:w-full md:h-[312px] ease-in-out duration-300 py-2 px-4 md:py-3 md:px-8">
            <a href={link} target="_blank">
                <div className="flex flex-col gap-9">
                    <div className="flex items-center">
                        <Icon
                            name="FaQuoteLeft"
                            className="mr-2 text-testimonial text-5xl"
                        />
                        <div className="flex text-white text-xs font-krona">
                            <span className="mt-6 text-center">{label}</span>
                        </div>
                        <Icon
                            name="FaQuoteRight"
                            className="ml-2 text-testimonial text-5xl"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={image}
                            alt="profile image"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />

                        <div className="font-inter ml-3">
                            <h3 className="text-testimonial-text">{title}</h3>
                            <h1 className="font-bold text-white">{subtitle}</h1>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
