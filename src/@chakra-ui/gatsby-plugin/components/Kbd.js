import { mode } from "@chakra-ui/theme-tools";

export const Kbd = {
	baseStyle: (props) => ({
		opacity: 0.7,
		fontSize: "lg",
		fontFamily: "mono",
		borderStyle: "solid",
		borderWidth: "2px",
		borderBottomWidth: "8px",
		transition: "all 50ms linear",
		bg: mode("app.light.dusk.300", "app.dark.dusk.300")(props),
		color: mode("app.light.dawn.300", "app.dark.dawn.300")(props),
		borderColor: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
	}),
	variants: {
		press: (props) => ({
			opacity: 1,
			borderBottomWidth: "2px",
			color: mode("app.light.dawn.200", "app.dark.dawn.200")(props),
			borderColor: mode("app.light.dusk.100", "app.dark.dusk.100")(props),
		}),
	},
};
