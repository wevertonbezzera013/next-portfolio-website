import { RichTextContent } from "@graphcms/rich-text-types";
import { Project, Skills } from "./projects";

export type HomePageInfo = {
    badges: {
        name: string;
    }[];
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

    descriptionTitle: string;
};

export type HomePageData = {
    page: HomePageInfo;
};
