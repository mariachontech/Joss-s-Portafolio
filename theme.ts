import { buildLegacyTheme } from "sanity"

const props = {
	"--my-white": "#fff",
	"--my-black": "#010A30",
	"--mariachon-brand": "#E66400",
	"--my-red": "#960909",
	"--my-orange": "#E66400",
	"--my-green": "#0f9d58",
	"--my-gray": "#666",
}

export const myTheme = buildLegacyTheme({
	/* Base theme colors */
	"--black": props["--my-black"],
	"--white": props["--my-white"],

	"--gray": props["--my-gray"],
	"--gray-base": props["--my-gray"],

	"--component-bg": props["--my-black"],
	"--component-text-color": props["--my-white"],
	/* Brand */
	"--brand-primary": props["--mariachon-brand"],

	/* Default Button */

	"--default-button-color": props["--my-gray"],
	"--default-button-primary-color": props["--mariachon-brand"],
	"--default-button-success-color": props["--my-green"],
	"--default-button-danger-color": props["--my-red"],
	"--default-button-warning-color": props["--my-orange"],

	/* state  */

	"--state-info-color": props["--mariachon-brand"],
	"--state-success-color": props["--my-green"],
	"--state-danger-color": props["--my-red"],
	"--state-warning-color": props["--my-orange"],

	/* Navbar */

	"--main-navigation-color": props["--my-black"],
	"--main-navigation-color--inverted": props["--my-white"],

	"--focus-color": props["--mariachon-brand"],
})
