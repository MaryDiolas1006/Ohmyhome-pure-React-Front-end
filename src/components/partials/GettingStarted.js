import React from 'react';

const GettingStarted = () => {
    return (
        <>
        <div className="col-12 col-md-6">
            <h1>Getting Started is easy!</h1>
            <div className="text-muted">It's Simple</div>
        </div>
            <div className="col-12 col-md-6">
                <div className="row">
                    <h4 className="circle text-center">1</h4>
                    <h3 className="firsth3">Get entouch</h3>
                </div>
                <div className="row">
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer luctus mi quis velit scelerisque, nec euismod augue molestie.
                    </p>   
                </div>
                <div className="row">
                    <h4 className="circle text-center">2</h4>
                    <h3 className="secondh3">Meet up with the agent</h3>
                </div>
                <div className="row">
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer luctus mi quis velit scelerisque, nec euismod augue molestie.
                    </p>   
                </div>
                <div className="row">
                    <h4 className="circle text-center">3</h4>
                    <h3>Pay after the deal is closed</h3>
                </div>
                 <div className="row">
                    <p className="lastRow">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer luctus mi quis velit scelerisque, nec euismod augue molestie.
                    </p>   
                </div>
                <button className="btn btn-md">Book a callback</button>
        </div>  
        </>
    );
}

export default GettingStarted;
