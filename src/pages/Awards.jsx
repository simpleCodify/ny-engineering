import React from "react";

import { Container, Row } from "react-bootstrap";
import BannerTitles from "../components/BannerTitles";

const Awards = () => {
	return (
		<div>
			<BannerTitles title={"Awards"} />
			<Container fluid className="p-0">
				<Container>
					<Row>
						<h5>2018 Remodel of the Year - San Francisco, California</h5>
					</Row>
					<Row>
						<p>Architect/Designers | Red Dot Studio | Structural Engineer: NY Engineering</p>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default Awards;
