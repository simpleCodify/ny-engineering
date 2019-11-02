import React from "react";
import { Container, Row, Col } from "react-bootstrap";

let bannerPath = require.context("../../public/images/banner", true);
let bannerpic = bannerPath("./newrbanner.jpg");

const Services = () => {
	return (
		<>
			<Container>
				<Row>
					<div className="col-12 text-center mx-auto">
						<hr className="my-3 col-md-6" />
						<h1 className="my-5 titlehead" id="about-title">
							Our Services
						</h1>
						<hr className="my-3 mb-5 col-md-7" />
					</div>
				</Row>
			</Container>
			<Container fluid style={{ marginBottom: "20vh" }}>
				<Row className="col-12 col-md-7 mx-auto mb-5 text-center p-2">
					<h4 className="mx-auto mb-5">We at N.Y. Engineering specialize in many different types of services.</h4>
					<br />
					<h5>We have several certifications including the Simpson Strong-Tie seminar for Lateral Systems & Retrofits, the CBC 2014 SEAONC spring seminar, and the SEAONC seminar for Retrofitting Soft Wood-Framed Buildings.</h5>
				</Row>

				<Row className="col-10 col-md-10 mx-auto about-card my-5 p-5">
					<Col lg className="col-12 col-md-3 text-center ">
						<h3 className="my-5 aboutsec-titles">New Construction</h3>
					</Col>
					<Col className="col-12 col-md-9 my-auto mt-3 pt-2">
						<p style={{ lineHeight: "20px" }}>
							One of our most fundamental services we offer is ground-up design and construction. Whether it is a residential or commercial building, we have the skills and credentials to design and construct your building or structure. Starting with a solid, concrete foundation, we use concrete and masonry for retaining walls and use wood for the frame. From our careful design process to our efficient construction teams, we can find a solution for any project that you may have.
						</p>
					</Col>
				</Row>
				<Row className="col-10 col-md-10 mx-auto about-card my-5 p-5">
					<Col className="col-12 col-md-9 my-auto mt-3 pt-2">
						<p style={{ lineHeight: "20px" }}>
							Sometimes you just need more room or need to build an extra garage or tool shed. Whatever your needs may be, it may be too much to design and construct the project yourself. Our specialty is safely and reliably performing renovations, additions, and remodeling of any kind. We have done work using wood, Simpson Strong Wall, and Hardy Panels, preferring to avoid steel for more economical solutions. Whether it's a simple remodel for a room or an entire new story, our
							firm is equipped to handle any remodel project.
						</p>
					</Col>
					<Col lg className="col-12 col-md-3 text-center ">
						<h3 className="my-5 aboutsec-titles">Rear and Story Additions</h3>
					</Col>
				</Row>
				<Row className="col-10 col-md-10 mx-auto about-card my-5 p-5">
					<Col lg className="col-12 col-md-3 text-center ">
						<h3 className="my-5 aboutsec-titles">Soft Story Seismic Retrofits</h3>
					</Col>
					<Col className="col-12 col-md-9 my-auto mt-3 pt-2">
						<p style={{ lineHeight: "20px" }}>
							Some buildings are just too old to be in compliance with modern seismic regulations. Though this service is mostly for multi-units and commercial properties, any building that needs to be retrofitted to be in compliance with the most recent regulations will need this service. We prefer to use wood or Simpson Strong Wall to accomplish this, but we can use seismic steel moment frames if the architecture cannot be compromised. While this is a relatively new service to be
							offered, it is undoubtedly an important one that we expect to see much more of in the future.
						</p>
					</Col>
				</Row>

				{/* <Row>
					<Col lg className="text-center about-card mx-2 p-3" style={{ border: "1px solid lightgray", backgroundColor: "rgba(195,250,250,0.3)" }}>
						<h4 className="mb-1">Rear and Story Additions</h4>
						<hr className="col-2" />
						<p style={{ lineHeight: "20px" }}>
							Sometimes you just need more room or need to build an extra garage or tool shed. Whatever your needs may be, it may be too much to design and construct the project yourself. Our specialty is safely and reliably performing renovations, additions, and remodeling of any kind. We have done work using wood, Simpson Strong Wall, and Hardy Panels, preferring to avoid steel for more economical solutions. Whether it's a simple remodel for a room or an entire new story, our
							firm is equipped to handle any remodel project.
						</p>
					</Col>
					<Col lg className="text-center about-card mx-2 p-3" style={{ border: "1px solid lightgray", backgroundColor: "rgba(195,250,250,0.3)" }}>
						<h4 className="mb-1">Soft Story Seismic Retrofits</h4>
						<hr className="col-2" />
						<p style={{ lineHeight: "20px" }}>
							Some buildings are just too old to be in compliance with modern seismic regulations. Though this service is mostly for multi-units and commercial properties, any building that needs to be retrofitted to be in compliance with the most recent regulations will need this service. We prefer to use wood or Simpson Strong Wall to accomplish this, but we can use seismic steel moment frames if the architecture cannot be compromised. While this is a relatively new service to be
							offered, it is undoubtedly an important one that we expect to see much more of in the future.
						</p>
					</Col>
				</Row> */}
			</Container>
		</>
	);
};

export default Services;
