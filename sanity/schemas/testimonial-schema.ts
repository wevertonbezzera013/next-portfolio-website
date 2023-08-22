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
            type: "url",
        },
        {
            name: "picture",
            title: "Picture",
            type: "image",
            options: {
                hospot: true,
            },
        },
    ],
};

export default testimonial;
