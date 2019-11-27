import React from 'react'
import LayoutStyles from '../components/layout.module.scss'
import { useStaticQuery, graphql } from "gatsby"

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
    return (
        <footer className={ LayoutStyles.footer }>
            <div className={ LayoutStyles.footerWrapper } >
                <div className={ LayoutStyles.container }>
                    <ul className={LayoutStyles.socialIconsGroup}>
                        {allContentfulSocialIcon.edges.map((edge) => {
                            return (
                                <li key={edge.node.icon.file.url.toString()} className={LayoutStyles.socialIcons}>
                                    <a href={edge.node.link} target="_blank" rel="noopener noreferrer" title={edge.node.title}><img src={edge.node.icon.file.url} alt={edge.node.title} /></a>
                                </li>
                            )
                        })}
                    </ul>
                    <p>&copy;2019 Maxwell Morrison. All rights reserved. </p>
                    <small>This site is built with <a href="https://www.gatsbyjs.org/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Gatsbyjs</a> and hosted on <a href="https://www.netlify.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Netlify</a>. The source code can be found on <a href="https://github.com/ghkobbs/personal-website" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Github</a>.</small>
                </div>
            </div>
        </footer> 
    )
}

export default Footer