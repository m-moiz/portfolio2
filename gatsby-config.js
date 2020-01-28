const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Portfolio site for author Muhammad Moiz.`,
		author: `@muhammadmoiz`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`
				// This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
