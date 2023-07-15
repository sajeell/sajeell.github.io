import { mode } from "@chakra-ui/theme-tools";

export const Code = {
	baseStyle: {
		whiteSpace: "nowrap",
	},
	variants: {
		sub: (props) => ({
			bg: mode("app.light.dusk.200", "app.dark.dusk.200")(props),
			color: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
			py: 1,
			px: 2,
			fontSize: "md",
			fontWeight: "bold",
		}),
	},
	defaultProps: {
		variant: "sub",
	},
};
