import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar className="fontvariantsc mx-auto">
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
					<NavLink to="/projects" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Projects
					</NavLink>
					<NavLink to="/credentials" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Credentials
					</NavLink>
					{/* <NavLink to="/awards" className="nav-link mx-4" activeStyle={{ fontWeight: "bold", color: "black" }}>
						Awards
					</NavLink> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
