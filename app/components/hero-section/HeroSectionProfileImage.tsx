"use client"
import { useState } from "react";
import Image from "next/image";

export default function HeroSectionProfileImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const parallaxOffset = 0.02; // Adjust this value to control the intensity of the parallax effect

  return (
    <section className="relative" onMouseMove={handleMouseMove}>
      <div
        className="absolute w-[203px] h-[340px] top-[40px] left-[44px] md:w-[428px] md:h-[606px] md:left-[76px] md:top-[60px] border-[1px] md:border-[3px] border-primary opacity-50"
      ></div>
      <div
        className="absolute w-[203px] h-[340px] top-[30px] left-[27px] md:w-[525px] md:h-[641px] md:top-[0px] md:left-[39px] border-[1px] md:border-[3px] border-primary opacity-50"
        style={{
          transform: `translate(${
            -mousePosition.x * parallaxOffset
          }px, ${-mousePosition.y * parallaxOffset}px)`,
        }}
      ></div>
      <div
        className="absolute w-[203px] h-[340px] top-[50px] left-[17px] md:w-[370px] md:h-[423px] md:left-[52px] md:top-[127px] border-[1px] md:border-[3px] bg-secondary border-secondary opacity-50"
        style={{
          transform: `translate(${
            -mousePosition.x * parallaxOffset
          }px, ${-mousePosition.y * parallaxOffset}px)`,
        }}
      ></div>

      <div
        className="relative top-[100px] w-[230px] h-[337px] md:top-[50px] md:w-[524px] md:h-[572px]"
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
        />
      </div>
    </section>
  );
}
