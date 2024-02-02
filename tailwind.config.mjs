/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"satoshi": ["Satoshi", ...defaultTheme.fontFamily.sans],
				"thunder": ["Thunder"],
			},
			colors: {
				accent: "#1a3c2a",
				background: "#fff9eb",
				
		},
	},
	plugins: [],
}
}
