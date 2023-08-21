export type ISkills = {
    skillName: string;
    icon: string;
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
