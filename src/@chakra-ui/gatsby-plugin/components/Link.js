import { mode } from "@chakra-ui/theme-tools";
import { underlineLink } from "./util/underlineLink";

export const Link = {
	baseStyle: {
		textDecoration: "none !important",
		borderRadius: "md",
	},
	variants: {
		icon: (props) => ({
			p: "3",
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			"&:hover": {
				color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
			},
		}),
		nav: (props) => ({
			...underlineLink(props),
			"&:after": {
				bottom: "0.5rem",
			},
			position: "relative",
			p: 2,
			fontSize: "md",
			fontFamily: "mono",
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
			"&:hover": {
				color: mode("app.light.white", "app.dark.white")(props),
			},
		}),
		external: (props) => ({
			...underlineLink(props),
			"&:after": {
				bottom: "0.15rem",
			},
		}),
		"simple-link": (props) => ({
			py: 1,
			display: "flex",
			alignItems: "center",
			fontSize: "md",
			color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
			"&:hover": {
				textDecoration: "underline !important",
			},
		}),
	},
};
