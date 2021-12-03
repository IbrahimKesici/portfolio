import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
import { SocialIcons } from '../../components'

const Footer = () => {
    return (
        <div className="portfolio__footer" id="footer">
            <div className="portfolio__footer-heading">
                <h1>Let's make something special!</h1>
            </div>

            <div className="portfolio__footer-links">
                <div className="portfolio__footer-links_logo">
                    <img src={gpt3Logo} alt="Kesici Logo" />
                </div>
                <SocialIcons />
            </div>

            <div className="portfolio__footer-copyright">
                <p>©2021 IK. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
