import React from 'react'
import HeaderStyles from '../components/header.module.scss'
import { Link } from 'gatsby'

let state = {isToggleOn: false};

const Header = () => {

    const handleClick = () => {
        
        if (state.isToggleOn){

            let b = document.getElementsByTagName('nav')
            b[0].classList.toggle(HeaderStyles.active)

            state = {
                isToggleOn: !state.isToggleOn
            };

        } else {
            let b = document.getElementsByTagName('nav')
            b[0].classList.toggle(HeaderStyles.active)

            state = {
                isToggleOn: !state.isToggleOn
            };
        }

        return
    }
    
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
                <div className={HeaderStyles.mobileMenuButton} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="">
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
                            <a href="mailto:maxkobbs@gmail.com" className={HeaderStyles.link}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header