import React from 'react'
import './socialIcons.css';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';

function SocialIcons() {
    return (
        <div className="gpt3__socialIcons">
            <div className="gpt3__socialIcons-icon">
                <a href="https://github.com/IbrahimKesici?tab=repositories" target="_blank">
                    <AiFillGithub size="2.7rem" />
                </a>
            </div>
            <div className="gpt3__socialIcons-icon">
                <a href="https://www.linkedin.com/in/ibrahim-kesici-18643469/" target="_blank">
                    <AiFillLinkedin size="2.7rem" />
                </a>
            </div>
            <div className="gpt3__socialIcons-icon">
                <a href="https://twitter.com/ibrahim05617100" target="_blank">
                    <AiFillTwitterCircle size="2.7rem" />
                </a>
            </div>
        </div>
    )
}

export default SocialIcons
