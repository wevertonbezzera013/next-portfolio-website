"use client";
import { z } from "zod";
/* eslint-disable react/no-unescaped-entities */

import SocialMedia from "../Buttons/SocialMedia";
import { Icon } from "../icons/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const contactFormSchema = z.object({
    name: z.string().refine((val) => val.length >= 3 && val.length <= 100),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactSection = () => {
    const { handleSubmit, register } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        console.log(data);
    };

    return (
        <section className="container">
            <div className="py-24 pb-48 px-6 md:py-32 flex flex-col items-center justify-center">
                <div className="relative flex place-content-center">
                    <div className="absolute">
                        <div className="bg-contact items-center rounded-full w-screen h-[920px] md:w-[650px] md:h-[650px]"></div>
                    </div>
                    <Image
                        src="/images/profile-illustration.svg"
                        alt="Profile Illustration"
                        width={650}
                        height={610}
                        className="hidden lg:block"
                        unoptimized
                    />
                    <div className="w-full max-w-[420px] mx-auto">
                        <span className="font-krona text-center items-center text-lg">
                            Did you like what you see? Let's have a chat! Send
                            me an e-mail.
                        </span>
                        <Image
                            src="/images/profile-illustration.svg"
                            alt="Profile Illustration"
                            width={650}
                            height={610}
                            className="block lg:hidden z-0"
                            unoptimized
                        />
                        <div className="flex flex-col">
                            <form
                                className="mt-12 w-full flex flex-col gap-4 font-inter text-text"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="relative">
                                    <Icon
                                        name="FaUser"
                                        className="absolute left-4 top-4 text-xl text-button"
                                    />
                                    <input
                                        className="w-full h-14 pl-12 bg-form rounded-lg placeholder:text-button p-4 focus:outline-none focus:ring-2 ring-button"
                                        {...register("name")}
                                    />
                                </div>
                                <div className="relative">
                                    <Icon
                                        name="BiAt"
                                        className="absolute left-4 top-4 text-xl text-button"
                                    />
                                    <input
                                        className="w-full h-14 pl-12 bg-form rounded-lg placeholder:text-button p-4 focus:outline-none focus:ring-2 ring-button"
                                        {...register("email")}
                                    />
                                </div>
                                <div className="relative">
                                    <Icon
                                        name="BiChat"
                                        className="absolute left-4 top-4 text-xl text-button"
                                    />
                                    <textarea
                                        className="resize-none w-full pl-12 h-[138px] bg-form rounded-lg placeholder:text-button p-4 focus:outline-none focus:ring-2 ring-button"
                                        maxLength={500}
                                        {...register("message")}
                                    />
                                    <button className="mt-6 bg-button hover:bg-newBlue ease-in-out duration-300 font-krona px-full py-2 px-24 text-white">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            <div className="absolute contents">
                                <div className="mt-6">
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
