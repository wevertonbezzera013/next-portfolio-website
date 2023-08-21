// TestimonialsCard.tsx
import { ITestimonials } from "../../types/projects";
import { Icon } from "../icons/icons";
import Image from "next/image";

type TestimonialsCardProps = {
    content: ITestimonials[];
};

export const TestimonialsCard = ({ content }: TestimonialsCardProps) => {
    return (
        <div className="container flex items-center gap-9 bg-button hover:bg-newBlue rounded-2xl w-[390px] h-[438px] md:w-full md:h-[312px] ease-in-out duration-300 py-2 px-4 md:py-3 md:px-8">
            {content?.map((item) => (
                <a href={item.socialMediaLink} key={item._id} target="_blank">
                    <div className="flex flex-col gap-9">
                        <div className="flex items-center">
                            <Icon
                                name="FaQuoteLeft"
                                className="mr-2 text-testimonial text-5xl"
                            />
                            <div className="flex text-white text-xs font-krona">
                                <span className="mt-6 text-center">
                                    {item.content}
                                </span>
                            </div>
                            <Icon
                                name="FaQuoteRight"
                                className="ml-2 text-testimonial text-5xl"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Image
                                src={item.profilePicture} // Assuming your asset structure is correct
                                alt={item.profilePicture}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />

                            <div className="font-inter ml-3">
                                <h3 className="text-testimonial-text">
                                    {item.name}
                                </h3>
                                <h1 className="font-bold text-white">
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};
