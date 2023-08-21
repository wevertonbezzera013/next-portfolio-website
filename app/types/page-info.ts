import { PortableTextBlock } from "@sanity/types";
import { Project, ISkills } from "./projects";

export type HomePageProject = {
    _id: string;
    _createdAt: Date;
    name: string;
    projects: Project[];
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
    projects: Project[];
};
