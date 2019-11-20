import React from 'react'
import HeaderStyles from '../components/header.module.scss'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <div className={HeaderStyles.container}>
                <div className={HeaderStyles.logoWrapper}>
                    <div className={HeaderStyles.logoInnerWrapper}>
                        <div className={HeaderStyles.siteLogo}>
                            <h1>
                                <Link to="/"><span className={HeaderStyles.largeLogoLetter}>M</span><span className={HeaderStyles.smallLogoLetter}>m.</span></Link>
                            </h1>
                        </div>
                    </div>
                </div>
                <nav className={HeaderStyles.nav} >
                    <ul className={HeaderStyles.navigationList}>
                        <li className={HeaderStyles.navigationListItem}>
                            <Link className={HeaderStyles.link} activeClassName={HeaderStyles.current} to="/">Home</Link>
                        </li>
                        <li className={HeaderStyles.navigationListItem}>
                            <Link className={HeaderStyles.link} activeClassName={HeaderStyles.current} to="/about">About</Link>
                        </li>
                        <li className={HeaderStyles.navigationListItem}>
                            <Link className={HeaderStyles.link} activeClassName={HeaderStyles.current} to="/work">Work</Link>
                        </li>
                        <li className={HeaderStyles.navigationListItem}>
                            <Link className={HeaderStyles.link} activeClassName={HeaderStyles.current} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header