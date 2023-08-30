const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "company",
            title: "Company",
            type: "string",
        },
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "companyPicture",
            title: "Company Picture",
            type: "image",
            options: {
                hospot: true,
            },
        },
        {
            name: "companyURL",
            title: "Company URL",
            type: "string",
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
                            name: "skillDescription",
                            title: "Skill Description",
                            type: "array",
                            of: [{ type: "block" }],
                        },
                    ],
                },
            ],
            options: {
                layout: "tags",
            },
        },

        {
            name: "techTags",
            title: "Tech Tags",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "tech",
                            title: "Tech",
                            type: "string",
                        },
                    ],
                },
            ],
            options: {
                layout: "tags",
            },
        },
        {
            name: "year",
            title: "Year",
            type: "string",
        },
    ],
};

export default experience;
