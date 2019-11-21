/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Full-stack Developer`,
		description: `Freelance full stack Web Developer and Designer. I am available for freelance and remote contract jobs. You can reach me at maxkobbs@gmail.com`,
		author: `Maxwell Morrison`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'src',
			path: `${__dirname}/src/`
		}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugin: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
}
