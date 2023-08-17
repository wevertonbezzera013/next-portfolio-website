import { PortableTextBlock } from "@sanity/types";
import { Project, Skills } from "./projects";

export type Badge = {
    name: string;
};

export type Introduction = PortableTextBlock[];

export type DescriptionText = PortableTextBlock[];

export type ProfilePicture = {
    url: string;
};

export type HomePageInfo = {
    introduction: Introduction;
    introductionTitle: string;
    descriptionText: DescriptionText;
    profilePicture: ProfilePicture;
    descriptionTitle: string;
};

export type HomePageData = {
    page: HomePageInfo;
};
