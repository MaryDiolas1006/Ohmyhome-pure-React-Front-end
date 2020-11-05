import React from 'react';
import AgentMobile from './AgentMobile';
import image5 from '../images/image5.jpg';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';

const Agents = () => {
    return (
        <>
        <div id="desktopview" className="col-12">
            <h1 className="text-center">Singapore's Top Agents at Your Service</h1>  
        </div>
        <div id="desktopview" className="row mx-auto">
            <div className="col-12 col-md-3 image5">
                <img src={image5} alt="image5" /> 
            <div className="row">
                <p className="text-muted ml-3">FOR BUYERS</p>
            </div>
            <div className="row">  
                <h6 className="ml-3"><strong>Buy A Home You Love</strong></h6>
            </div> 
            <div className="row">  
                <p className="ml-3">Get started <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65637 0.14325L0.156372 1.64325L4.72668 6.21356L0.156372 10.7839L1.65637 12.2839L7.72668 6.21356L1.65637 0.14325Z" fill="#E86225"/>
                </svg></p> 
            </div>                
            </div>
                
            <div className="col-12 col-md-3 image7">
                <img src={image7} alt="image7" />
            <div className="row">
                <p className="text-muted ml-3">FOR SELLERS</p>
            </div>
            <div className="row">  
                <h6 className="ml-3"><strong>Step Up Your Selling Journey</strong></h6>
             </div> 
            <div className="row">  
                <p className="ml-3">Get started <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65637 0.14325L0.156372 1.64325L4.72668 6.21356L0.156372 10.7839L1.65637 12.2839L7.72668 6.21356L1.65637 0.14325Z" fill="#E86225"/>
                </svg></p> 
            </div> 
            </div>
                
            <div className="col-12 col-md-3 image8">
                <img src={image8} alt="image8" />
            <div className="row">
                <p className="text-muted ml-3">FOR LANDLORDS</p>
            </div>
            <div className="row">  
                <h6 className="ml-3"><strong>Find and Secure Tenants Fast</strong></h6>
            </div>
            <div className="row">  
                <p className="ml-3">Get started <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65637 0.14325L0.156372 1.64325L4.72668 6.21356L0.156372 10.7839L1.65637 12.2839L7.72668 6.21356L1.65637 0.14325Z" fill="#E86225"/>
                </svg></p> 
            </div>
            </div>
        </div>
        <AgentMobile />
        </>
    );
}

export default Agents;
