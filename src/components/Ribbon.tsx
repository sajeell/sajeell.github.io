/**
 * Base
 */
import React from "react";

/**
 * Utilities and types
 */
import { usePlatform } from "lib/hooks/usePlatform";

/**
 * Chakra UI
 */
import { Box, Stack, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface RibbonProps {}

export const Ribbon: React.FC<RibbonProps> = () => {
	const { isMacOS } = usePlatform();

	return (
		<Stack
			pos={["initial", "initial", "initial", "initial", "initial", "fixed"]}
			bottom="0"
			left="16"
			align="center"
			pb={[4, 4, 4, 4, 4, 0]}
		>
			<Stack direction={["row", "row", "row", "row", "row", "column"]}>
				<Link
					variant="icon"
					href="https://github.com/sajeell"
					isExternal
					aria-label="Github"
				>
					<Icon icon="feather:github" />
				</Link>
				<Link
					variant="icon"
					href="http://linkedin.com/in/sajeell/"
					isExternal
					aria-label="LinkedIn"
				>
					<Icon icon="feather:linkedin" />
				</Link>
				<Link
					variant="icon"
					href="mailto:sajeel.ahmed@live.com"
					isExternal
					aria-label="E-mail"
				>
					<Icon icon="feather:mail" />
				</Link>
			</Stack>

			<Box
				w="px"
				h="32"
				bg="app.dark.dawn.100"
				display={["none", "none", "none", "none", "none", "block"]}
			/>
		</Stack>
	);
};
