const testimonial = {
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "socialMediaLink",
            title: "Social Media Link",
            type: "string",
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
    ],
};

export default testimonial;
