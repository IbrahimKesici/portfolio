import React from 'react'
import './skill.css'

function Skill({ icon, name}) {
    return (
        <div className="portfolio__skill-container">
            <p> { icon } </p>
            <p> { name } </p>
        </div>
    )
}
export default Skill
