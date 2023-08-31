import { PortableTextBlock } from "@sanity/types";
import { ISkills, Ilinks, ITechTag, IExperienceSkills } from "./projects";

export type HomePageProject = {
    _id: number;
    name: string;
    slug: string;
    shortDescription: PortableTextBlock;
    imageOne: { alt: string; url: string };
    imageTwo: { alt: string; url: string };
    links: Ilinks[];
    linkName: string;
    icon: string;
    url: string;
    description: PortableTextBlock;
    techTags: ITechTag[];
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
};

export type HomePageTestimonial = {
    _id: string;
    name: string;
    content: PortableTextBlock;
    title: string;
    socialMediaLink: string;
    picture: string;
};

export type HomePageExperience = {
    _id: string;
    _createdAt: Date;
    name: string;
    company: string;
    role: string;
    startDate: Date;
    endDate: Date;
    description: PortableTextBlock;
    companyPicture: string;
    companyURL: string;
    skills: IExperienceSkills[];
    techTags: ITechTag[];
    year: string;
};
