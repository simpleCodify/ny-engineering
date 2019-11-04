import React from "react";

import { Carousel } from "react-bootstrap";

let slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let slideimgPath = require.context("../../public/images/seismicslides", true);

const SeismicMiniCara = () => {
	return (
		<Carousel className="seismicmini col-7 my-5 mx-auto p-0" style={{ border: "2px solid black" }}>
			{slides.map(pic => {
				let imgSrc = slideimgPath("./" + `${pic}`);
				return (
					<Carousel.Item className="seismicmini-item">
						<img id="seismicmini-imgs" className="d-block w-100 seismicmini-img" src={imgSrc} alt="Featured Slide" />
						<Carousel.Caption></Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default SeismicMiniCara;
