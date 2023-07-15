/**
 * Base
 */
import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { LanguageContext } from "lib/LanguageContext";

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
	const { language } = useContext(LanguageContext);
	const { site } = useStaticQuery(query);
	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		defaultImage,
		titleTemplate,
	} = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: siteUrl,
	};

	return (
		<Helmet
			title={seo.title}
			titleTemplate={titleTemplate}
			htmlAttributes={{ lang: language.toLowerCase() }}
		>
			<meta charSet="utf-8" />

			<link rel="canonical" href="https://unesic.io/" />
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={seo.url} />
			<meta property="og:site_name" content="Uroš Nešić" />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:image:width" content="1600" />
			<meta property="og:image:height" content="900" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
		</Helmet>
	);
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
				defaultImage: image
			}
		}
	}
`;
