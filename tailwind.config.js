/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"mariachon-blueDark": "#010A30",
				"mariachon-blueLight": "#05117F",
				"mariachon-red": "#960909",
				"mariachon-orange": "#E66400",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
}
