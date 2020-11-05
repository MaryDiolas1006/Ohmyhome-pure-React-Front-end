import React from 'react';
import Nav from 'react-bootstrap/Nav';
import image5 from '../images/image5.jpg';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';

const AgentMobile = () => {
    const handleSelect = (eventKey) => (`selected ${eventKey}`);
    return (
    <>
         <div id="agentMobile" class="col-12 text-center">
  				<h1>Singapore's Top Agents at Your Service</h1>
  				<div className="mx-auto">
                    <Nav variant="pills" onSelect={handleSelect} defaultActiveKey="#pills-home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">For Buyers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" eventKey="#pills-profile">For Sellers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" eventKey="#pills-contact">For Landlord</Nav.Link>
                        </Nav.Item>
                    </Nav>
        
	  				<div className="tab-content" id="pills-tabContent">
	  					<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
	  						<img src={image5} alt="" />
	  						<h2 className="text-center mt-2">Buy A Home You Love</h2>
	  						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, minima, ab. Atque aliquid nihil necessitatibus cupiditate aut, accusamus? Hic quidem similique deleniti ducimus facilis inventore. Consequatur voluptate sequi hic autem.</p>
	  					</div>
	  					<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
	  						<img src={image7} alt="" />
	  						<h2 className="text-center mt-2">Step Up Your Selling Journey</h2>
	  						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, assumenda porro ratione doloremque pariatur, voluptatum accusantium hic odit dignissimos, illum voluptatibus dolor nostrum voluptates fugiat, recusandae quibusdam amet error eius.</p>
	  					</div>
	  					<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
	  						<img src={image8} alt="" />
	  						<h2 className="text-center mt-2">Find and Secure Tenants Fast</h2>
	  						<p>Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Fuga nulla laboriosam debitis officia, maiores odio dolor minima aliquam enim? Ea qui sapiente ipsum molestias ex dolorem numquam quos hic ab?</p>
	  					</div>
	  				</div>
  			 	</div>
                </div>
    </>

    );
}

export default AgentMobile;

