import React from "react";

import { Container, Row, Modal, Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import BannerTitles from "../components/BannerTitles";
import AwardSlides from "../components/AwardSlides";

let awardPath = require.context("../../public/images/awardslides", true);
let awardthumb = awardPath("./1.jpg");

const Awards = props => {
	return (
		<div>
			<BannerTitles title={"Awards"} />
			<Container className="mx-auto col-10" style={{ marginBottom: "20vh" }}>
				<Row className="my-1 col-12 mb-5">
					<Col xs={12} md={6} lg={3} className="my-auto mx-auto h-100">
						<Card className="award-card mx-auto col-12 my-auto p-3 h-100">
							<Card.Img src={awardthumb} />
							<Card.ImgOverlay className="d-flex align-items-end">
								<Card.Body>
									<Link className="rr_link mx-auto mt-auto stretched-link" onClick={props.handleClick}></Link>
								</Card.Body>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} md={6} lg={8}>
						<Row className="my-1">
							<h5 style={{ lineHeight: "40px" }}>2018 Remodel of the Year - San Francisco, California</h5>
						</Row>
						<p style={{ lineHeight: "20px" }}>Architect/Designers | Red Dot Studio | Structural Engineer: NY Engineering</p>
						<p style={{ lineHeight: "20px" }}>Builder | MT Development</p>
						<p style={{ lineHeight: "20px" }}>Landscape Architect/Designer | Flora Grubb Gardens</p>
						<p style={{ lineHeight: "20px" }} className="my-3">
							Photographer | John Lee | Marketing Firm: Wagner Creative
						</p>
						<Row className="my-1">
							<p style={{ lineHeight: "20px" }}>
								Like much of San Francisco's housing stock, the Laidley Street Cottage was becoming out of date. Built to last 100 years, the home was at the end of its useful life, with all building systems needing upgrading. Originally, the home was a rear yard cottage. In the redesign, additional square footage was modest and focused on right-sizing the property to the site while adding new building systems, seismic retrofitting, and daylit design.
							</p>
						</Row>
						<Row className="my-1">
							<p style={{ lineHeight: "20px" }}>
								The cottage now has a friendly, window-filled façade, but the fence and gate structure provide privacy to the occupants on the living level. The living space extends generously to the front yard. The master bedroom has a private rear garden, and the guest bedroom has a balcony, providing yet more indoor/outdoor connections. Outdoor space and fresh air become part of the daily living area of the home. The Laidley Street Cottage’s attainable scale and outdoor oasis
								help foster a livable city for the next 100 years.
							</p>
						</Row>
					</Col>
				</Row>

				<div className="mx-auto col-12 text-center">
					<h4 className="mx-auto text-center">Licenses</h4>
					<Row>
						<Col xs={12} md={5} lg={5} className="license-card mx-auto my-3">
							<h5 className="mx-auto text-center" style={{ lineHeight: "40px" }}>
								Board for Professional Engineers and Land Surveyors
							</h5>
							<p>- California License #68482</p>
						</Col>
						<Col xs={12} md={5} lg={5} className="license-card mx-auto my-3">
							<h5 className="mx-auto text-center" style={{ lineHeight: "40px" }}>
								The University of the State of New York
							</h5>
							<p>- New York License #101584</p>
						</Col>
					</Row>
				</div>
			</Container>

			<Modal show={props.show} onHide={props.closeModal} container={this} dialogClassName="modal-90w" aria-labelledby="contained-modal-title">
				<Modal.Header closeButton className="mx-auto">
					<Modal.Title id="contained-modal-title">Laidley Cottage</Modal.Title>
				</Modal.Header>
				<Modal.Body className="mx-auto" style={{ width: "100%" }}>
					<AwardSlides />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Awards;
