import React from 'react';
import image3 from '../images/image3.png';
import video from '../images/video.PNG';

const About = () => {
    return (
        <>
        <div className="row">
            <div id="image" className="col-12 col-md-6">
                <img src={image3} alt="" />
            </div>
            <div className="col-12 col-md-6">
                <h1>Served over 8,000 happy customers and counting</h1>
                <div className="text">Learn about how you save
                     <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0.929688L0.5 2.42969L5.07031 7L0.5 11.5703L2 13.0703L8.07031 7L2 0.929688Z" fill="#E86225"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="row">
            <div id="video" className="col-12 col-md-6">
                <img src={video} alt="" />
            </div>
            <div className="col-12 col-md-6">
                    <p className="content">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.32292 0L0 4.46484V4.6849V6.01823V8.01823C0 8.75356 0.598 9.35156 1.33333 9.35156H4C4.73533 9.35156 5.33333 8.75356 5.33333 8.01823V5.35156C5.33333 4.6169 4.73533 4.01823 4 4.01823H1.99349L4.98568 0H3.32292ZM9.97656 0L6.66667 4.44661V4.66667V6V8C6.66667 8.73533 7.26467 9.33333 8 9.33333H10.6667C11.402 9.33333 12 8.73533 12 8V5.33333C12 4.598 11.402 4 10.6667 4H8.66016L11.638 0H9.97656Z" fill="#F57224"/>
                    </svg>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer luctus mi quis velit scelerisque, nec euismod augue molestie.
                    Ut vel turpis vel neque ornare fringilla. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos."
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.32292 0L0 4.46484V4.6849V6.01823V8.01823C0 8.75356 0.598 9.35156 1.33333 9.35156H4C4.73533 9.35156 5.33333 8.75356 5.33333 8.01823V5.35156C5.33333 4.6169 4.73533 4.01823 4 4.01823H1.99349L4.98568 0H3.32292ZM9.97656 0L6.66667 4.44661V4.66667V6V8C6.66667 8.73533 7.26467 9.33333 8 9.33333H10.6667C11.402 9.33333 12 8.73533 12 8V5.33333C12 4.598 11.402 4 10.6667 4H8.66016L11.638 0H9.97656Z" fill="#F57224"/>
                    </svg>
                    </p>
                    <h6><strong>Blake and Isabel</strong></h6>    
            </div>
        </div>
        </>
    ); 
}
export default About;
