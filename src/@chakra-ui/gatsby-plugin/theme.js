import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";
import { fonts } from "./fonts";
import { colors } from "./colors";
import { styles } from "./styles";
import { components } from "./components";

const theme = {
	config,
	fonts,
	colors,
	styles,
	components,
};

export default extendTheme(theme);
