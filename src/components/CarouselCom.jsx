import React from "react";

import { Carousel } from "react-bootstrap";

function importAll(r) {
	let images = {};
	r.keys().map(item => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const images = importAll(require.context("../../public/images/commercial", false, /\.(png|jpe?g|svg)$/));
console.log(images);

const CarouselCom = props => {
	return (
		<Carousel id="carcom" wrap={false}>
			{props.images !== ""
				? props.images.map((img, idx) => {
						return (
							<Carousel.Item>
								<img className="d-block w-100" src={images[img]} alt="carousel slide" />
							</Carousel.Item>
						);
				  })
				: "Loading..."}
		</Carousel>
	);
};

export default CarouselCom;
