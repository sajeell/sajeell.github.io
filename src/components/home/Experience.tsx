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
 * Components and Chakra UI
 */
import { Job } from "components/partials/Job";
import { Container, Heading, Code } from "@chakra-ui/react";

interface ExperienceProps {}

export const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
	({}, ref) => {
		const _t = useTranslation("experience");

		return (
			<Container
				id="experience"
				maxW={[
					"100%",
					"container.sm",
					"container.md",
					"container.lg",
					"container.lg",
					"container.lg",
				]}
				px={["8", "8", "8", "12"]}
				py="32"
				ref={ref}
			>
				<Code>{_t.intro}</Code>
				<Heading variant="h3" as="h3">
					{_t.head}
				</Heading>
				{_t.jobs.map((job) => (
					<Job key={uuidv4()} {...job} labels={_t.labels} />
				))}
			</Container>
		);
	}
);
