import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

let awardPath = require.context("../../public/images/awardslides", true);
let awardthumb = awardPath("./1.jpg");

const AwardCard = props => {
	return (
		<div>
			<Container fluid style={{ marginBottom: "20vh" }}>
				<Row className="col-10 mx-auto about-card my-5 p-3">
					<Col lg className="col-12 col-md-3 text-center ">
						<Card>
							<Card.Img src={awardthumb} />
							<Card.ImgOverlay className="d-flex align-items-end">
								<Card.Body>
									<a target="_blank" href="https://bestinamericanliving.com/awards/2018-1631/" className="rr_link mx-auto mt-auto stretched-link"></a>
								</Card.Body>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col className="col-12 col-md-9 my-auto mt-3 pt-2">
						<h5 className="cred-titles my-auto">2018 - Remodel of the Year</h5>
						<p>Laidley Cottage - San Francisco, California</p>
						<a target="_blank" href="https://bestinamericanliving.com/awards/2018-1631/" className=" mx-auto">
							View Details
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AwardCard;
