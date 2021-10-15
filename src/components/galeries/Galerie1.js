import React from "react";
import "./galerie.css";

import img from "../pics/alberto-bobbera-0TCUOrQ00gg-unsplash.jpg";

function GalerieOne() {
	return (
		<section className="galerie--section section--1">
			<h3>Galerie 1</h3>
			
			<img src={img} alt="Computer Keyboard" />
		</section>
	);
}

export default GalerieOne;
