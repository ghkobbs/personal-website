import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import { profilepic, nodejs, css3, js, php, mongodb, git, express } from '../images/'

const WorkPage = () => {
    const { site } = useStaticQuery(
        graphql`
        query {
            site {
            siteMetadata {
                title
                description
                author
            }
            }
        }
        `
    )
    return (
        <Layout>
            <SEO title={site.siteMetadata.author} description={site.siteMetadata.description} />            
            <div class={LayoutStyles.container}>
                <section className={LayoutStyles.workSection}>
                    <div className={LayoutStyles.workSectionWrapper}>
                        <div className={LayoutStyles.workSectionInnerWrapper}>
                            <div className={LayoutStyles.portfolioWrapper}>
                                <div className={LayoutStyles.portfolioInnerWrapper}>
                                    <ul className={LayoutStyles.portfolio}>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
                                        </li>
                                        <li className={LayoutStyles.portfolioItem}>
                                            <a href="#" className={LayoutStyles.link}><h3>incident reporting for drivers</h3></a>
                                            <h4>Design &amp; Development</h4>
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

export default WorkPage