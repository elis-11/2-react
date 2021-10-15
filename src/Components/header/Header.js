import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	return (
		<header className="header">
			<nav>
				<ul className="nav--ul">
					<li>
						<Link className="nav--link nav--link--1" to="/">
							<h1>Home</h1>
						</Link>
					</li>
					<li>
						<Link className="nav--link nav--link--2" to="/works">
							Works
						</Link>
					</li>
					<li>
						<Link className="nav--link nav--link--3" to="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
