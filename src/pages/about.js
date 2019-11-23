import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import { about } from '../images/index';

const AboutPage = () => {
    const { site, allContentfulProjectItem } = useStaticQuery(
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
                <section className={LayoutStyles.aboutSection}>
                    <div className={LayoutStyles.aboutSectionWrapper}>
                        <div className={LayoutStyles.aboutSectionInnerWrapper}>
                            <div className={LayoutStyles.aboutImageWrapper}>
                                <div className={LayoutStyles.aboutImageInnerWrapper}>
                                    <img src={ about } />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={LayoutStyles.aboutSection}>
                    <div className={LayoutStyles.aboutSectionWrapper}>
                        <div className={LayoutStyles.aboutSectionInnerWrapper}>
                            <div className={LayoutStyles.aboutTextWrapper}>
                                <div className={LayoutStyles.aboutTextInnerWrapper}>
                                    <p>I'm a former Lead Developer at WebTek Ghana Limited and Web Engineer at Gesatech Solutions. I am based in the Republic of Ghana and I currently work as a full-time freelance web designer and developer on projects that I find interesting, exciting and challenging.</p>
                                    <p>I am super passionate about design and development, and I'm equipped with all the skills needed to create high quality and responsive websites using latest industry trends and modern solutions. I've had the opportunity to work with various languages, frameworks and Content Management Systems including Javascript, HTML, CSS, PHP and recently Nodejs, React, Gatsby and Wagtail CMS.</p>
                                    <p>- </p>
                                    <p>~ Maxwell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage
