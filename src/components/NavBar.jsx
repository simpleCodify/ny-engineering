import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar className="fontvariantsc">
			<Navbar.Collapse>
				<Nav className="justify-content-center mx-auto">
					<NavLink exact to="/" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Home
					</NavLink>
					<NavLink to="/about" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						The Firm
					</NavLink>
					<NavLink to="/services" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Services
					</NavLink>
					<NavLink to="/awards" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Awards
					</NavLink>
					<NavLink to="/projects" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Projects
					</NavLink>
					{/* <NavDropdown className="mx-4" title="Projects" id="collasible-nav-dropdown">
						<NavLink to="/projects/commercial" className="nav-link text-center p-0" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Commercial
						</NavLink>
						<NavDropdown.Divider />

						<NavLink to="/projects/residential" className="nav-link text-center p-0" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Residential
						</NavLink>
						<NavDropdown.Divider />

						<NavLink to="/projects/remodels" className="nav-link text-center p-0" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Remodel & Additions
						</NavLink>
						<NavDropdown.Divider />

						<NavLink to="/projects/seismic-retrofit" className="nav-link text-center p-0" activeStyle={{ fontWeight: "bold", color: "black" }}>
							Seismic Retrofit
						</NavLink>
					</NavDropdown> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
