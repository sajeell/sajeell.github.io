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
import { Container, Box, Heading, Text, Code, Button } from "@chakra-ui/react";

interface ContactProps {}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
	({}, ref) => {
		const _t = useTranslation("contact");

		return (
			<Container id="contact" maxW="container.md" py="40" ref={ref}>
				<Box px="4" textAlign="center">
					<Code>{_t.intro}</Code>
					<Heading variant="h3" as="h3">
						{_t.head}
					</Heading>
					{_t.copy.map((t) => (
						<Text key={uuidv4()} mt="4">
							{t}
						</Text>
					))}
					<Button mt="12" as="a" href="mailto:info@unesic.io">
						{_t.cta}
					</Button>
				</Box>
			</Container>
		);
	}
);
