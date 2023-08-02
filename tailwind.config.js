/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            krona: ["Krona One", "sans-serif"],
            inter: ["Inter", "sans-serif"],
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
        colors: {
            primary: "#0F5EDF",
            secondary: "#B1CFFF",
            newBlue: "#3381FF",
            text: "#001538",
            white: "#ffff",
            grey: "#8091A6",
            button: "#2D68CA",
            badges: "#5593F6",
            contact: "#0061FF14",
            form: "#93BCFF80",
            testimonial: "#497CD0",
            "testimonial-text": "#9FC4FF",
        },
        boxShadow: {
            button: "0px 0px 5px 1px #B1CFFF",
        },
    },
    plugins: [],
};
