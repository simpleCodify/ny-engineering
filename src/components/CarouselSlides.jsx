import React from "react";

import { Carousel } from "react-bootstrap";

let slides = ["b.jpg", "a.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg"];
let slideimgPath = require.context("../../public/images/slides", true);

const CarouselSlides = () => {
	return (
		<Carousel className="featurecarousel my-5 mx-auto" style={{ border: "2px solid black" }}>
			{slides.map(pic => {
				let imgSrc = slideimgPath("./" + `${pic}`);
				return (
					<Carousel.Item className="featurecarousel-item">
						<img id="featurecarousel-imgs" className="d-block w-100 featurecarousel-img" src={imgSrc} alt="Featured Slide" />
						<Carousel.Caption></Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselSlides;
