import { RichTextContent } from "@graphcms/rich-text-types";
import { Project, Skills } from "./projects";

export type HomePageInfo = {
    badges: {
        name: string;
    }[];
    introduction: {
        raw: string;
    };
    introductionTitle: string;
    descriptionText: {
        raw: string;
    };
    technologies: Skills[];
    profilePicture: {
        url: string;
    };
    slug: string;

    descriptionTitle: string;
    highlightedProjects: Project[];
};

export type HomePageData = {
    pages: HomePageInfo;
};
