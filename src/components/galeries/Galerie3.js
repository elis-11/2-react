import React from "react";
import "./galerie.css";

import img3 from "../pics/gian-d-YE6iUShVcps-unsplash.jpg";

function GalerieThree() {
	return (
		<section className="galerie--section section--3">
			<h3>Galerie 3</h3>
			<img src={img3} alt="Flower" />
		</section>
	);
}

export default GalerieThree;
