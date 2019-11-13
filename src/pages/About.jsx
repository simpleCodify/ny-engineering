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
			<Container className="col-10 mx-auto p-5" style={{ marginBottom: "20vh" }}>
				<Row className="mb-5">
					<div className="row p-5 about-card">
						<div className="col-12 col-md-7 my-auto text-center">
							<p>
								Nilgun A.Wolpe is the president and founder of NY Engineering, a structural engineering company doing business in the San Francisco Bay Area and beyond since she founded it in 2004. The company’s projects range from commercial, seismic soft story, multi-family, and residential. NY Engineering has engineered overall over 7,000,000 square feet since its inception and has averaged 400,000 to 500,000 square feet annually in recent years. As an engineer, Nilgun Wolpe
								has 20 years of experience in California, as well as 10 years of experience working abroad for a total of 30 years of engineering experience. She designs steel, wood, concrete, masonry buildings, and also specializes in seismic retrofit for a wide range of building types. Her company provides high-performance execution in all her work with the uncommonly reasonable response time. She prides herself in following her projects from her design phase through the
								completed construction and works tirelessly to provide extra details for job site conditions. She often guiding contractors during the construction phase with a very hands-on approach. She enjoys and takes pride in making her projects come alive.
							</p>
							<p>She also believes in teamwork and in finding cost-effective and unique engineering solutions for each project she undertakes. To this end, she prides herself on staying current with Code changes and constantly attends seminars to maintain her very positive relationships with a wide range of building departments. NY Engineering is the company people come to when they want their project done right the first time, every time.</p>
						</div>
						<div className="col-md-5 ml-auto my-auto">
							<img className="col-12 about-profileimg" src={nbiopic}></img>
						</div>
					</div>
				</Row>
				<Row className="my-5">
					<div className="row p-5 about-card">
						<div className="col-md-5 my-auto">
							<img className="col-12 about-clientimg" src={nclientpic} />
						</div>
						<div className="col-12 col-md-7 my-auto ml-auto text-center">
							<p>We are a structural engineering firm that has been in business since 2004. Our projects encompass a wide range with the majority being residential and low rise commercial construction. We are a firm sized to allow participation by the principal in virtually all aspects of all projects. Our clients are predominantly architects, developers, design-build contractors, and property owners.</p>
							<p>Our design approach is to have a collaborative effort between the client, architect, and contractors. Our principle is that we want to solve problems that arise, not to create project obstructions. Our goal is to provide an economical solution to designs that push the envelope rather than compromise a design with over-engineering.</p>
							<p>
								Our firm is known for its attention to detail and careful project management. Our experienced professionals are trained to apply creative and cost-effective solutions. Utilizing top-level teamwork and technical expertise, we try to bring the client a cost-effective and unique solution to their engineering needs. We enjoy the fact that our clients return again and again and we cherish building these personal relationships. Our engineers are trained to combine the
								right mixture of technical and practical skills to apply building code requirements with an imagination and engineering judgment rarely applied by others.
							</p>
							<p>We understand the importance of sound structural design that facilitates construction with high- performance execution. Thus, we never forget to take the importance of engineering as a service profession and always provide a reliable product in a reasonable response time. We are the firm that people come to when they want something done right the first time, every time.</p>
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default About;
