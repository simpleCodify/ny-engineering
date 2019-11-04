import React from "react";
import { Row, Carousel, Container } from "react-bootstrap";

let slides = ["a.jpg", "b.jpg", "c.jpg"];
let slideimgPath = require.context("../../public/images/banner", true);

const BannerTitles = props => {
	return (
		<Container fluid className="col-12 my-5">
			<Carousel id="bannerslide" className="col-12 p-0" controls={false} indicators={false} pauseOnHover={false} slide={false} style={{ border: "2px solid black" }}>
				{slides.map(pic => {
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
