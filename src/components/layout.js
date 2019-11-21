import React from "react"
import "../components/layout.module.scss"
import Styles from "../components/layout.module.scss"
import Header from '../components/header'
import Footer from '../components/footer'
import Helmet from "react-helmet"

const Layout = (props) => {
    return (
        <div>
            <div className={Styles.mainContentGroup}>
                <div className="main-content-inner-wrapper">
                    <Helmet>
                    < link href = "https://fonts.googleapis.com/css?family=Alata|Assistant|Nunito+Sans&display=swap"
                    rel = "stylesheet" />
                    </Helmet>
                    <Header />
                    <div className="content-wrapper">
                        <div className="content-inner-wrapper">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout