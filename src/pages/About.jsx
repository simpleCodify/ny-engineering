import React from "react";
import { Container, Row } from "react-bootstrap";

let biopicPath = require.context("../../public/images/biopic", true);
let biopicPathtwo = require.context("../../public/images/biopic", true);
let nbiopic = biopicPath("./nilgunbiopic.jpg");
let nclientpic = biopicPathtwo("./client.jpg");

const About = () => {
	return (
		<Container className="mx-auto" style={{ marginTop: "20vh", marginBottom: "20vh" }}>
			<Row className="my-5">
				<div className="col-12">
					<hr className="my-3" />
					<h1>Our Firm</h1>
					<hr className="my-3 mb-5" />
				</div>
				<div className="col-7 my-auto">
					<p style={{ lineHeight: "20px" }}>NY Engineering is a structural engineering firm that has been in the business since 2004. Our projects encompass a wide range with the majority being residential and low rise commercial construction. We are a firm sized to allow participation by the principal in virtually all aspects of all projects. Our clients are predominantly architects, developers, design-build contractors and property owners. </p>
					<p style={{ lineHeight: "20px" }}>
						Our firm is known for its attention to detail and careful project management. Our experienced professionals are trained to apply creative and cost-effective solutions. Utilizing top-level teamwork and technical expertise, we try to bring the client a cost-effective and unique solution to their engineering need. We enjoy the fact that our clients return again and again and we cherish building these personal relationships. Our engineers are trained to combine the right
						mixture of technical and practical skills to apply building code requirements with an imagination and engineering judgment rarely applied by others.
					</p>
				</div>
				<div className="col-md-5 ml-auto">
					<img className="col-12" src={nbiopic}></img>
				</div>
			</Row>
			<hr />
			<Row className="my-5">
				<div className="col-md-5">
					<img className="col-12" src={nclientpic} />
				</div>
				<div className="col-7 my-auto ml-auto">
					<p style={{ lineHeight: "20px" }}>Our design approach is to have a collaborative effort between the client, architect, and contractors. Our principle is that we want to solve problems that arise, not to create project obstructions. Our goal is to provide an economical solution to designs that push the envelope rather than compromise a design with over-engineering.</p>
					<p style={{ lineHeight: "20px" }}>We understand the importance of sound structural design that facilitates construction with high performance execution. Thus, we never forget take importance of engineering as a service profession and always provide a reliable product in a reasonable response time. We are the firm that people come to when they want something done right the first time, every time.</p>
				</div>
			</Row>
			<Row className="my-5">
				<div className="text-center mx-auto">
					<hr className="my-3" />

					<h1>Our Services</h1>
					<hr className="my-3 mb-5" />

					<p style={{ lineHeight: "20px" }}>We at N.Y. Engineering specialize in many different types of services. We have several certifications including the Simpson Strong-Tie seminar for Lateral Systems & Retrofits, the CBC 2014 SEAONC spring seminar, and the SEAONC seminar for Retrofitting Soft Wood-Framed Buildings.</p>
					<p style={{ lineHeight: "20px" }}>
						<span className="fontvariantsc" style={{ fontSize: "20px" }}>
							New Construction
						</span>{" "}
						: One of our most fundamental services we offer is ground-up design and construction. Whether it is a residential or commercial building, we have the skills and credentials to design and construct your building or structure. Starting with a solid, concrete foundation, we use concrete and masonry for retaining walls and use wood for the frame. From our careful design process to our efficient construction teams, we can find a solution for any project that you may have.
					</p>
					<p style={{ lineHeight: "20px" }}>
						<span className="fontvariantsc" style={{ fontSize: "20px" }}>
							Rear and Story Additions
						</span>{" "}
						: Sometimes you just need more room or need to build an extra garage or tool shed. Whatever your needs may be, it may be too much to design and construct the project yourself. Our specialty is safely and reliably performing renovations, additions, and remodeling of any kind. We have done work using wood, Simpson Strong Wall, and Hardy Panels, preferring to avoid steel for more economical solutions. Whether it's a simple remodel for a room or an entire new story, our firm
						is equipped to handle any remodel project.
					</p>
					<p style={{ lineHeight: "20px" }}>
						<span className="fontvariantsc" style={{ fontSize: "20px" }}>
							Soft Story Seismic Retrofits
						</span>{" "}
						: Some buildings are just too old to be in compliance with modern seismic regulations. Though this service is mostly for multi-units and commercial properties, any building that needs to be retrofitted to be in compliance with the most recent regulations will need this service. We prefer to use wood or Simpson Strong Wall to accomplish this, but we can use seismic steel moment frames if the architecture cannot be compromised. While this is a relatively new service to be
						offered, it is undoubtedly an important one that we expect to see much more of in the future.
					</p>
				</div>
			</Row>
		</Container>
	);
};

export default About;
