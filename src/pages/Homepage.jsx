import React from "react";

import { Container, Carousel } from "react-bootstrap";

import Featured from "../components/Featured";
import CarouselSlides from "../components/CarouselSlides";

const Homepage = () => {
	return (
		<Container fluid>
			<CarouselSlides />
			<div className="my-5">
				<Featured />
			</div>
		</Container>
	);
};

export default Homepage;
