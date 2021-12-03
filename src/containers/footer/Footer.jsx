import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
import { SocialIcons } from '../../components'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" id="footer">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Let's make something special!</h1>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="Kesici Logo" />
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Gdansk Poland</p>
                    <p>ibrahim.kesici@outlook.com</p>
                </div>
                <SocialIcons />
            </div>

            <div className="gpt3__footer-copyright">
                <p>©2021 IK. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
