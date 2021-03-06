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
			<Container fluid className="mx-auto" style={{ marginBottom: "20vh" }}>
				<Row className="my-1 col-12 mb-5">
					<Col xs={12} sm={6} md={8} lg={4} xl={3} className="my-5 mx-auto" style={{ height: "100%" }}>
						<Card className="award-card mx-auto col-12 my-auto">
							<Card.Img src={awardthumb} style={{ border: "1px solid black" }} />
							<Card.ImgOverlay className="d-flex align-items-end">
								<Card.Body>
									<Link className="rr_link mx-auto mt-auto stretched-link" onClick={props.handleClick}></Link>
								</Card.Body>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col xs={12} md={12} lg={8} xl={9} className="my-auto">
						<Card className="about-card">
							<Card.Body className="p-5">
								<Card.Title className="mb-5">
									<Row>
										<Col className="col-12 col-sm-12 col-md-6 col-lg-6">
											<h4>2018 Remodel of the Year - San Francisco, California</h4>
										</Col>
										<Col className="col-12 col-sm-12 col-md-6 col-lg-6 text-right text-muted">
											<small>Architect/Designers | Red Dot Studio | Structural Engineer: NY Engineering</small>
											<br />
											<small>Builder | MT Development</small>
											<br />
											<small>Landscape Architect/Designer | Flora Grubb Gardens</small>
											<br />
											<small>Photographer | John Lee | Marketing Firm: Wagner Creative</small>
											<br />
										</Col>
									</Row>
								</Card.Title>
								<Card.Text>
									<p>Like much of San Francisco's housing stock, the Laidley Street Cottage was becoming out of date. Built to last 100 years, the home was at the end of its useful life, with all building systems needing upgrading. Originally, the home was a rear yard cottage. In the redesign, additional square footage was modest and focused on right-sizing the property to the site while adding new building systems, seismic retrofitting, and daylit design.</p>
									<p>
										The cottage now has a friendly, window-filled façade, but the fence and gate structure provide privacy to the occupants on the living level. The living space extends generously to the front yard. The master bedroom has a private rear garden, and the guest bedroom has a balcony, providing yet more indoor/outdoor connections. Outdoor space and fresh air become part of the daily living area of the home. The Laidley Street Cottage’s attainable scale and
										outdoor oasis help foster a livable city for the next 100 years.
									</p>
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<blockquote className="text-muted mb-0">"The stair, particularly the stair turn and skylights, is lovely. Judges loved the shower off the garden and overall, found this project very beautiful."</blockquote>
								<small>- FROM THE JUDGES</small>
								<br />
								<br />
								<small>
									<cite title="National Association of Home Builders">National Association of Home Builders</cite>
								</small>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
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
