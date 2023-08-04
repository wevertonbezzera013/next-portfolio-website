"use client";
import { useState } from "react";
import Image from "next/image";

export default function HeroSectionProfileImage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    const parallaxOffset = 0.02; // Adjust this value to control the intensity of the parallax effect

    return (
        <section className="relative" onMouseMove={handleMouseMove}>
            <div className="absolute w-[203px] h-[340px] top-[40px] left-[44px] lg:w-[428px] lg:h-[606px] lg:left-[76px] lg:top-[60px] border-[1px] lg:border-[3px] border-primary opacity-50"></div>
            <div
                className="absolute w-[203px] h-[340px] top-[30px] left-[27px] lg:w-[525px] lg:h-[641px] lg:top-[0px] lg:left-[39px] border-[1px] lg:border-[3px] border-primary opacity-50"
                style={{
                    transform: `translate(${
                        -mousePosition.x * parallaxOffset
                    }px, ${-mousePosition.y * parallaxOffset}px)`,
                }}
            ></div>
            <div
                className="absolute w-[203px] h-[340px] top-[50px] left-[17px] lg:w-[370px] lg:h-[423px] lg:left-[52px] lg:top-[127px] border-[1px] lg:border-[3px] bg-secondary border-secondary opacity-50"
                style={{
                    transform: `translate(${
                        -mousePosition.x * parallaxOffset
                    }px, ${-mousePosition.y * parallaxOffset}px)`,
                }}
            ></div>

            <div
                className="relative top-[100px] w-[230px] h-[337px] lg:top-[50px] lg:w-[524px] lg:h-[572px]"
                style={{
                    transform: `translate(${
                        mousePosition.x * parallaxOffset
                    }px, ${mousePosition.y * parallaxOffset}px)`,
                }}
            >
                <Image
                    width={524}
                    height={572}
                    src="/images/profile-pic.png"
                    alt="Tom's profile pic"
                    unoptimized
                />
            </div>
        </section>
    );
}
