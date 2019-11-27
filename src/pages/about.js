import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { about } from '../images/index';

const AboutPage = () => {
    const { site, contentfulAbout } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            },
            contentfulAbout {
                aboutImage {
                    title
                    file {
                        url
                    }
                }
                aboutText {
                    json
                }
            }
        }
        `
    )
    return (
        <Layout>
            <SEO title={site.siteMetadata.author} description={site.siteMetadata.description} />            
            <div className={LayoutStyles.container}>
                <section className={LayoutStyles.aboutSection}>
                    <div className={LayoutStyles.aboutSectionWrapper}>
                        <div className={LayoutStyles.aboutSectionInnerWrapper}>
                            <div className={LayoutStyles.aboutImageWrapper}>
                                <div className={LayoutStyles.aboutImageInnerWrapper}>
                                    <img src={contentfulAbout.aboutImage.file.url} alt={contentfulAbout.aboutImage.title} />
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
                                    {documentToReactComponents(contentfulAbout.aboutText.json)}
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
