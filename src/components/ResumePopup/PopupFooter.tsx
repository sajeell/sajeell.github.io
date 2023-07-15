/**
 * Base
 */
import React, { useContext, useMemo } from "react";

/**
 * Utilities
 */
import { LanguageContext } from "lib/LanguageContext";
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import {
	Button,
	ButtonGroup,
	PopoverFooter,
	useColorMode,
} from "@chakra-ui/react";

export const PopupFooter: React.FC = () => {
	const { language } = useContext(LanguageContext);
	const { resume: t_Resume } = useTranslation("header");
	const { colorMode } = useColorMode();

	const defaultResumeURL = useMemo(() => {
		const lang = language.toUpperCase();
		const modeSplit = colorMode.split("");
		const mode = [modeSplit[0].toUpperCase(), ...modeSplit.splice(1)].join("");
		return `/resume/Uros-Nesic-Resume-${lang}-${mode}.pdf`;
	}, [language, colorMode]);

	return (
		<PopoverFooter border="0" mt="2">
			<ButtonGroup size="sm" spacing="4">
				<Button
					as="a"
					target="_blank"
					href={defaultResumeURL}
					aria-label="Download resume"
				>
					{t_Resume.buttons.default}
				</Button>
				<Button as="a" href="/resume/Uros-Nesic-Resume-Pack.zip" download>
					{t_Resume.buttons.pack}
				</Button>
			</ButtonGroup>
		</PopoverFooter>
	);
};
