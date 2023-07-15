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
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
	useColorMode,
} from "@chakra-ui/react";

/**
 * Components
 */
import { PopupHeader } from "./PopupHeader";
import { PopupBody } from "./PopupBody";
import { PopupFooter } from "./PopupFooter";

interface ResumePopupProps {}

export const ResumePopup: React.FC<ResumePopupProps> = () => {
	const { resume: t_Resume } = useTranslation("header");
	const { colorMode } = useColorMode();

	return (
		<Popover placement="bottom" closeOnBlur>
			<PopoverTrigger>
				<Button>{t_Resume.buttons.cta}</Button>
			</PopoverTrigger>

			<PopoverContent
				py="2"
				w="sm"
				bg={`app.${colorMode}.dusk.300`}
				borderColor={`app.${colorMode}.dusk.200`}
			>
				<PopupHeader />
				<PopupBody />
				<PopupFooter />
			</PopoverContent>
		</Popover>
	);
};
