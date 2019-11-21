import React from 'react'
import LayoutStyles from '../components/layout.module.scss'

const Footer = () => {
    return (
        <footer className={ LayoutStyles.footer }>
            <div className={ LayoutStyles.footerWrapper } >
                <div className={ LayoutStyles.container }>
                    <p>&copy;2019 Maxwell Morrison. All rights reserved. </p>
                    <small>This site is built with <a href="https://www.gatsbyjs.org/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Gatsbyjs</a> and hosted on <a href="https://www.netlify.com/" className={LayoutStyles.link} target="_blank" rel="noopener noreferrer">Netlify</a>. The source code is hosted on Github.</small>
                </div>
            </div>
        </footer> 
    )
}

export default Footer