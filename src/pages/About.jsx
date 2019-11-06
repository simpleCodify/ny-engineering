import React from "react";
import { Container, Row } from "react-bootstrap";
import BannerTitles from "../components/BannerTitles";

let biopicPath = require.context("../../public/images/biopic", true);
let biopicPathtwo = require.context("../../public/images/biopic", true);
let nbiopic = biopicPath("./nilgunbio.jpg");
let nclientpic = biopicPathtwo("./const.jpg");

const About = () => {
	return (
		<>
			<BannerTitles title={"Our Firm"} />
			<Container className="mx-auto" style={{ marginBottom: "20vh" }}>
				<Row className="mb-5">
					{/* <div className="col-12">
					<hr className="my-3 col-md-6" />
					<h1 className="text-center my-5 titlehead" id="about-title">
						Our Firm
					</h1>
					<hr className="my-3 mb-5 col-md-7" />
				</div> */}
					<div className="row p-5 about-card">
						<div className="col-12 col-md-7 my-auto">
							<p>NY Engineering is a structural engineering firm that has been in the business since 2004. Our projects encompass a wide range with the majority being residential and low rise commercial construction. We are a firm sized to allow participation by the principal in virtually all aspects of all projects. Our clients are predominantly architects, developers, design-build contractors and property owners. </p>
							<p>
								Our firm is known for its attention to detail and careful project management. Our experienced professionals are trained to apply creative and cost-effective solutions. Utilizing top-level teamwork and technical expertise, we try to bring the client a cost-effective and unique solution to their engineering need. We enjoy the fact that our clients return again and again and we cherish building these personal relationships. Our engineers are trained to combine the
								right mixture of technical and practical skills to apply building code requirements with an imagination and engineering judgment rarely applied by others.
							</p>
						</div>
						<div className="col-md-5 ml-auto my-auto">
							<img className="col-12 about-profileimg" src={nbiopic}></img>
						</div>
					</div>
				</Row>
				<Row className="my-5">
					<div className="row p-5 about-card">
						<div className="col-md-5">
							<img className="col-12 about-clientimg" src={nclientpic} />
						</div>
						<div className="col-12 col-md-7 my-auto ml-auto">
							<p>Our design approach is to have a collaborative effort between the client, architect, and contractors. Our principle is that we want to solve problems that arise, not to create project obstructions. Our goal is to provide an economical solution to designs that push the envelope rather than compromise a design with over-engineering.</p>
							<p>We understand the importance of sound structural design that facilitates construction with high performance execution. Thus, we never forget take importance of engineering as a service profession and always provide a reliable product in a reasonable response time. We are the firm that people come to when they want something done right the first time, every time.</p>
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default About;
