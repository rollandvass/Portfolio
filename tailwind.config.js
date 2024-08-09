/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "0.9rem",
        },
        screens: {
            "small": "640px",
            "medium": "768px",
            "large": "960px",
            "x-large": "1200px",
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
        },
        extend: {
            colors: {
                primary: '#121212',
                accent: {
                    DEFAULT: '#bb86fc',
                    hover: '#1f1a24',
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}