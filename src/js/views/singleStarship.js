import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SingleStarship = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.starships.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://fsmedia.imgix.net/3b/7d/19/fd/c04a/433f/a655/c948156c9518/death-star.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=325&w=650"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.starships.results[id].name}</h5>
								<ul>
									<li>Model: {store.starships.results[id].model} </li>
									<li>Manufacturer: {store.starships.results[id].manufacturer} </li>
									<li>Cost in credits: {store.starships.results[id].cost_in_credits}</li>
									<li>Length: {store.starships.results[id].length}</li>
									<li>Crew: {store.starships.results[id].crew}</li>
									<li>Passengers: {store.starships.results[id].passengers}</li>
									<li>Cargo capacity: {store.starships.results[id].cargo_capacity}</li>
									<li>Hyperdrive rating: {store.starships.results[id].hyperdrive_rating}</li>
									<li>MGLT: {store.starships.results[id].MGLT}</li>
									<li>Starship class: {store.starships.results[id].starship_class}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SingleStarship.propTypes = {
	match: PropTypes.object
};

name: "Executor";
model: "Executor-class star dreadnought";
manufacturer: "Kuat Drive Yards, Fondor Shipyards";
cost_in_credits: "1143350000";
length: "19000";
max_atmosphering_speed: "n/a";
crew: "279144";
passengers: "38000";
cargo_capacity: "250000000";
consumables: "6 years";
