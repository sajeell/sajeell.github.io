const path = require("path");

module.exports = {
	siteMetadata: {
		url: "https://sajeell.github.io",
		siteUrl: "https://sajeell.github.io",
		title: "Sajeel Ahmad",
		titleTemplate: "%s – Making web go brrr.",
		description:
			"A software engineer specializing in full-stack web development with primary focus on the back-end technologies.",
		image: "/thumbnail.png",
		keywords: [
			"software engineer",
			"web developer",
			"full-stack developer",
			"full-stack web developer",
			"full-stack",
			"web development",
			"software development",
			"software engineer",
			"software",
			"engineer",
			"developer",
			"web",
			"development",
			"design",
			"designer",
			"ui",
			"ux",
			"ui/ux",
			"ui/ux designer",
			"ui/ux developer",
			"ui/ux engineer",
			"ui/ux designer developer",
			"ui/ux designer engineer",
			"ui/ux developer engineer",
			"ui/ux designer developer engineer",
			"ui/ux developer designer engineer",
			"ui/ux engineer developer designer",
			"ui/ux engineer designer developer",
			"ui/ux developer designer",
			"ui/ux designer developer",
			"ui/ux designer engineer",
			"ui/ux engineer designer",
			"ui/ux engineer developer",
			"ui/ux developer engineer",
			"ui/ux developer designer engineer",
			"ui/ux designer developer engineer",
			"ui/ux engineer developer designer",
			"ui/ux engineer designer developer",
			"ui/ux designer developer engineer",
			"ui/ux developer designer engineer",
			"ui/ux developer engineer designer",
			"ui/ux engineer developer designer",
			"ui/ux engineer designer developer"
		]
	},
	plugins: [
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				src: path.join(__dirname, "src"),
				pages: path.join(__dirname, "src/pages"),
				components: path.join(__dirname, "src/components"),
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "@chakra-ui/gatsby-plugin",
			options: {
				resetCSS: true,
				isUsingColorMode: true,
			},
		},
	],
};
