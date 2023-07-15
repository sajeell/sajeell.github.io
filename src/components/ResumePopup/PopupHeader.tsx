/**
 * Base
 */
import React from "react";

/**
 * Utilities
 */
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import {
	Heading,
	PopoverArrow,
	PopoverCloseButton,
	PopoverHeader,
	useColorMode,
} from "@chakra-ui/react";

export const PopupHeader: React.FC = () => {
	const { resume: t_Resume } = useTranslation("header");
	const { colorMode } = useColorMode();

	return (
		<>
			<PopoverHeader fontWeight="bold" border="0">
				<Heading variant="h6" as="h5">
					{t_Resume.head}
				</Heading>
			</PopoverHeader>
			<PopoverArrow
				bg={`app.${colorMode}.dusk.300`}
				borderColor={`app.${colorMode}.dusk.200`}
			/>
			<PopoverCloseButton />
		</>
	);
};
