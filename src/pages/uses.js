import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import LayoutStyles from '../components/layout.module.scss'
import { useStaticQuery, graphql } from "gatsby"
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
            }
        }
        `
    )
    return (
        <Layout>
            <SEO title={site.siteMetadata.author} description={site.siteMetadata.description} />            
            <div className={LayoutStyles.container}>
                <section className={LayoutStyles.usesSection}>
                    <div className={LayoutStyles.usesSectionWrapper}>
                        <div className={LayoutStyles.usesSectionInnerWrapper}>
                            <p>Since many in the community are revealing what they use, I feel it's time I do the same even though no one has ever asked me about what I use  in my day to day activities. This will nonetheless serve as a good reference for when I have to  set up a new environment.</p>
                            <h1>Development</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Code Editor</td>
                                        <td><OutboundLink href="https://code.visualstudio.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Visual Studio Code.</OutboundLink> My go to editor for all things code related.</td>
                                    </tr>
                                    <tr>
                                        <td>Code Editor Theme</td>
                                        <td><OutboundLink href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Synthwave '84</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Code Editor Font</td>
                                        <td><OutboundLink href="https://github.com/tonsky/FiraCode" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Fira Code.</OutboundLink> Because it's a nice looking font and also the fact that it supports ligatures.</td>
                                    </tr>
                                    <tr>
                                        <td>Terminal</td>
                                        <td><OutboundLink href="https://hyper.is/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Hyper.js</OutboundLink> It's beautiful and extensible interface makes working in the command-line fun.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1>Web Apps & Services</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>File Storage</td>
                                        <td><OutboundLink href="https://drive.google.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Google Drive</OutboundLink>, <OutboundLink href="https://onedrive.live.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">One Drive</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Backend</td>
                                        <td><OutboundLink href="https://heroku.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Heroku.</OutboundLink> Mostly to test  perosnal projects with backend integration.</td>
                                    </tr>
                                    <tr>
                                        <td>Frontend</td>
                                        <td><OutboundLink href="https://www.netlify.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Netlify.</OutboundLink> Hosts this website and other personal frontend projects. Highly recommended.</td>
                                    </tr>
                                    <tr>
                                        <td>Wordpress & PHP</td>
                                        <td><OutboundLink href="https://www.bluehost.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Bluehost</OutboundLink>, <OutboundLink href="https://www.godaddy.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Godaddy</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Accounting</td>
                                        <td><OutboundLink href="https://www.waveapps.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Wave.</OutboundLink> Easy to create and send professional invoices</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1>Desktop Apps</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Communication</td>
                                        <td><OutboundLink href="https://slack.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Slack</OutboundLink>, <OutboundLink href="https://discordapp.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Discord.</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><OutboundLink href="https://missiveapp.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Missive.</OutboundLink> Incredibly powerful tools to manage your emails.</td>
                                    </tr>
                                    <tr>
                                        <td>Browser</td>
                                        <td><OutboundLink href="https://www.google.com/chrome/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Google Chrome</OutboundLink>, <OutboundLink href="https://www.mozilla.org/en-US/firefox/developer/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Firfox (Dev Edition)</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>VPN (For Custom Connections)</td>
                                        <td><OutboundLink href="https://www.sparklabs.com/viscosity/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Viscosity</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Password Manager</td>
                                        <td><OutboundLink href="https://bitwarden.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Bitwarden.</OutboundLink> Using this has been great so far compared to the others I've tried.</td>
                                    </tr>
                                    <tr>
                                        <td>Notes & To-do</td>
                                        <td><OutboundLink href="https://www.notion.so/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Notion.</OutboundLink>, <OutboundLink href="https://todoist.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Todoist.</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Project Management</td>
                                        <td><OutboundLink href="https://trello.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Trello.</OutboundLink> Makes it easier to put down ideas and plans for new and ongoing projects</td>
                                    </tr>
                                    <tr>
                                        <td>Screen Recorder & Video Editor</td>
                                        <td><OutboundLink href="https://obsproject.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">OBS Studio</OutboundLink>, <OutboundLink href="https://www.adobe.com/products/premiere.html" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">Adobe Premiere Pro</OutboundLink></td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1>Gear</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Primary Laptop</td>
                                        <td><OutboundLink href="https://www.amazon.com/HP-Pavilion-G7-2317cl-Quad-Core-Discrete-Class/dp/B00SPLDNZA" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">HP Pavilion G7</OutboundLink></td>
                                    </tr>
                                    <tr>
                                        <td>Secondary Laptop</td>
                                        <td><OutboundLink href="https://www.amazon.com/HP-Notebook-Dual-Core-Bluetooth-Windows/dp/B08287VDLC/ref=sr_1_1?keywords=hp+g6+dual+core&qid=1579748750&sr=8-1" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer" title="title">HP 240 G6</OutboundLink></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage
