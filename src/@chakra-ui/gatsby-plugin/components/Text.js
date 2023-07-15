import { mode } from "@chakra-ui/theme-tools";
import { underlineLink } from "./util/underlineLink";

export const Text = {
	variants: {
		tech: {
			fontFamily: "mono",
			fontSize: "md",
		},
		light: (props) => ({
			color: mode("app.light.dawn.100", "app.dark.dawn.100")(props),
		}),
		"highlight-off": (props) => ({
			...underlineLink(props),
			lineHeight: "1.25rem",
		}),
		"highlight-on": (props) => ({
			...underlineLink(props, true),
			lineHeight: "1.25rem",
			color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
		}),
	},
};
