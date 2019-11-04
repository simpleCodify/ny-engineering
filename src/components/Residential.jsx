import React from "react";
import Container from "react-bootstrap/Container";
import { Card, CardColumns, Button, Modal } from "react-bootstrap";
import CarouselNewR from "./CarouselNewR";
import BannerTitles from "./BannerTitles";

let animationArray = ["cardMoveInTop", "cardMoveInBottom", "cardMoveInLeft", "cardMoveInRight"];

let residential = [
	{
		name: "Claremont Dr, San Bruno, CA",
		images: ["Claremont Dr, San Bruno, CA1.jpg-Claremont Dr, San Bruno, CA2.jpg-Claremont Dr, San Bruno, CA3.jpg-Claremont Dr, San Bruno, CA4.jpg-Claremont Dr, San Bruno, CA5.jpg"]
	},
	{
		name: "Fir St, South San Francisco, CA",
		images: ["Fir St, South San Francisco, CA1.jpg-Fir St, South San Francisco, CA2.jpg-Fir St, South San Francisco, CA3.jpg-Fir St, South San Francisco, CA4.jpg"]
	},
	{
		name: "Howard Ave, Burlingame, CA",
		images: ["Howard Ave, Burlingame, CA1.jpg"]
	},
	{
		name: "Marston Ave, San Francisco, CA",
		images: ["Marston Ave, San Francisco, CA1.jpg-Marston Ave, San Francisco, CA2.jpg-Marston Ave, San Francisco, CA3.jpg"]
	},
	{
		name: "Paloma Ave, Burlingame, CA",
		images: ["Paloma Ave, Burlingame, CA1.jpg-Paloma Ave, Burlingame, CA2.jpg-Paloma Ave, Burlingame, CA3.jpg-Paloma Ave, Burlingame, CA4.jpg-Paloma Ave, Burlingame, CA5.jpg-Paloma Ave, Burlingame, CA6.jpg-Paloma Ave, Burlingame, CA7.jpg-Paloma Ave, Burlingame, CA8.jpg-Paloma Ave, Burlingame, CA9.jpg-Paloma Ave, Burlingame, CA10.jpg-Paloma Ave, Burlingame, CA11.jpg-Paloma Ave, Burlingame, CA12.jpg"]
	},
	{
		name: "Pullman Avenue, Half Moon Bay, CA",
		images: [
			"Pullman Avenue, Half Moon Bay, CA1.jpg-Pullman Avenue, Half Moon Bay, CA2.jpg-Pullman Avenue, Half Moon Bay, CA3.jpg-Pullman Avenue, Half Moon Bay, CA4.jpg-Pullman Avenue, Half Moon Bay, CA5.jpg-Pullman Avenue, Half Moon Bay, CA6.jpg-Pullman Avenue, Half Moon Bay, CA7.jpg-Pullman Avenue, Half Moon Bay, CA8.jpg-Pullman Avenue, Half Moon Bay, CA9.jpg-Pullman Avenue, Half Moon Bay, CA10.jpg-Pullman Avenue, Half Moon Bay, CA11.jpg-Pullman Avenue, Half Moon Bay, CA12.jpg-Pullman Avenue, Half Moon Bay, CA13.jpg-Pullman Avenue, Half Moon Bay, CA14.jpg"
		]
	},
	{
		name: "Santa Clara Street, Brisbane, CA",
		images: ["Santa Clara Street, Brisbane, CA1.jpg-Santa Clara Street, Brisbane, CA2.jpg-Santa Clara Street, Brisbane, CA3.jpg-Santa Clara Street, Brisbane, CA4.jpg-Santa Clara Street, Brisbane, CA5.jpg-Santa Clara Street, Brisbane, CA6.jpg-Santa Clara Street, Brisbane, CA7.jpg-Santa Clara Street, Brisbane, CA8.jpg-Santa Clara Street, Brisbane, CA9.jpg"]
	},
	{
		name: "Skyfarm Drive, Santa Rosa, CA",
		images: ["Skyfarm Drive, Santa Rosa, CA1.jpg-Skyfarm Drive, Santa Rosa, CA2.jpg-Skyfarm Drive, Santa Rosa, CA3.jpg-Skyfarm Drive, Santa Rosa, CA4.jpg-Skyfarm Drive, Santa Rosa, CA5.jpg-Skyfarm Drive, Santa Rosa, CA6.jpg-Skyfarm Drive, Santa Rosa, CA7.jpg-Skyfarm Drive, Santa Rosa, CA8.jpg"]
	},
	{
		name: "Trinidad Dr, Tiburon, CA",
		images: ["Trinidad Dr, Tiburon, CA1.jpg-Trinidad Dr, Tiburon, CA2.jpg-Trinidad Dr, Tiburon, CA3.jpg-Trinidad Dr, Tiburon, CA4.jpg-Trinidad Dr, Tiburon, CA5.jpg-Trinidad Dr, Tiburon, CA6.jpg-Trinidad Dr, Tiburon, CA7.jpg-Trinidad Dr, Tiburon, CA8.jpg-Trinidad Dr, Tiburon, CA9.jpg"]
	},
	{
		name: "Werner Ave Daly City, CA (3 Houses)",
		images: ["Werner Ave Daly City, CA (3 Houses)1.jpg-Werner Ave Daly City, CA (3 Houses)2.jpg-Werner Ave Daly City, CA (3 Houses)3.jpg-Werner Ave Daly City, CA (3 Houses)4.jpg-Werner Ave Daly City, CA (3 Houses)5.jpg"]
	}
];
let imgPath = require.context("../../public/images/newResidential", true);

const Residential = props => {
	return (
		<Container fluid className="p-0">
			<BannerTitles title={"New Residentials"} />
			<Container className="col-12 col-md-9">
				<CardColumns>
					{residential.map((build, idx) => {
						let time = Math.random() * 4;
						let num = Math.floor(Math.random() * Math.floor(4));
						let name = animationArray[num];
						let imgStyle = { animation: `${name} ${time}s` };
						let imgSrc = imgPath("./" + `${build.name}` + "1.jpg");

						return (
							<Card className="text-white my-2" style={imgStyle} key={idx} value={build.name}>
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
				<hr className="my-5" />

				<Modal show={props.show} onHide={props.closeModal} container={this} dialogClassName="modal-90w" aria-labelledby="contained-modal-title">
					<Modal.Header closeButton className="mx-auto">
						<Modal.Title id="contained-modal-title">{props.property !== "" ? <h4>{props.property}</h4> : ""}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="mx-auto" style={{ width: "100%" }}>
						<CarouselNewR images={props.imgs} />
					</Modal.Body>
				</Modal>
			</Container>
		</Container>
	);
};
export default Residential;
