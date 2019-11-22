const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const projectTemplate = path.resolve('./src/templates/projects.js')
	
	const response = await graphql(`
		query {
			allContentfulProjectItem {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	response.data.allContentfulProjectItem.edges.forEach(edge => {
		createPage({
			component: projectTemplate,
			path: `/projects/${ edge.node.slug }`,
			context: {
				slug: edge.node.slug
			}
		})
	});

}