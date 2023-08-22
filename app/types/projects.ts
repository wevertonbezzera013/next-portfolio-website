import { PortableTextBlock } from "@sanity/types";

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

export type IProject = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    links: {
        _id: string;
        linkName: string;
        icon: string;
        url: string;
    };
    content: PortableTextBlock;
};
