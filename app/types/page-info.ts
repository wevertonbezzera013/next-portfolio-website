import { RichTextContent } from "@graphcms/rich-text-types";
import { Skills } from "./projects";

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    };
    introductionTitle: string;
    descriptionText: {
        raw: RichTextContent;
    };
    skills: Skills[];
    profilePicture: {
        url: string;
    };
    badge: string;
    descriptionTitle: string;
    heroSectionItems: string;
};

export type HomePageData = {
    page: HomePageInfo;
};
