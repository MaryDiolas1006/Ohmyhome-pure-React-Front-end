import React from 'react';
import Landing from './partials/Landing';
import Intro from './partials/Intro';
import Agents from './partials/Agents';
import GettingStarted from './partials/GettingStarted';
import Transaction from './partials/Transaction';
import About from './partials/About';
import './styles/style.css';

const HomePage = () => {
    return (
        <>
            <div className="container-fluid" id="landing">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Landing />
                    </div>
                </div>
            </div>

            {/* INTRO */}
            <div className="container" id="intro">
                <div className="row">
                    <Intro />
                </div>
            </div>

            {/* AGENT */}
            <div className="container-fluid" id="agent">
            <div className="row">
                <Agents />
            </div>
        </div>
            
            {/* gettingStarted */}
            <div className="container" id="gettingStarted">
            <div className="row">
                <GettingStarted />
            </div>
        </div>
        
        {/* Transaction */}
            <div className="container" id="transaction">
                <Transaction />
            </div>

        {/* About */}
            <div className="container" id="about">
                <About />
            </div>
    
    

        </>
    );
}

export default HomePage;
