import React from "react";
import Container from "react-bootstrap/Container";

import logo from "../assets/logo/logo.png";
import Image from "react-bootstrap/Image";

const LogoBanner = () => {
	return (
		<Container className="text-center mt-5 mb-2">
			<Image src={logo} alt="logopicture" />
		</Container>
	);
};

export default LogoBanner;
