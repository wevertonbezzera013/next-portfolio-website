/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            krona: ['Krona One', 'sans-serif'],
            inter: ['Inter', 'sans-serif']
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
        colors: {
            primary: '#0F5EDF',
            secondary: '#B1CFFF',
            newBlue: '#3381FF',
            text: '#001538',
            white: '#ffff',
            grey: '#8091A6'
        }
    },
    plugins: [],
}
