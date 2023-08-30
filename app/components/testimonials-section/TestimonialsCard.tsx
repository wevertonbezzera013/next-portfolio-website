import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { HomePageTestimonial } from "../../types/page-info";

const TestimonialsCard = ({
    _id,
    name,
    content,
    title,
    socialMediaLink,
    picture,
}: HomePageTestimonial) => {
    return (
        <div
            key={_id}
            className="flex items-center container gap-9 bg-button hover:bg-newBlue rounded-2xl w-[300px] h-[400px] md:w-full md:h-[300px] ease-in-out duration-300 py-2 px-4"
        >
            <a href={socialMediaLink} target="_blank">
                <div className="flex flex-col items-center gap-9">
                    <div className="flex ">
                        <div className="flex mt-6 text-center text-white text-xs font-krona">
                            <PortableText value={content || []} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={picture}
                            alt="profile image"
                            width={50}
                            height={50}
                            className="rounded-full"
                            loading="lazy"
                        />

                        <div className="font-inter ml-3">
                            <h3 className="text-testimonial-text">{name}</h3>
                            <h1 className="font-bold text-white">{title}</h1>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default TestimonialsCard;
