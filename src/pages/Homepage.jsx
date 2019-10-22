import React from "react";

import { Container, Carousel } from "react-bootstrap";

import Featured from "../components/Featured";

const Homepage = () => {
	return (
		<Container fluid>
			<Carousel className="my-5">
				<Carousel.Item>
					<img className="d-block w-100" src="https://placeimg.com/640/300/arch/sepia" alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://placeimg.com/640/300/arch/grayscale" alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="https://placeimg.com/640/300/tech/grayscale" alt="Third slide" />
				</Carousel.Item>
			</Carousel>
			<div className="my-5">
				<Featured />
			</div>
		</Container>
	);
};

export default Homepage;
