import { PortableTextBlock } from "@sanity/types";
import { ISkills, ITestimonials, IProject } from "./projects";

export type HomePageProject = {
    _id: string;
    _createdAt: Date;
    name: string;
    projects: IProject[];
};

export type HomePageInfo = {
    introduction: PortableTextBlock;
    introductionTitle: string;
    descriptionText: PortableTextBlock;
    profilePicture: string;
    descriptionTitle: string;
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    skills: ISkills[];
    projects: IProject[];
    testimonials: ITestimonials[];
};

export type HomePageTestimonial = {
    testimonial: HomePageTestimonial;
    _id: string;
    name: string;
    content: string;
    title: string;
    socialMediaLink: string;
    profilePicture: string;
};
