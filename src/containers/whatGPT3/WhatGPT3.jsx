import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT3" text="some dummy text"/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">My, Myself & I</h1>
                <p>Explore Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Work History" text="2020-Present: Nordea Bank, 2019-2020: Mercer, 2018-2019: Philip Morris International"/>
                <Feature title="Education" text="2016-2018: (M.Sc.) Warsaw University of Technology - Robotics, 2011-2016: Mevlana University - Mechatronics Engineering" />
            </div>

        </div>
    )
}

export default WhatGPT3
