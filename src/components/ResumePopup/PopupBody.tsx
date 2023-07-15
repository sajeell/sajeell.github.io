/**
 * Base
 */
import React from "react";

/**
 * Utilities
 */
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import { Box, Heading, Icon, Link, PopoverBody, Text } from "@chakra-ui/react";

export const PopupBody: React.FC = () => {
	const { resume: t_Resume } = useTranslation("header");
	return (
		<PopoverBody>
			{t_Resume.copy.map((t) => (
				<Text key={uuidv4()} fontSize="md">
					{t}
				</Text>
			))}
			{t_Resume.variants.map((v) => (
				<Box key={uuidv4()} mt="6">
					<Heading variant="h7" as="h6">
						{v.head}
					</Heading>
					<Link href={v.dark.url} isExternal variant="simple-link">
						{v.dark.text} <ExternalLink />
					</Link>
					<Link href={v.light.url} isExternal variant="simple-link">
						{v.light.text} <ExternalLink />
					</Link>
					<Link href={v.print.url} isExternal variant="simple-link">
						{v.print.text} <ExternalLink />
					</Link>
				</Box>
			))}
		</PopoverBody>
	);
};

const ExternalLink: React.FC = () => (
	<Icon
		icon="feather:external-link"
		style={{ display: "inline", marginLeft: "0.25rem" }}
	/>
);
