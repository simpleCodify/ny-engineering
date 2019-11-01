import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

import LogoBanner from "./components/LogoBanner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Residential from "./components/Residential";
import Remodels from "./components/Remodels";
import Commercial from "./components/Commercial";
import Seismic from "./components/Seismic";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			property: "",
			test: []
		};
	}

	handleClick = e => {
		e.preventDefault();
		let imgs = e.target.name.split("-")
		this.setState({ property: e.target.value, show: true, test: imgs });
	};

	// showModal = () => {
	// 	this.setState(prevState => ({
	// 		...prevState, show: true
	// 	}))
	// };

	// showModal = () => {
	// 	this.setState({ show: true });
	// };

	closeModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div>
				<LogoBanner />
				<NavBar />

				<Switch>
					<Route exact path="/" children={<Homepage />} />
					<Route exact path="/projects" children={<Projects />} />
					<Route path="/projects/residential" children={<Residential handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property} imgs={this.state.test}/>} />
					<Route path="/projects/remodels" children={<Remodels handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property} imgs={this.state.test}/>} />
					<Route path="/projects/commercial" children={<Commercial handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property} imgs={this.state.test}/>} />
					<Route path="/projects/seismic-retrofit" children={<Seismic handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property} imgs={this.state.test}/>} />

					{/* <Route exact path="/testing" children={<Testing handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property}/>} />
					<Route path="/testingtwo" children={<TestingTwo handleClick={this.handleClick} showModal = {this.showModal} closeModal={this.closeModal} show={this.state.show} property={this.state.property} imgs={this.state.test}/>} /> */}

					<Route path="/about" children={<About />} />
				</Switch>

				<Footer />
			</div>
		);
	}
}

export default App;
