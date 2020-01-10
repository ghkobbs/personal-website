import React from 'react'
import LayoutStyles from '../components/layout.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = () => {
    const { allContentfulSocialIcon } = useStaticQuery(
        graphql`
        query {
            allContentfulSocialIcon(sort: {
                    fields: createdAt,
                    order: ASC
                }) {
                edges {
                    node {
                        title
                        link
                        icon {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
        `
    )

    const copyrightYear = new Date().getFullYear();

    return (
        <footer className={ LayoutStyles.footer }>
            <div className={ LayoutStyles.footerWrapper } >
                <div className={ LayoutStyles.container }>
                    <ul className={LayoutStyles.socialIconsGroup}>
                        {allContentfulSocialIcon.edges.map((edge) => {
                            return (
                                <li key={edge.node.icon.file.url.toString()} className={LayoutStyles.socialIcons}>
                                    <OutboundLink href={edge.node.link} target="_blank" rel="noopener noreferrer" title={edge.node.title}><img src={edge.node.icon.file.url} alt={edge.node.title} /></OutboundLink>
                                </li>
                            )
                        })}
                    </ul>
                    <p>&copy;2019 - {copyrightYear} Maxwell Morrison. All rights reserved. </p>
                    <small>This site is built with <OutboundLink href="https://www.gatsbyjs.org/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Gatsbyjs</OutboundLink> and hosted on <OutboundLink href="https://www.netlify.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Netlify</OutboundLink>. The source code can be found on <OutboundLink href="https://github.com/ghkobbs/personal-website" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Github</OutboundLink>.</small>
                </div>
            </div>
        </footer> 
    )
}

export default Footer