const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class',
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: { max: '639px' },
				...defaultTheme.screens
			},
			fontSize: {
				xxs: ['0.65rem', {}],
				...defaultTheme.fontSize
			},
			colors: {
				portfolio: {
					// 50: '#e5e5fb',
					// 100: '#cbccf6',
					// 200: '#0c0f11',
					// 300: '#0B1F3F38',
					// 400: '#0B1F3F',
					// 500: '#FFD009',
					// 600: '#E3BD1E',
					// 700: '#002C73',
					// 800: '#002C73B8',
					900: '#04050a',
				}
			}
		},
	},
	plugins: [],
};
export default config;