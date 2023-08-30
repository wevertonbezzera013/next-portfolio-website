import { PortableTextBlock } from "@sanity/types";
import {
    ISkills,
    ITestimonials,
    IProject,
    ITechTag,
    IExperienceSkills,
} from "./projects";

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
