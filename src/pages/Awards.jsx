import React from "react";

import { Container, Row } from "react-bootstrap";
import BannerTitles from "../components/BannerTitles";

const Awards = () => {
	return (
		<div>
			<BannerTitles title={"Awards"} />
			<Container fluid className="p-0">
				<Container>
					<Row className="my-1">
						<h5 style={{ lineHeight: "40px" }}>2018 Remodel of the Year - San Francisco, California</h5>
					</Row>
					<p style={{ lineHeight: "20px" }}>Architect/Designers | Red Dot Studio | Structural Engineer: NY Engineering</p>
					<p style={{ lineHeight: "20px" }}>Builder | MT Development</p>
					<p style={{ lineHeight: "20px" }} className="my-3">
						Landscape Architect/Designer | Flora Grubb Gardens
					</p>
					<Row className="my-1">
						<p style={{ lineHeight: "20px" }}>
							Like much of San Francisco's housing stock, the Laidley Street Cottage was becoming out of date. Built to last 100 years, the home was at the end of its useful life, with all building systems needing upgrading. Originally, the home was a rear yard cottage. In the redesign, additional square footage was modest and focused on right-sizing the property to the site while adding new building systems, seismic retrofitting, and daylit design.
						</p>
					</Row>
					<Row className="my-1">
						<p style={{ lineHeight: "20px" }}>
							The cottage now has a friendly, window-filled façade, but the fence and gate structure provide privacy to the occupants on the living level. The living space extends generously to the front yard. The master bedroom has a private rear garden, and the guest bedroom has a balcony, providing yet more indoor/outdoor connections. Outdoor space and fresh air become part of the daily living area of the home. The Laidley Street Cottage’s attainable scale and outdoor oasis help
							foster a livable city for the next 100 years.
						</p>
					</Row>
				</Container>

				<Container className="my-4">
					<Row className="my-1">
						<h5 style={{ lineHeight: "40px" }}>Board for Professional Engineers and Land Surveyors</h5>
					</Row>
					<p>- California License #68482</p>
				</Container>

				<Container className="my-4">
					<Row className="my-1">
						<h5 style={{ lineHeight: "40px" }}>The University of the State of New York</h5>
					</Row>
					<p>- New York License #101584</p>
				</Container>
			</Container>
		</div>
	);
};

export default Awards;
