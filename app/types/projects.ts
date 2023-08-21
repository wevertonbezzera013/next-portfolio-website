import { PortableTextBlock } from "@sanity/types";

export type ISkills = {
    skillName: string;
    icon: string;
    startDate: string;
};

export type Project = {
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
