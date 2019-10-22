import React from "react";
import { Card, CardColumns, Container, Button, Modal } from "react-bootstrap";
import CarouselSei from "./CarouselSei";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let seismic = [
	{
		name: "Bartlett, San Francisco, CA",
		images: ["Bartlett, San Francisco, CA1.jpg-Bartlett, San Francisco, CA2.jpg"]
	},
	{
		name: "Country Club Dr, South San Francisco, CA",
		images: ["Country Club Dr, South San Francisco, CA1.jpg-Country Club Dr, South San Francisco, CA2.jpg"]
	},
	{
		name: "Francisco St, San Francisco, CA",
		images: ["Francisco St, San Francisco, CA1.jpg-Francisco St, San Francisco, CA2.jpg"]
	},
	{
		name: "Franklin St San Francisco, CA",
		images: ["Franklin St San Francisco, CA1.jpg"]
	},
	{
		name: "Mallorca Way, San Francisco, CA",
		images: ["Mallorca Way, San Francisco, CA1.jpg-Mallorca Way, San Francisco, CA2.jpg"]
	},
	{
		name: "Steiner St, San Francisco, CA",
		images: ["Steiner St, San Francisco, CA1.jpg"]
	}
];
let imgPath = require.context("../../public/images/seismic", true);

const Seismic = props => {
	return (
		<Container>
			<Container>
				<h1 className="text-center my-5">Soft Story Seismic Retrofit</h1>

				<hr className="my-5" />
				<CardColumns>
					{seismic.map((build, idx) => {
						let time = Math.random() * 4;
						let num = Math.floor(Math.random() * Math.floor(4));
						let name = animationArray[num];
						let imgStyle = { animation: `${name} ${time}s` };
						let imgSrc = imgPath("./" + `${build.name}` + "1.jpg");

						return (
							<Card className="text-white" style={imgStyle} key={idx}>
								<Card.Img src={imgSrc}></Card.Img>
								<Card.ImgOverlay className="text-center d-flex flex-column mt-auto">
									<Button onClick={props.handleClick} value={build.name} name={build.images} className="btn-sm btn-sm-featured mx-auto mt-auto" variant="outline-secondary">
										View
									</Button>
								</Card.ImgOverlay>
							</Card>
						);
					})}
				</CardColumns>

				<Modal show={props.show} onHide={props.closeModal} container={this} dialogClassName="modal-90w" aria-labelledby="contained-modal-title">
					<Modal.Header closeButton className="mx-auto">
						<Modal.Title id="contained-modal-title">{props.property !== "" ? <h4>{props.property}</h4> : ""}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="mx-auto" style={{ width: "100%" }}>
						<CarouselSei images={props.imgs} />
					</Modal.Body>
				</Modal>

				<hr className="my-5" />
			</Container>
		</Container>
	);
};

export default Seismic;
