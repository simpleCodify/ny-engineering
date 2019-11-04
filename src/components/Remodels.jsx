import React from "react";
import Container from "react-bootstrap/Container";
import { Card, CardColumns, Button, Modal } from "react-bootstrap";
import CarouselRemo from "./CarouselRemo";
import BannerTitles from "./BannerTitles";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let remodels = [
	{
		name: "Bayswater Ave Burlingame, CA",
		images: ["Bayswater Ave Burlingame, CA1.jpg-Bayswater Ave Burlingame, CA2.jpg-Bayswater Ave Burlingame, CA3.jpg-Bayswater Ave Burlingame, CA4.jpg"]
	},
	{
		name: "Chelmsford Rd, Hillsborough, CA",
		images: ["Chelmsford Rd, Hillsborough, CA1.jpg-Chelmsford Rd, Hillsborough, CA2.jpg"]
	},
	{
		name: "Highland Ave San Carlos, CA",
		images: ["Highland Ave San Carlos, CA1.jpg-Highland Ave San Carlos, CA2.jpg-Highland Ave San Carlos, CA3.jpg-Highland Ave San Carlos, CA4.jpg-Highland Ave San Carlos, CA5.jpg-Highland Ave San Carlos, CA6.jpg-Highland Ave San Carlos, CA7.jpg-Highland Ave San Carlos, CA8.jpg-Highland Ave San Carlos, CA9.jpg-Highland Ave San Carlos, CA10.jpg-Highland Ave San Carlos, CA11.jpg"]
	},
	{
		name: "Jackson St, San Francisco, CA",
		images: ["Jackson St, San Francisco, CA1.jpg-Jackson St, San Francisco, CA2.jpg-Jackson St, San Francisco, CA3.jpg-Jackson St, San Francisco, CA4.jpg-Jackson St, San Francisco, CA5.jpg"]
	},
	{
		name: "Mallorca Way, San Francisco, CA",
		images: ["Mallorca Way, San Francisco, CA1.jpg"]
	},
	{
		name: "Matheson Street, Healdsburg, CA",
		images: ["Matheson Street, Healdsburg, CA1.jpg-Matheson Street, Healdsburg, CA2.jpg-Matheson Street, Healdsburg, CA3.jpg-Matheson Street, Healdsburg, CA4.jpg-Matheson Street, Healdsburg, CA5.jpg-Matheson Street, Healdsburg, CA6.jpg"]
	},
	{
		name: "Ramona Avenue, Albany, CA",
		images: ["Ramona Avenue, Albany, CA1.jpg-Ramona Avenue, Albany, CA2.jpg-Ramona Avenue, Albany, CA3.jpg-Ramona Avenue, Albany, CA4.jpg-Ramona Avenue, Albany, CA5.jpg-Ramona Avenue, Albany, CA6.jpg"]
	},
	{
		name: "Rosewood Drive, San Francisco, CA",
		images: ["Rosewood Drive, San Francisco, CA1.jpg-Rosewood Drive, San Francisco, CA2.jpg-Rosewood Drive, San Francisco, CA3.jpg"]
	}
];
let imgPath2 = require.context("../../public/images/remodels", true);

const Remodels = props => {
	return (
		<Container fluid className="p-0">
			<BannerTitles title={"Remodeling & Additions"} />
			<Container className="col-12 col-md-9">
				<CardColumns>
					{remodels.map((build, idx) => {
						let time = Math.random() * 4;
						let num = Math.floor(Math.random() * Math.floor(4));
						let name = animationArray[num];
						let imgStyle = { animation: `${name} ${time}s` };
						let imgSrc = imgPath2("./" + `${build.name}` + "1.jpg");

						return (
							<Card className="text-white my-2" style={imgStyle} key={idx}>
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
						<CarouselRemo images={props.imgs} />
					</Modal.Body>
				</Modal>

				<hr className="my-5" />
			</Container>
		</Container>
	);
};
export default Remodels;
