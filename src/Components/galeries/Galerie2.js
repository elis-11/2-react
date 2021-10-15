import React from "react";
import "./galerie.css";

import img2 from "../pics/birger-strahl-63CvMI31Vbg-unsplash.jpg";

function GalerieTwo() {
	return (
		<section className="galerie--section section--2">
			<h3>Galerie 2</h3>
			<img src={img2} alt="Plant in water" />
		</section>
	);
}

export default GalerieTwo;
