import { useContext } from "react";
import { LanguageContext } from "lib/LanguageContext";
import {
	Header,
	Hero,
	About,
	Experience,
	Projects,
	Contact,
	Language,
} from "lib/types/language.types";

import content_en from "content/content-en.json";
import content_ur from "content/content-ur.json";

export function useTranslation(section: "header"): Header;
export function useTranslation(section: "hero"): Hero;
export function useTranslation(section: "about"): About;
export function useTranslation(section: "experience"): Experience;
export function useTranslation(section: "projects"): Projects;
export function useTranslation(section: "contact"): Contact;

export function useTranslation(section: any) {
	const { language } = useContext(LanguageContext);
	return languages[language][section as keyof Language];
}

export const languages: { [language: string]: Language } = {
	en: content_en,
	ur: content_ur,
};
