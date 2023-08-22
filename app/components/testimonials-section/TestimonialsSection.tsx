"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsCard from "./TestimonialsCard";
import { getTestimonial } from "../../../sanity/sanity-utils";
import { useEffect, useState } from "react";
import { HomePageTestimonial } from "../../types/page-info";

export const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState<HomePageTestimonial[]>([]); // Provide the correct type here

    useEffect(() => {
        async function fetchTestimonials() {
            const content = await getTestimonial();
            setTestimonials(content);
        }

        fetchTestimonials();
    }, []);
    return (
        <section className="pb-36 px-9">
            <div className="flex md:p-0 items-center lex gap-4 md:gap-9">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={3}
                    spaceBetween={50}
                    autoplay
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
                    className="mr-32"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial._id}>
                            <TestimonialsCard
                                _id={testimonial._id}
                                name={testimonial.name}
                                content={testimonial.content}
                                title={testimonial.title}
                                socialMediaLink={testimonial.socialMediaLink}
                                picture={testimonial.picture}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
