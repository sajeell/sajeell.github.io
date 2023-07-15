export interface NavItem {
	id: string;
	label?: string;
	nav: {
		num: number;
		char: string;
	};
	isBtn?: boolean;
	url?: string;
}

export enum ResumeVariants {
	DARK = "dark",
	LIGHT = "light",
	PRINT = "print",
}

export interface Resume {
	head: string;
	copy: string[];
	variants: {
		head: string;
		[ResumeVariants.DARK]: { text: string; url: string };
		[ResumeVariants.LIGHT]: { text: string; url: string };
		[ResumeVariants.PRINT]: { text: string; url: string };
	}[];
	buttons: {
		cta: string;
		default: string;
		pack: string;
	};
}

export interface Header {
	tooltip: string;
	nav: NavItem[];
	resume: Resume;
}

export interface Hero {
	intro: string;
	head: string;
	subhead: string;
	copy: string;
	cta: string;
}

export interface About {
	intro: string;
	head: string;
	copy: string[];
	tech: string[][];
}

export interface Job {
	title: string;
	date: {
		from: string;
		to: string | null;
	};
	company: {
		name: string;
		url: string;
	};
	items: string[];
}

export interface Experience {
	intro: string;
	head: string;
	labels: {
		year: string[];
		month: string[];
	};
	jobs: Job[];
}

export interface Project {
	head: string;
	title: string;
	desc: string;
	stack: string[][];
	links: {
		type: string;
		link: string;
	}[];
	images: {
		light: string;
		dark: string;
	};
}

export interface Projects {
	intro: string;
	head: string;
	copy: string;
	projects: Project[];
}
export interface Contact {
	intro: string;
	head: string;
	copy: string[];
	cta: string;
}

export interface Language {
	language: string;
	header: Header;
	hero: Hero;
	about: About;
	experience: Experience;
	projects: Projects;
	contact: Contact;
}
