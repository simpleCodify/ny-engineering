import React from "react";

import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Featured from "../components/Featured";
import CarouselSlides from "../components/CarouselSlides";
import AwardCard from "../components/AwardCard";

let awardPath = require.context("../../public/images/awardslides", true);
let awardthumb = awardPath("./1.jpg");

const Homepage = () => {
	return (
		<Container fluid>
			<CarouselSlides />
			<div className="my-5">
				<Featured />
			</div>
			<AwardCard />
		</Container>
	);
};

export default Homepage;
