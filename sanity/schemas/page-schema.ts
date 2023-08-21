const page = {
    name: "page",
    title: "page",
    type: "document",
    fields: [
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name: "introductionTitle",
            title: "Introduction Title",
            type: "string",
        },
        {
            name: "introduction",
            title: "Introduction",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "profilePicture",
            title: "Profile Picture",
            type: "image",
            options: {
                hospot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "descriptionTitle",
            title: "Description Title",
            type: "string",
        },
        {
            name: "descriptionText",
            title: "Description Text",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "skillName",
                            title: "Skill Name",
                            type: "string",
                        },
                        {
                            name: "startDate",
                            title: "Start Date",
                            type: "date",
                        },
                        {
                            name: "icon",
                            icon: "string",
                            title: "Icon",
                            type: "string", // Keeping it as "string" for URL or reference
                        },
                    ],
                },
            ],
            options: {
                layout: "tags", // Display skills in a grid layout
            },
        },
    ],
};

export default page;
