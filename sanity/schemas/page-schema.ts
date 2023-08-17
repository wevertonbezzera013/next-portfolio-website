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
    ],
};

export default page;
