"use client";

import { TestimonialsCard } from "./TestimonialsCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIAL_SECTION_CARD_ITEMS = [
    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "/images/dona-profile-pic.jpg",
        title: "Daniela Sherif",
        subtitle:
            "Application Associate | Senior Customer Success Executive | QA Tester: In progress | Learning enthusiast",
        link: "http://www.youtube.com/",
    },
    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "/images/dona-profile-pic.jpg",
        title: "Daniela Sherif",
        subtitle:
            "Application Associate | Senior Customer Success Executive | QA Tester: In progress | Learning enthusiast",
        link: "http://www.youtube.com/",
    },
    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "/images/dona-profile-pic.jpg",
        title: "Daniela Sherif",
        subtitle:
            "Application Associate | Senior Customer Success Executive | QA Tester: In progress | Learning enthusiast",
        link: "http://www.youtube.com/",
    },
    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        image: "/images/dona-profile-pic.jpg",
        title: "Daniela Sherif",
        subtitle:
            "Application Associate | Senior Customer Success Executive | QA Tester: In progress | Learning enthusiast",
        link: "http://www.youtube.com/",
    },
];

export const TestimonialsSection = () => {
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
                    {TESTIMONIAL_SECTION_CARD_ITEMS.map((item) => (
                        <SwiperSlide key={item.label}>
                            <TestimonialsCard
                                label={item.label}
                                image={item.image}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
