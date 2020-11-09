import React from 'react';
import image10 from '../images/image10.png';

const Assistance = () => {
    return (
        <>
        <div className="col-12 col-md-6">
            <h1>Need assistance in your house journey?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer luctus mi quis velit scelerisque, nec euismod augue molestie.</p>
            <button className="btn btn-md">Book a callback</button>
        </div>
            
        <div className="col-12 col-md-6">
            <img src={image10} alt="" />    
        </div>
        </>
    );
}

export default Assistance;
