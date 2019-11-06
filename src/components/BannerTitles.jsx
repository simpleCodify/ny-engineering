import React from "react";
import { Row, Carousel, Container } from "react-bootstrap";

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
let slides = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"];
let slideimgPath = require.context("../../public/images/banner", true);

let newSlides = shuffle(slides);

const BannerTitles = props => {
	return (
		<Container fluid className="col-12 my-5">
			<Carousel id="bannerslide" className="col-12 p-0" interval={2500} controls={false} indicators={false} pauseOnHover={false} slide={false} style={{ border: "2px solid black" }}>
				{newSlides.map(pic => {
					let imgSrc = slideimgPath("./" + `${pic}`);
					return (
						<Carousel.Item className="bnslider-item">
							<img id="bannerslider" src={imgSrc} alt="banner Slide" />
							<Carousel.Caption className="mx-auto text-center">
								<h1 className="text-center my-auto" id="banner-title">
									{props.title}
								</h1>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</Container>
	);
};

export default BannerTitles;
