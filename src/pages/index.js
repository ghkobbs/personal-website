import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import { profilepic, nodejs, css3, js, php, mongodb, git, express } from '../images/'

const HomePage = () => {
    const { site, allMarkdownRemark } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            },
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            role
                        }
                        fields {
                            slug
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
            <div class={LayoutStyles.container}>
                <section className={LayoutStyles.topSection}>
                    <div className={LayoutStyles.introSection+ " " +LayoutStyles.leftSection}>
                        <div className={LayoutStyles.introSectionWrapper}>
                            <div className={LayoutStyles.introSectionInnerWrapper}>
                                <p><span className={LayoutStyles.greeting}>Hello!</span> I am Maxwell, a full-stack web developer based in Accra, Ghana. I enjoy creating user-centric, delightful and human experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className={LayoutStyles.introSection+ " " +LayoutStyles.rightSection}>
                        <div className={LayoutStyles.introSectionWrapper}>
                            <div className={LayoutStyles.introSectionInnerWrapper}>
                                <img src={profilepic} alt={site.siteMetadata.author}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={LayoutStyles.middleSection}>
                    <div className={LayoutStyles.middleSectionWrapper}>
                        <div className={LayoutStyles.middleSectionInnerWrapper}>
                            <div className={LayoutStyles.portfolioWrapper}>
                                <div className={LayoutStyles.portfolioInnerWrapper}>
                                    <h3 className={LayoutStyles.middleSectionTitle}>Featured</h3>
                                    <ul className={LayoutStyles.portfolio}>
                                        { allMarkdownRemark.edges.map((edge) => {
                                            return (
                                                <li className={LayoutStyles.portfolioItem}>
                                                    <Link to={`/projects/${edge.node.fields.slug}`} className={LayoutStyles.link}><h3>{ edge.node.frontmatter.title }</h3></Link>
                                                    <h4>{ edge.node.frontmatter.role }</h4>
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
