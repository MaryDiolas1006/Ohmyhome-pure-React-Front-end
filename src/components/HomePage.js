import React from 'react';
import Landing from './partials/Landing';
import Intro from './partials/Intro';
import Agents from './partials/Agents';
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
    

        </>
    );
}

export default HomePage;
