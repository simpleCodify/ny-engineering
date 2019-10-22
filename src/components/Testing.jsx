import React, { Component } from "react";
import { Card, Modal, Button, Container, CardColumns } from "react-bootstrap";

import CarouselTest from "./CarouselTest";


let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];
let imgPath = require.context("../../public/images/commercial", true);


function importAll(r) {
	let images = {};
	r.keys().map(item => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const images = importAll(require.context("../../public/images/commercial", false, /\.(png|jpe?g|svg)$/));
console.log(images);

let commercial = ["25th Avenue, San Francisco, CA", "Howard, Burlingame, CA", "N. Lenore, Willits, CA (2 Buildings)", "Post Street, San Francisco, CA", "San Mateo Ave San Bruno, CA"];

let comObj = [
	{
		name: "25th Avenue, San Francisco, CA",
		images: ["25th Avenue, San Francisco, CA1.jpg", "25th Avenue, San Francisco, CA2.jpg", "25th Avenue, San Francisco, CA3.jpg", "25th Avenue, San Francisco, CA4.jpg"]
	},
	{
		name: "Howard, Burlingame, CA",
		images: [
			"Howard, Burlingame, CA1.jpg",
			"Howard, Burlingame, CA2.jpg",
			"Howard, Burlingame, CA3.jpg",
			"Howard, Burlingame, CA4.jpg",
			"Howard, Burlingame, CA5.jpg",
			"Howard, Burlingame, CA6.jpg"
		]
	}
];

const Testing = props => {
	return (
		<Container>
			<Container>
				<h1 className="text-center my-5">TESTING PAGE</h1>

				<hr className="my-5" />
				<CardColumns>
					{commercial.map((build, idx) => {
						let time = Math.random() * 4;
						let num = Math.floor(Math.random() * Math.floor(4));
						let name = animationArray[num];
						let imgStyle = { animation: `${name} ${time}s` };
						let imgSrc = imgPath("./" + `${build}` + "1.jpg");

						return (
							<Card className="text-white" style={imgStyle} key={idx} value={build}>
								<Card.Img src={imgSrc}></Card.Img>
								<Card.ImgOverlay className="text-center d-flex flex-column mt-auto">
									<Button onClick={props.handleClick} value={build} name={imgSrc} className="btn-sm btn-sm-featured mx-auto mt-auto" variant="outline-secondary">
										View
									</Button>
								</Card.ImgOverlay>
							</Card>
						);
					})}

					<Modal show={props.show} onHide={props.closeModal} container={this} dialogClassName="modal-90w" aria-labelledby="contained-modal-title">
						<Modal.Header closeButton>
							<Modal.Title id="contained-modal-title">{props.property !== "" ? <p>{props.property}</p> : "" }</Modal.Title>
						</Modal.Header>
						<Modal.Body className="mx-auto" style={{ width: "100%" }}>
							<CarouselTest />
						</Modal.Body>
					</Modal>
				</CardColumns>
				<hr className="my-5" />
			</Container>
		</Container>
	);
}

export default Testing;
