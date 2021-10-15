import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./works.css";
import GalerieOne from "../galeries/Galerie1";
import GalerieTwo from "../galeries/Galerie2";
import GalerieThree from "../galeries/Galerie3";

function Works() {
	return (
		<Router>
			<section className="works--section">
				<h2>Works</h2>
				<p>Page 2</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					blanditiis rerum quaerat optio adipisci corrupti nulla, perferendis ad
					delectus similique exercitationem maiores quos rem laudantium
					molestias ipsa minima at itaque eaque ex sed culpa ullam! Ex non
					quibusdam dolorem vel iure ipsa quis quam rem eos? Magnam, harum
					distinctio! Nesciunt!
				</p>
				<nav>
					<ul className="nav--ul">
						<li>
							<Link className="nav--link galerie--link" to="/works/galerie1">
								Galerie 1
							</Link>
						</li>
						<li>
							<Link className="nav--link galerie--link" to="/works/galerie2">
								Galerie 2
							</Link>
						</li>
						<li>
							<Link className="nav--link galerie--link" to="/works/galerie3">
								Galerie 3
							</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/works/galerie1" exact component={GalerieOne} />
					<Route path="/works/galerie2" exact component={GalerieTwo} />
					<Route path="/works/galerie3" exact component={GalerieThree} />
				</Switch>
			</section>
		</Router>
	);
}

export default Works;
