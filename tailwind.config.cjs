/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Source Sans Pro", "sans-serif"],
			primary: ["Space Mono", "monospace"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
