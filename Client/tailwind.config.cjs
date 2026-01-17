/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
            },
            colors: {
                primary: '#5B21B6',
                dark: '#4C1D95',
                lighter: '#F5F3FF',
                light: '#DDD6FE',
            },
        },
    },
    plugins: [],
}
