const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
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
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "linkName",
                            title: "Link Name",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "string",
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
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default project;
