import React from 'react'
import HeaderStyles from '../components/header.module.scss'
import { Link } from 'gatsby'

const Header = () => {

    let state = {
        isToggleOn: false
    };

    const handleClick = () => {
        
        if (state.isToggleOn) {
            
            // let body = document.getElementsByTagName('body')
            // body[0].style.position = ''
            // body[0].style.width = ''
            
            let navlists = document.querySelector(`.${HeaderStyles.navigationList}`)
            let b = document.getElementsByTagName('nav')
            
            navlists.style.opacity = 0

            setTimeout(() => {
                b[0].classList.toggle(HeaderStyles.active)
                navlists.style.opacity = ''
            }, 300)

            state = {
                isToggleOn: false
            };          

        } else {
            // let body = document.getElementsByTagName('body')
            // body[0].style.position = 'fixed'
            // body[0].style.width = '100%'
            
            let b = document.getElementsByTagName('nav')
            b[0].classList.toggle(HeaderStyles.active)

            state = {
                isToggleOn: true
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