import React from 'react';

import { Footer, About, Header, Projects } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <About />
            <Projects />
            <Footer />
        </div>
    )
}

export default App