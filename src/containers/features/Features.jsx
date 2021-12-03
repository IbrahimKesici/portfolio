import React from 'react';
import { Feature } from '../../components';
import './features.css';


const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Dummy text'
    },
    {
        title: 'Become the tended active',
        text: 'Dummy text'
    },
    {
        title: 'Message or am Nothing',
        text: 'Dummy text'
    },
    {
        title: 'Really boy law country',
        text: 'Dummy text'
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is now and you just need to realize it. Step into Future Today & Make it Happen</h1>
                <p>Request early access</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map(( item, index ) => (
                    < Feature title={item.title} text={item.text} key={item.title + index } />
                ))}

            </div>
        </div>
    )
}

export default Features
