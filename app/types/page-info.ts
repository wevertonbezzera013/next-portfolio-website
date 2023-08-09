import { RichTextContent } from "@graphcms/rich-text-types";
import { Project, Skills } from "./projects";

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    };
    introductionTitle: string;
    descriptionText: {
        raw: RichTextContent;
    };
    technologies: Skills[];
    profilePicture: {
        url: string;
    };
    badge: string;
    descriptionTitle: string;
    heroSectionItems: string;
    highlightedProjects: Project[];
};

export type HomePageData = {
    page: HomePageInfo;
};
