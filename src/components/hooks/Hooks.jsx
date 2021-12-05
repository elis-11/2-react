import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Hooks.scss';
import UseState from './useState/UseState';
import UseEff from './useEff/UseEff';
import UseRef from './useRef/UseRef';
import UseSt from './useSt/UseSt';

function Hooks() {
	return (
		<div className="Hooks">
			<Router>
				<section>
					{/* <h2>Hooks</h2> */}
					{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio! Nesciunt!</p> */}
					<nav>
						<ul className="nav--ul">
							<li>
								<Link className="link" to="/hooks/UseSt">
									UseState-Counter
								</Link>
							</li>
							<li>
								<Link className="link" to="/hooks/UseEff">
									UseEffect-Coordinator
								</Link>
							</li>
							<li>
								<Link className="link" to="/hooks/UseRef">
									UseRef-Login
								</Link>
							</li>
							<li>
								<Link className="link" to="/hooks/UseState">
									UseState-Add-Supliers
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
						<Route path="/hooks/useRef">
							<UseRef />
						</Route>
						<Route path="/hooks/useState">
							<UseState />
						</Route>
					</Switch>
				</section>
			</Router>
		</div>
	);
}

export default Hooks;
