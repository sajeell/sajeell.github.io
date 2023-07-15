/**
 * Base
 */
import React, { useContext, useMemo } from "react";

/**
 * Utilities
 */
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "lib/hooks/useTranslation";
import { LanguageContext, Language as ELanguage } from "lib/LanguageContext";

/**
 * Chakra UI
 */
import {
	Container,
	Grid,
	GridItem,
	List,
	ListItem,
	Heading,
	Text,
	Code,
	Image,
} from "@chakra-ui/react";

import sajeel from "../../images/sajeel-ahmad.jpg";

interface AboutProps {}

export const About = React.forwardRef<HTMLDivElement, AboutProps>(({}, ref) => {
	const _t = useTranslation("about");
	const { labels } = useTranslation("experience");
	const { language } = useContext(LanguageContext);

	const monthDiff = useMemo(() => {
		const monthDiff = dayjs(new Date()).diff(new Date(98, 6, 1), "months");
		const monthDiffCen = monthDiff % 100;
		const monthDiffDec = monthDiffCen % 10;

		const isEdge = monthDiffCen > 10 && monthDiffCen < 20;
		const is234 = [2, 3, 4].includes(monthDiffDec);

		const monthLabel =
			language === ELanguage.EN
				? labels.month[monthDiffDec === 1 ? 0 : 1]
				: labels.month[isEdge ? 2 : monthDiffDec === 1 ? 0 : is234 ? 1 : 2];
		return `${monthDiff} ${monthLabel}`;
	}, [language]);

	return (
		<Container
			ref={ref}
			id="about"
			maxW={[
				"100%",
				"container.sm",
				"container.md",
				"container.lg",
				"container.xl",
				"container.xl",
			]}
			px={["8", "8", "24", "12"]}
			py="32"
		>
			<Code>{_t.intro}</Code>
			<Heading variant="h3" as="h3">
				{_t.head}
			</Heading>
			<Grid
				templateColumns="repeat(12, 1fr)"
				columnGap={["0", "0", "0", "20"]}
				rowGap={["8", "8", "16"]}
			>
				<GridItem colSpan={[12, 12, 12, 7]}>
					{_t.copy.map((t) => (
						<Text key={uuidv4()} marginTop="4">
							{t.replace("%months%", monthDiff)}
						</Text>
					))}
					<Grid
						templateColumns={[
							"repeat(1, 1fr)",
							"repeat(1, 1fr)",
							"repeat(2, 1fr)",
						]}
						gap="2"
						marginTop="5"
					>
						{_t.tech.map((tl) => (
							<List key={uuidv4()} spacing="2" className="tech-list">
								{tl.map((ti) => (
									<ListItem key={uuidv4()}>{ti}</ListItem>
								))}
							</List>
						))}
					</Grid>
				</GridItem>
				<GridItem colSpan={[12, 10, 10, 5]} colStart={[1, 2, 2, "auto"]}>
					<Image
						src={sajeel}
						opacity="0.6"
						_hover={{ opacity: 1 }}
						transition="opacity 0.2s ease-in-out 0s"
						alt="Sajeel Ahmad portrait"
						htmlWidth="1000"
						htmlHeight="1000"
						borderRadius="8"
					/>
				</GridItem>
			</Grid>
		</Container>
	);
});
