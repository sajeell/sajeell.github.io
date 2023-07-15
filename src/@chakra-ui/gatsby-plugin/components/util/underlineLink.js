import { mode } from "@chakra-ui/theme-tools";

export const underlineLink = (props, wfull = false) => ({
	position: "relative",
	display: "inline-block",
	"&::after": {
		content: "''",
		position: "absolute",
		left: "0",
		bottom: "-0.15rem",
		display: "block",
		width: wfull ? "100%" : "0",
		height: "1px",
		transition: "width 0.1s ease-in-out 0s",
		bg: mode("app.light.accent.solid", "app.dark.accent.solid")(props),
	},
	"&:hover::after": {
		width: "100%",
	},
});
