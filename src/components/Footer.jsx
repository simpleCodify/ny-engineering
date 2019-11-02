import React from "react";

import Container from "react-bootstrap/Container";

const Footer = () => {
	return (
		<Container fluid className="sticky-bot fontvariantsc">
			<div className="pageFooter text-center my-5" fluid>
				<div className="row mt-3">
					<div className="col-md-6 mx-auto" style={{ fontSize: "12px" }}>
						<h4>NY Engineering</h4>
						<br />
						<p>Nilgun Wolpe, P.E.</p>
						<hr style={{ width: "25px", borderColor: "rgba(80,80,80,0.45)" }} />
						<p>License # 68482</p>
						<p>850 S. Van Ness Ave. Suite #9</p>
						<p>San Francisco, CA 94110</p>
						<hr style={{ width: "25px", borderColor: "rgba(80,80,80,0.45)" }} />
						<p>
							<a style={{ textDecoration: "none", color: "black" }} href="tel:+1415-568-1270">
								1-(415)-568-1270
							</a>
						</p>
						<p>
							<a style={{ textDecoration: "none", color: "black" }} href="mailto:nyengineering@sbcglobal.net">
								nyengineering@sbcglobal.net
							</a>
						</p>
						<hr style={{ width: "25px", borderColor: "rgba(80,80,80,0.45)" }} />
						<p>
							<a style={{ textDecoration: "none", color: "black" }} href="https://www.linkedin.com/in/jonathan-pak/">
								Designed by Jonathan Pak
							</a>
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
