/**
 * Base
 */
import React, { useMemo } from "react";

/**
 * Utilities
 */
import { v4 as uuidv4 } from "uuid";

/**
 * Chakra UI
 */
import { Box, Text, Button, Link } from "@chakra-ui/react";

interface MenuItemProps {
	href?: string;
	char: number;
	on: boolean;
	isBtn?: boolean;
	children: string;
	target: string;
	onClick?: (e: any) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
	href,
	char,
	on,
	isBtn,
	children,
	...rest
}) => {
	const text = useMemo(() => {
		const split = children.split("");

		const head = (
			<Text key={uuidv4()} as="span">
				{[...split].splice(0, char).join("")}
			</Text>
		);

		const highlight = (
			<Text key={uuidv4()} as="span" variant={`highlight-${on ? "on" : "off"}`}>
				{split[char]}
			</Text>
		);

		const tail = (
			<Text key={uuidv4()} as="span">
				{[...split].splice(char + 1).join("")}
			</Text>
		);

		return [head, highlight, tail];
	}, [on, children]);

	return isBtn ? (
		<Box>
			<Button as="a" href={href ?? "#"} {...rest} ml="3">
				<Text as="span">{text}</Text>
			</Button>
		</Box>
	) : (
		<Link href={href ?? "#"} variant="nav" {...rest}>
			{text}
		</Link>
	);
};
