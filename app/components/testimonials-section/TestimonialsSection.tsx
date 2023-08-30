"use client";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialsCard from "./TestimonialsCard";
import { getTestimonial } from "../../../sanity/sanity-utils";
import { HomePageTestimonial } from "../../types/page-info";

export const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState<HomePageTestimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const content = await getTestimonial();
                setTestimonials(content);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setIsLoading(false); // Make sure loading stops even if there's an error
            }
        }

        fetchTestimonials();
    }, []);

    const progressCircle = useRef<HTMLDivElement | null>(null); // Define the type of useRef
    const progressContent = useRef<HTMLDivElement | null>(null); // Define the type of useRef

    const onAutoplayTimeLeft = (
        swiper: any,
        time: number,
        progress: number
    ) => {
        if (progressCircle.current && progressContent.current) {
            // Check if they are not null
            progressCircle.current.style.setProperty(
                "--progress",
                String(1 - progress)
            );
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section className="pb-36 px-9">
            {isLoading ? ( // Check isLoading state
                <div className="container">Loading testimonials...</div>
            ) : (
                <div className="flex md:p-0 items-center lex gap-4 md:gap-9">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={3}
                        spaceBetween={50}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        grabCursor
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 500,
                            },
                            1145: {
                                slidesPerView: 2,
                                spaceBetween: 80,
                            },
                            1571: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mr-32"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial._id}>
                                <div>
                                    <TestimonialsCard
                                        _id={testimonial._id}
                                        name={testimonial.name}
                                        content={testimonial.content}
                                        title={testimonial.title}
                                        socialMediaLink={
                                            testimonial.socialMediaLink
                                        }
                                        picture={testimonial.picture}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </section>
    );
};
