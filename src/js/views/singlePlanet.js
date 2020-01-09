import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.planets.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://pm1.narvii.com/6277/ea85f6959e0559d6511f5529a5e8e4d46217ed77_hq.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.planets.results[id].name}</h5>
								<ul>
									<li>Rotation period: {store.planets.results[id].rotation_period} </li>
									<li>Orbital period: {store.planets.results[id].orbital_period}</li>
									<li>Diameter: {store.planets.results[id].diameter}</li>
									<li>Climate: {store.planets.results[id].climate}</li>
									<li>Gravity: {store.planets.results[id].gravity}</li>
									<li>Population: {store.planets.results[id].population}</li>
									<li>Terrain: {store.planets.results[id].terrain}</li>
									<li>Surface water: {store.planets.results[id].surface_water}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
