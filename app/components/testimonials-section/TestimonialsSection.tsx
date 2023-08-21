"use client";

import { TestimonialsCard } from "./TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ITestimonials } from "../../types/projects";

type testimonialsProps = {
    content: ITestimonials[];
};

export const TestimonialsSection = ({ content }: testimonialsProps) => {
    if (!content || content.length === 0) {
        // Return a fallback UI or loading state if content is null or empty
        return <div className="container">No testimonials available.</div>;
    }

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
                    <SwiperSlide>
                        <TestimonialsCard content={content} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};
