import React from "react";
import { Container, Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

let newResidentials = ["Claremont Dr, San Bruno, CA", "Fir St, South San Francisco, CA", "Howard Ave, Burlingame, CA", "Marston Ave, San Francisco, CA", "Paloma Ave, Burlingame, CA", "Pullman Avenue, Half Moon Bay, CA", "Santa Clara Street, Brisbane, CA", "Skyfarm Drive, Santa Rosa, CA", "Trinidad Dr, Tiburon, CA", "Werner Ave Daly City, CA (3 Houses)"];
let remodels = ["Bayswater Ave Burlingame, CA", "Chelmsford Rd, Hillsborough, CA", "Highland Ave San Carlos, CA", "Jackson St, San Francisco, CA", "Mallorca Way, San Francisco, CA", "Matheson Street, Healdsburg, CA", "Ramona Avenue, Albany, CA", "Rosewood Drive, San Francisco, CA"];
let seismic = ["Bartlett, San Francisco, CA", "Country Club Dr, South San Francisco, CA", "Francisco St, San Francisco, CA", "Franklin St San Francisco, CA", "Mallorca Way, San Francisco, CA", "Steiner St, San Francisco, CA"];
let commercial = ["25th Avenue, San Francisco, CA", "Howard, Burlingame, CA", "N. Lenore, Willits, CA (2 Buildings)", "Post Street, San Francisco, CA", "San Mateo Ave San Bruno, CA"];

let newResidentialsimgPath = require.context("../../public/images/newResidential", true);
let remodelsimgPath = require.context("../../public/images/remodels", true);
let seismicimgPath = require.context("../../public/images/seismic", true);
let commercialimgPath = require.context("../../public/images/commercial", true);

let num1 = Math.floor(Math.random() * Math.floor(4));
let num2 = Math.floor(Math.random() * Math.floor(4));
let num3 = Math.floor(Math.random() * Math.floor(4));
let num4 = Math.floor(Math.random() * Math.floor(4));

let randomRes = newResidentials[num1];
let randomRem = remodels[num2];
let randomSei = seismic[num3];
let randomCom = commercial[num4];

let randomResIdx = newResidentials.indexOf(`${randomRes}`) + 1;
let randomRemIdx = remodels.indexOf(`${randomRem}`) + 11;
let randomSeiIdx = seismic.indexOf(`${randomSei}`) + 1;
let randomComIdx = commercial.indexOf(`${randomCom}`) + 1;

let resimgSrc = newResidentialsimgPath("./" + `${randomRes}` + "1.jpg");
let remimgSrc = remodelsimgPath("./" + `${randomRem}` + "1.jpg");
let seiimgSrc = seismicimgPath("./" + `${randomSei}` + "1.jpg");
let comimgSrc = commercialimgPath("./" + `${randomCom}` + "1.jpg");

console.log(randomRes);

const Featured = () => {
	return (
		<Container>
			<hr />
			<h3>Featured Projects</h3>
			<CardDeck className="p-3 fontvariantsc">
				<Card>
					<Card.Img src={resimgSrc} style={{ height: "150px", objectFit: "cover" }} />
					<Card.Footer className="text-center" style={{ backgroundColor: "rgb(220,220,220)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", border: "5px solid white" }}>
						<Card.Text className="text-shadow">New Residential</Card.Text>
						<Link className="rr_link mt-auto" to={`/projects/residential/${randomResIdx}`}>
							<span style={{ color: "black", fontSize: "14px" }}>
								{" "}
								<Button className="btn-sm-featured" variant="outline-secondary">
									View
								</Button>
							</span>
						</Link>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img src={remimgSrc} style={{ height: "150px", objectFit: "cover" }} />
					<Card.Footer className="text-center" style={{ backgroundColor: "rgb(220,220,220)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", border: "5px solid white" }}>
						<Card.Text className="text-shadow">Remodeling & Additions</Card.Text>
						<Link className="rr_link mt-auto" to={`/projects/residential/${randomRemIdx}`}>
							<span style={{ color: "black", fontSize: "14px" }}>
								{" "}
								<Button className="btn-sm-featured" variant="outline-secondary">
									View
								</Button>
							</span>
						</Link>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img src={seiimgSrc} style={{ height: "150px", objectFit: "cover" }} />
					<Card.Footer className="text-center" style={{ backgroundColor: "rgb(220,220,220)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", border: "5px solid white" }}>
						<Card.Text className="text-shadow">Seismic Retrofit</Card.Text>
						<Link className="rr_link mt-auto" to={`/projects/seismic-retrofit/${randomSeiIdx}`}>
							<span style={{ color: "black", fontSize: "14px" }}>
								<Button className="btn-sm-featured" variant="outline-secondary">
									View
								</Button>
							</span>
						</Link>
					</Card.Footer>
				</Card>

				<Card>
					<Card.Img src={comimgSrc} style={{ height: "150px", objectFit: "cover" }} />
					<Card.Footer className="text-center" style={{ backgroundColor: "rgb(220,220,220)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", border: "5px solid white" }}>
						<Card.Text className="text-shadow">Commercial & Industrial</Card.Text>
						<Link className="rr_link mt-auto" to={`/projects/commercial/${randomComIdx}`}>
							<span style={{ color: "black", fontSize: "14px" }}>
								{" "}
								<Button className="btn-sm-featured" variant="outline-secondary">
									View
								</Button>
							</span>
						</Link>
					</Card.Footer>
				</Card>
			</CardDeck>
			<hr className="my-5" />
		</Container>
	);
};

export default Featured;
