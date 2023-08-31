const highlightedProject = {
    name: "highlightedProject",
    title: "Highlighted Project",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "array",
            of: [{ type: "block" }],
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
            name: "imageOne",
            title: "Image One",
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
            name: "imageTwo",
            title: "Image Two",
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
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
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
    ],
};

export default highlightedProject;
