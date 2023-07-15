import { mode } from "@chakra-ui/theme-tools";

export const Button = {
	variants: {
		app: (props) => ({
			height: 12,
			border: "2px solid",
			borderColor: mode(
				"app.light.accent.solid",
				"app.dark.accent.solid"
			)(props),
			fontFamily: "mono",
			color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
			"&:hover": {
				bg: mode("app.light.accent.clear", "app.dark.accent.clear")(props),
			},
		}),
	},
	defaultProps: {
		variant: "app",
	},
};
