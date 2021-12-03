import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Hooks.scss";
import UseEff from "./useEff/UseEff";
import UseSt from "./useSt/UseSt";

function Hooks() {
	return (
		<div className="Hooks">
		<Router>
			<section>
				<h2>Hooks</h2>
				<p>Page 1</p>
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
							<Link className="link" to="/hooks/UseSt">
								UseState
							</Link>
						</li>
						<li>
							<Link className="link" to="/hooks/UseEff">
								UseEffect
							</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/hooks/useSt">
						<UseSt />
					</Route>
					<Route path="/hooks/useEff">
						<UseEff />
					</Route>
				</Switch>
			</section>
		</Router>
		</div>
	);
}

export default Hooks;