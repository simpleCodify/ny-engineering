import React from "react";

import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Featured from "../components/Featured";
import CarouselSlides from "../components/CarouselSlides";

let awardPath = require.context("../../public/images/awardslides", true);
let awardthumb = awardPath("./1.jpg");

const Homepage = () => {
	return (
		<Container fluid>
			<CarouselSlides />
			<div className="my-5">
				<Featured />
			</div>
			<Card className="about-card award-card col-6 mb-5 my-auto mx-auto">
				<Card.Title className="my-4">
					<h4 className="text-center my-auto">2018 Remodel of the Year - San Francisco, California</h4>
				</Card.Title>
				<Card.Img src={awardthumb} style={{ border: "1px solid black" }} />
				<Card.ImgOverlay className="d-flex align-items-end">
					<Card.Body>
						<a target="_blank" href="https://bestinamericanliving.com/awards/2018-1631/" className="rr_link mx-auto mt-auto stretched-link"></a>
					</Card.Body>
				</Card.ImgOverlay>{" "}
			</Card>
		</Container>
	);
};

export default Homepage;
