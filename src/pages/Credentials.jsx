import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BannerTitles from "../components/BannerTitles";

const Credentials = props => {
	return (
		<div>
			<BannerTitles title={"Certifications & Licenses"} />
			<Container className="col-10 mx-auto p-5" style={{ marginBottom: "20vh" }}>
				<div className="p-5 mb-5 about-card">
					<h4>Licenses</h4>
					<br />
					<div className="ml-5 mb-5">
						<p className="cred-titles mb-0">Professional Engineer in Civil Engineering</p>
						<p className="mb-0">Board for Professional Engineers and Land Surveyors</p>
						<p>California License #68482</p>

						<p className="cred-titles mb-0">Professional Engineer in the State of New York</p>
						<p className="mb-0">The University of the State of New York</p>
						<p>New York License #101584</p>
					</div>

					<h4>Certifications</h4>
					<br />
					<div className="ml-5">
						<p className="cred-titles">SEAONC (certificate)</p>
						<ul>
							<li>CBC Current Code Updates</li>
							<li>Retrofit of Soft Story Wood Framed Buildings</li>
						</ul>
						<br />

						<p className="cred-titles">Certificates from S.K. Ghosh Associates</p>
						<ul>
							<li>2018 IEBC</li>
							<li>Structural Changes in the 2018 IBC</li>
							<li>Changes in ASCE 7-16</li>
							<li>Structural Irregularities in Seismic Design by ASCE 7-10, ASCE 7-16/2015 IBC, 2018 IBC</li>
							<li>Design Load Combinations of the 2015 & 2018 IBC</li>
							<li>TMS 402-2016 Masonry Code</li>
							<li>Ever-Changing Structural provisions of our Building Codes - Earthquake</li>
							<li>Steel Moment Frames</li>
							<li>Ever-Changing Structural provisions of our Building Codes - Wind</li>
							<li>Wood Shear Wall Seismic & Wind Design per 2018 WFCM & 2015 SDPWS</li>
							<li>Significant Wood Design & Construction Changes to the 2018 IBC & NDS</li>
						</ul>
						<br />

						<p className="cred-titles">SIMPSON Strong Tie</p>
						<ul>
							<li>Lateral Systems & Retrofits</li>
							<li>General Construction Review with Lateral Systems & Anchors</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Credentials;
