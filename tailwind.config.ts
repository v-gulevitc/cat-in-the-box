import type { Config } from "tailwindcss";

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
			},
			colors: {
				'ripe-mango': 'rgb(254,196,38)',
			},
			fontSize:{
				"6.25xl":"4rem"
			},
			spacing:{
				"13":"3.25rem"
			}
		},
	},
	plugins: [],
} satisfies Config
