import { PortableTextBlock } from "@sanity/types";
import { Project, ISkills } from "./projects";

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

export type HomePageData = {
    page: HomePageInfo;
};
