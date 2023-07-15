/**
 * Base
 */
import React, { useCallback, useEffect, useMemo, useRef } from "react";

/**
 * Utilities
 */
import { LanguageProvider } from "lib/LanguageContext";
import { LS_MODE } from "lib/constants";

/**
 * Components
 */
import { Header } from "components/Header";
import { Ribbon } from "components/Ribbon";
import { SEO } from "components/SEO";

/**
 * Sections
 */
import { Hero } from "components/home/Hero";
import { About } from "components/home/About";
import { Experience } from "components/home/Experience";
import { Projects } from "components/home/Projects";
import { Contact } from "components/home/Contact";

/**
 * Chakra UI
 */
import { useColorMode } from "@chakra-ui/color-mode";

export type DivRef = React.MutableRefObject<HTMLDivElement>;

const IndexPage: React.FC = () => {
	const initialLoad = useRef(true);
	const header = useRef() as DivRef;
	const hero = useRef() as DivRef;
	const about = useRef() as DivRef;
	const experience = useRef() as DivRef;
	const projects = useRef() as DivRef;
	const contact = useRef() as DivRef;

	const { colorMode, setColorMode } = useColorMode();

	const refs = useMemo(
		() => ({
			header: header,
			hero: hero,
			about: about,
			experience: experience,
			projects: projects,
			contact: contact,
		}),
		[]
	);

	useEffect(() => {
		if (initialLoad.current) {
			const mode = window.localStorage.getItem(LS_MODE);
			if (mode && ["light", "dark"].includes(mode)) setColorMode(mode);

			initialLoad.current = false;
		} else window.localStorage.setItem(LS_MODE, colorMode);
	}, [colorMode]);

	const handleModeChange = useCallback((e: any) => {
		setColorMode(e.matches ? "dark" : "light");
	}, []);

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleModeChange);

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleModeChange);
		};
	}, []);

	return (
		<main style={{ overflowX: "hidden" }}>
			<SEO />
			<LanguageProvider>
				<Header ref={header} refs={refs} />
				<Hero ref={hero} headerRef={header} aboutRef={about} />
				<About ref={about} />
				<Experience ref={experience} />
				<Projects ref={projects} />
				<Contact ref={contact} />

				<Ribbon />
			</LanguageProvider>
		</main>
	);
};

export default IndexPage;
