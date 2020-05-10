import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

const WorkPage = () => {
    const { site, allContentfulProjectItem } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            },
            allContentfulProjectItem(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
											featuredImage {
												title
												file {
													url
												}
											}
											title
											slug
											role
											overview {
               					json
											}
                    }
                }
            }
        }
        `
    )
    return (
        <Layout>
            <SEO title={site.siteMetadata.author} description={site.siteMetadata.description} />            
            <div className={LayoutStyles.container}>
                <section className={LayoutStyles.workSection}>
                    <div className={LayoutStyles.workSectionWrapper}>
                        <div className={LayoutStyles.workSectionInnerWrapper}>
                            <div className={LayoutStyles.portfolioWrapper}>
                                <div className={LayoutStyles.portfolioInnerWrapper}>
                                    <ul className={LayoutStyles.portfolio}>
                                        { allContentfulProjectItem.edges.map((edge) => {
                                            return (
																							<li key={edge.node.slug.toString()} className={LayoutStyles.portfolioItem}>
																									<div className={LayoutStyles.portfolioItemInnerWrapper}>
																										<div className={LayoutStyles.portfolioItemImageContent}>
																											<img src={edge.node.featuredImage.file.url} alt={edge.node.featuredImage.title}/>
																										</div>
																										<div className={LayoutStyles.portfolioItemTextContent}>
																											<div className={LayoutStyles.portfolioHeading}>
																												<Link to={`/projects/${edge.node.slug}`} className={LayoutStyles.link}><h3>{ edge.node.title }</h3></Link>
																												<h4>{ edge.node.role }</h4>
																											</div>
																											<p className={LayoutStyles.portfolioDescription}>{ edge.node.overview.json.content[0].content[0].value.substr(0,100)}...</p>
																										</div>
																									</div>
																							</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default WorkPage