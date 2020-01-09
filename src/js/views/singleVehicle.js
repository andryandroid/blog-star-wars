import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.vehicles.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://www.prensalibre.com/wp-content/uploads/2018/12/bc6f9eec-9293-48f3-a3a7-d4c3a2979f81.jpg?quality=82&w=640&h=430&crop=1"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.vehicles.results[id].name}</h5>
								<ul>
									<li>Model: {store.vehicles.results[id].model} </li>
									<li>Manufacturer: {store.vehicles.results[id].manufacturer} </li>
									<li>Cost in credits: {store.vehicles.results[id].cost_in_credits}</li>
									<li>Length: {store.vehicles.results[id].length}</li>
									<li>Crew: {store.vehicles.results[id].crew}</li>
									<li>Passengers: {store.vehicles.results[id].passengers}</li>
									<li>Cargo capacity: {store.vehicles.results[id].cargo_capacity}</li>
									<li>
										Maxima atmosphering speed: {store.vehicles.results[id].max_atmosphering_speed}
									</li>
									<li>Vehicle class: {store.vehicles.results[id].vehicle_class}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
