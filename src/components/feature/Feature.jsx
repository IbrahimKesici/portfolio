import React from 'react';
import './feature.css';


const Feature = ({ title, components}) => {
    return (
        <div className="portfolio__features-container__feature">
            <div className="portfolio__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="portfolio__features-container__feature-text">
                    {components.map(component => (
                        <p>{component}</p>))
                    }
            </div>
        </div>
    )
}

export default Feature
