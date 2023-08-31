import { PortableTextBlock } from "@sanity/types";
import { type } from "os";

export type ISkills = {
    skillName: string;
    icon: string;
    startDate: string;
};

export type ITestimonials = {
    _id: string;
    name: string;
    content: string;
    title: string;
    socialMediaLink: string;
    picture: string;
};

export type ITechTag = {
    _id: string;
    _createdAt: Date;
    name: string;
    tech: string;
};

export type IExperienceSkills = {
    _id: string;
    _createdAt: Date;
    name: string;
    skillDescription: PortableTextBlock;
};

export type Ilinks = {
    _id: string;
    linkName: string;
    icon: string;
    url: string;
};
