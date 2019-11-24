import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import { profile, nodejs, css3, js, php, mongodb, git, express } from '../images/'

const HomePage = () => {
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
                },
                limit: 5
            ) {
                edges {
                    node {
                        title
                        slug
                        role
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
                <section className={LayoutStyles.topSection}>
                    <div className={LayoutStyles.introSection+ " " +LayoutStyles.leftSection}>
                        <div className={LayoutStyles.introSectionWrapper}>
                            <div className={LayoutStyles.introSectionInnerWrapper}>
                                <p><span className={LayoutStyles.greeting}>Hello!</span> I am Maxwell, a full-stack web developer based in Accra, Ghana. I enjoy creating a clean and user-friendly website using the latest trends and modern solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className={LayoutStyles.introSection+ " " +LayoutStyles.rightSection}>
                        <div className={LayoutStyles.introSectionWrapper}>
                            <div className={LayoutStyles.introSectionInnerWrapper}>
                                <img src={profile} alt={site.siteMetadata.author}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={LayoutStyles.middleSection}>
                    <div className={LayoutStyles.middleSectionWrapper}>
                        <div className={LayoutStyles.middleSectionInnerWrapper}>
                            <div className={LayoutStyles.portfolioWrapper}>
                                <div className={LayoutStyles.portfolioInnerWrapper}>
                                    <h3 className={LayoutStyles.middleSectionTitle}>Works</h3>
                                    <ul className={LayoutStyles.portfolio}>
                                        { allContentfulProjectItem.edges.map((edge) => {
                                            return (
                                                <li key={edge.toString()} className={LayoutStyles.portfolioItem}>
                                                    <Link to={`/projects/${edge.node.slug}`} className={LayoutStyles.link}><h3>{ edge.node.title }</h3></Link>
                                                    <h4>{ edge.node.role }</h4>
                                                </li>
                                            )
                                        })}                                        
                                    </ul>
                                </div>
                            </div>
                            <div className={LayoutStyles.stacksWrapper}>
                                <div className={LayoutStyles.stacksInnerWrapper}>
                                    <h3 className={LayoutStyles.middleSectionTitle}>Stacks</h3>
                                    <ul className={LayoutStyles.stacks}>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={nodejs} alt="Nodejs" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={mongodb} alt="Mongodb" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={express} alt="Expressjs" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={js} alt="Javascript" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={php} alt="PHP: Hypertext Preprocessor" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={css3} alt="Cascading Stylesheet" />
                                        </li>
                                        <li className={LayoutStyles.stacksItem}>
                                            <img src={git} alt="Git" />
                                        </li>
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

export default HomePage
