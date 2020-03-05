import React, { useEffect } from "react"
import "../components/layout.module.scss"
import Styles from "../components/layout.module.scss"
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from "react-helmet"
import {favicon, sun, moon} from '../images/'

const Layout = (props) => {

    let state = {
        theme: Styles.light
    }
    
    const setTheme = () => {
        let localStorageTheme = localStorage.getItem('theme');
        let body = document.getElementsByTagName('body')[0];
        let themeToggleDiv = document.querySelector(`.${Styles.themeToggle}`);

        body.classList.remove(state.theme)

        if(localStorageTheme === 'dark') {
            state.theme = Styles.dark
            themeToggleDiv.classList.add(Styles.themeToggleActive)
        } else {
            state.theme = Styles.light
            themeToggleDiv.classList.remove(Styles.themeToggleActive)
        }
        body.classList.add(state.theme)
    }

    function activateDarkMode() {
        localStorage.setItem('theme','dark')
        setTheme() 
    }
    function activateLightMode() {
        localStorage.setItem('theme','light')
        setTheme() 
    }
       
    function changeTheme() {
        let ToggleDiv = document.querySelector(`.${Styles.themeToggle}`);

        if( ToggleDiv.classList.contains(Styles.themeToggleActive) ) {
            ToggleDiv.classList.remove(Styles.themeToggleActive)
            localStorage.setItem('theme','light')
            setTheme()
        } else {
            ToggleDiv.classList.add(Styles.themeToggleActive)
            localStorage.setItem('theme','dark')
            setTheme()
        }
    }

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
        window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())
    })

    let body = document.getElementsByTagName('body')[0];
    body.classList.add(state.theme)

    return (
        <div>
            <div className={Styles.mainContentGroup}>
                <div className="main-content-inner-wrapper">
                    <Helmet>
                        <link href = "https://fonts.googleapis.com/css?family=Alata|Assistant|Nunito+Sans&display=swap" rel = "stylesheet" />
                        <link rel="icon" href={favicon} />
                    </Helmet>
                    <Header />
                    <div className="content-wrapper">
                        <div className="content-inner-wrapper">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.themeToggle} aria-label="Switch between Dark and Light mode" onLoad={() => setTheme()} onClick={changeTheme} role="button">
                <div className={Styles.themeToggleTrack}>
                    <div className={Styles.themeToggleTrackCheck}>
                        <img src={sun} width="20" height="20" role="presentation" style={{pointerEvents: 'none'}} alt="Sun"/>
                    </div>
                    <div className={Styles.themeToggleTrackX}>
                        <img src={moon} width="20" height="20" role="presentation" style={{pointerEvents: 'none'}} alt="Moon"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout