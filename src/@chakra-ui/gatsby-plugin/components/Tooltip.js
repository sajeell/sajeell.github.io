import { mode } from "@chakra-ui/theme-tools";

export const Tooltip = {
	baseStyle: (props) => ({
		fontSize: "xs",
		fontFamily: "mono",
		maxW: "16rem",
		color: mode("app.light.dawn.200", "app.dark.dawn.200")(props),
	}),
};
