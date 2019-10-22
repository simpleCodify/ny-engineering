import React from "react";
import { Card, CardColumns, Container, Button, Modal } from "react-bootstrap";
import CarouselCom from "./CarouselCom";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let commercial = [
	{
		name: "25th Avenue, San Francisco, CA",
		images: ["25th Avenue, San Francisco, CA1.jpg-25th Avenue, San Francisco, CA2.jpg-25th Avenue, San Francisco, CA3.jpg-25th Avenue, San Francisco, CA4.jpg"]
	},
	{
		name: "Howard, Burlingame, CA",
		images: ["Howard, Burlingame, CA1.jpg-Howard, Burlingame, CA2.jpg-Howard, Burlingame, CA3.jpg-Howard, Burlingame, CA4.jpg-Howard, Burlingame, CA5.jpg-Howard, Burlingame, CA6.jpg"]
	},
	{
		name: "N. Lenore, Willits, CA (2 Buildings)",
		images: [
			"N. Lenore, Willits, CA (2 Buildings)1.jpg-N. Lenore, Willits, CA (2 Buildings)2.jpg-N. Lenore, Willits, CA (2 Buildings)3.jpg-N. Lenore, Willits, CA (2 Buildings)4.jpg-N. Lenore, Willits, CA (2 Buildings)5.jpg-N. Lenore, Willits, CA (2 Buildings)6.jpg-N. Lenore, Willits, CA (2 Buildings)7.jpg-N. Lenore, Willits, CA (2 Buildings)8.jpg-N. Lenore, Willits, CA (2 Buildings)9.jpg-N. Lenore, Willits, CA (2 Buildings)10.jpg-N. Lenore, Willits, CA (2 Buildings)11.jpg-N. Lenore, Willits, CA (2 Buildings)12.jpg-N. Lenore, Willits, CA (2 Buildings)13.jpg-N. Lenore, Willits, CA (2 Buildings)14.jpg-N. Lenore, Willits, CA (2 Buildings)15.jpg-N. Lenore, Willits, CA (2 Buildings)16.jpg"
		]
	},
	{
		name: "Post Street, San Francisco, CA",
		images: ["Post Street, San Francisco, CA1.jpg-Post Street, San Francisco, CA2.jpg-Post Street, San Francisco, CA3.jpg-Post Street, San Francisco, CA4.jpg-Post Street, San Francisco, CA5.jpg"]
	},
	{
		name: "San Mateo Ave San Bruno, CA",
		images: ["San Mateo Ave San Bruno, CA1.jpg-San Mateo Ave San Bruno, CA2.jpg-San Mateo Ave San Bruno, CA3.jpg"]
	}
];
let imgPath = require.context("../../public/images/commercial", true);

const Commercial = props => {
	return (
		<Container>
			<Container>
				<h1 className="text-center my-5">Commercial & Industrial</h1>

				<hr className="my-5" />
				<CardColumns>
					{commercial.map((build, idx) => {
						let time = Math.random() * 4;
						let num = Math.floor(Math.random() * Math.floor(4));
						let name = animationArray[num];
						let imgStyle = { animation: `${name} ${time}s` };
						let imgSrc = imgPath("./" + `${build.name}` + "1.jpg");

						return (
							<Card className="text-white" style={imgStyle} key={idx} value={build.name}>
								<Card.Img src={imgSrc}></Card.Img>
								<Card.ImgOverlay className="text-center d-flex flex-column mt-auto">
									<Button onClick={props.handleClick} value={build.name} name={build.images} className="btn-sm btn-sm-featured mx-auto mt-auto" variant="outline-secondary">
										View
									</Button>
								</Card.ImgOverlay>
							</Card>
						);
					})}

					<Modal show={props.show} onHide={props.closeModal} container={this} dialogClassName="modal-90w" aria-labelledby="contained-modal-title">
						<Modal.Header closeButton className="mx-auto">
							<Modal.Title id="contained-modal-title">{props.property !== "" ? <h4>{props.property}</h4> : ""}</Modal.Title>
						</Modal.Header>
						<Modal.Body className="mx-auto" style={{ width: "100%" }}>
							<CarouselCom images={props.imgs} />
						</Modal.Body>
					</Modal>
				</CardColumns>
				<hr className="my-5" />
			</Container>
		</Container>
	);
};

export default Commercial;
