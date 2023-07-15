/**
 * React
 */
import React, { useCallback, useEffect, useState } from "react";

/**
 * Utilities
 */
import { useTranslation } from "lib/hooks/useTranslation";

/**
 * Chakra UI
 */
import {
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
	Code,
	Button,
	Image,
	useColorMode,
} from "@chakra-ui/react";

/**
 * Images
 */
import fullDark from "../../images/illo-full-dark.svg";
import fullLight from "../../images/illo-full-light.svg";

interface HeroProps {
	headerRef: React.MutableRefObject<HTMLDivElement>;
	aboutRef: React.MutableRefObject<HTMLDivElement>;
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
	({ headerRef, aboutRef }, ref) => {
		const [maxH, setMaxH] = useState<number>();

		const { colorMode } = useColorMode();
		const _t = useTranslation("hero");

		useEffect(() => {
			if (typeof window === "undefined") return;

			const headerH = headerRef.current?.getBoundingClientRect().height;
			const newMaxH = window.innerHeight - headerH * 2;
			setMaxH(newMaxH);
		}, [headerRef]);

		const scrollToAbout = useCallback((e: React.MouseEvent<any>) => {
			e.preventDefault();
			aboutRef.current.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}, []);

		return (
			<Container
				ref={ref}
				id="hero"
				maxW={[
					"100%",
					"container.sm",
					"container.md",
					"container.lg",
					"container.xl",
					"container.xl",
				]}
				pt={["48", "48", "48", "0"]}
			>
				<Grid
					templateColumns="repeat(12, 1fr)"
					placeContent="center"
					rowGap="16"
					maxH={["max-content", "max-content", "max-content", `${maxH}px`]}
					h={["auto", "auto", "auto", "100vh"]}
				>
					<GridItem
						colSpan={[12, 12, 12, 6, 6, 6]}
						colStart={[1, 1, 1, 2, 2, 2]}
						textAlign={["center", "center", "center", "left"]}
					>
						<Code>{_t.intro}</Code>
						<Heading variant="h1" as="h1">
							{_t.head}
						</Heading>
						<Heading variant="h2" as="h2">
							{_t.subhead}
						</Heading>
						<Text
							mt="4"
							mx={["auto", "auto", "auto", "0"]}
							maxW={["22rem", "22rem", "22rem", "24rem", "100%"]}
						>
							{_t.copy}
						</Text>
						<Button mt="12" onClick={scrollToAbout}>
							{_t.cta}
						</Button>
					</GridItem>

					<GridItem colSpan={[12, 12, 12, 4]}>
						<Image
							src={colorMode == "dark" ? fullDark : fullLight}
							alt="Character using laptop"
							ml="auto"
							mr={["auto", "auto", "auto", "0"]}
							htmlWidth="236"
							htmlHeight="341"
						/>
					</GridItem>
				</Grid>
			</Container>
		);
	}
);
