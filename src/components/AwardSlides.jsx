import React from "react";

import { Carousel } from "react-bootstrap";

let slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"];
let slideimgPath = require.context("../../public/images/awardslides", true);

const AwardSlides = () => {
	return (
		<Carousel id="awardcar" className="awardcarousel mx-auto">
			{slides.map(pic => {
				let imgSrc = slideimgPath("./" + `${pic}`);
				return (
					<Carousel.Item className="awardcarousel-item">
						<img id="awardcarousel-imgs" className="d-block w-100 awardcarousel-img" src={imgSrc} alt="Featured Slide" />
						<Carousel.Caption></Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default AwardSlides;
