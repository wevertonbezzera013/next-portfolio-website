import { RichTextContent } from "@graphcms/rich-text-types";

export type Skills = {
    name: string;
    iconSvg: string;
    startDate: string;
};

export type Project = {
    slug: string;
    thumbnail: {
        url: string;
    };
    pageImageOne: {
        url: string;
    };
    pageImageTwo: {
        url: string;
    };
    badges: string;
    shortDscription: string;
    description: {
        raw: string;
    };
    projectTitle: string;
    githubUrl?: string;
    liveProjectUrl?: string;
};
