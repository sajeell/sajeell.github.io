/**
 * Base
 */
import React, { useContext, useMemo } from "react";

/**
 * Utilities and types
 */
import dayjs from "dayjs";
import "dayjs/locale/sr";
import { v4 as uuidv4 } from "uuid";
import {
	Job as IJob,
	Experience as IExperience,
} from "lib/types/language.types";
import { LanguageContext, Language as ELanguage } from "lib/LanguageContext";

/**
 * Chakra UI
 */
import {
	Box,
	List,
	ListItem,
	Text,
	Link,
	useColorMode,
} from "@chakra-ui/react";

type JobProps = IJob & Pick<IExperience, "labels">;

export const Job: React.FC<JobProps> = ({
	title,
	date,
	company,
	items,
	labels,
}) => {
	const { colorMode } = useColorMode();
	const { language } = useContext(LanguageContext);

	const formattedDate = useMemo(() => {
		dayjs.locale(language);

		const format = "MMMM, YYYY";
		const fromFormatted = dayjs(date.from).format(format);
		const dayjsTo = dayjs(date.to);
		const toFormatted = dayjsTo.isValid() ? dayjsTo.format(format) : date.to;

		return `${fromFormatted} - ${toFormatted}`;
	}, [date, language]);

	const formattedPeriod = useMemo(() => {
		const to = dayjs(date.to).isValid() ? date.to : Date.now();
		const monthDiffTotal = dayjs(to).diff(date.from, "months") + 1;
		const yearDiff = Math.floor(monthDiffTotal / 12);
		const monthDiff = monthDiffTotal % 12;

		const isEN = language === ELanguage.EN;

		const yearLabelEN = +!!(yearDiff - 1);
		const yearLabelSR = [2, 3, 4].includes(yearDiff) ? 1 : 0;
		const yearLabel = labels.year[isEN ? yearLabelEN : yearLabelSR];

		const monthLabelEN = +!!(monthDiff - 1);
		const monthLabelEdgeSR = [2, 3, 4].includes(monthDiff) ? 1 : 2;
		const monthLabelSR = monthDiff === 1 ? 0 : monthLabelEdgeSR;
		const monthLabel = labels.month[isEN ? monthLabelEN : monthLabelSR];

		const period = (
			<Text as="span" opacity={0.5}>
				({yearDiff ? `${yearDiff} ${yearLabel}` : ""}
				{monthDiff ? ` ${monthDiff} ${monthLabel}` : ""})
			</Text>
		);

		return period;
	}, []);

	return (
		<Box>
			<Text variant="light" mt="4">
				{title}{" "}
				<Text as="span" color={`app.${colorMode}.accent.solid`}>
					@{" "}
					<Link variant="external" href={company.url} isExternal>
						{company.name}
					</Link>
				</Text>
			</Text>
			<Text variant="tech">
				{formattedDate} {formattedPeriod}
			</Text>
			<List spacing="2" mt="4" className="tech-list">
				{items.map((item) => (
					<ListItem key={uuidv4()}>{item}</ListItem>
				))}
			</List>
		</Box>
	);
};
