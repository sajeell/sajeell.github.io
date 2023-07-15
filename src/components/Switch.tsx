import React from "react";
import { Text, Button, Box, useColorMode } from "@chakra-ui/react";

interface SwitchProps {
	icon: any;
	active: boolean;
	onToggle: () => void;
	fontSize?: string;
}

export const Switch: React.FC<SwitchProps> = ({
	icon,
	active,
	onToggle,
	fontSize,
}) => {
	const { colorMode } = useColorMode();

	return (
		<Button
			variant=""
			pos="relative"
			d="flex"
			justifyContent="start"
			alignItems="center"
			borderRadius="3xl"
			p="1"
			w="16"
			h="auto"
			fontSize={fontSize ?? "xl"}
			onClick={onToggle}
			bg={`app.${colorMode}.dusk.200`}
		>
			<Box
				as="span"
				pos="relative"
				borderRadius="full"
				p="1"
				w="7"
				h="7"
				transform="auto"
				translateX={active ? "0" : "100%"}
				bg={`app.${colorMode}.dusk.300`}
				transition="all 0.2s ease-out 0s"
			>
				<Text
					as="span"
					pos="absolute"
					inset="0"
					d="flex"
					justifyContent="center"
					alignItems="center"
				>
					{icon}
				</Text>
			</Box>
		</Button>
	);
};
