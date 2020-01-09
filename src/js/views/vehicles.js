import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.vehicles.results &&
				store.vehicles.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singleVehicle/" + i}>
								<img
									src="https://www.prensalibre.com/wp-content/uploads/2018/12/bc6f9eec-9293-48f3-a3a7-d4c3a2979f81.jpg?quality=82&w=640&h=430&crop=1"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.name}</h5>
									<ul>
										<li>Model: {item.model} </li>
										<li>Cost in credits: {item.cost_in_credits}</li>
										<li>Passengers: {item.passengers}</li>
										<li>Cargo capacity: {item.cargo_capacity}</li>
									</ul>
								</div>
							</Link>
						</div>
					);
				})}

			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.vehicles.previous && (
							<button
								onClick={() => actions.getApi(store.vehicles.previous, "vehicles")}
								type="button"
								className="btn btn-primary">
								Previous
							</button>
						)}
						{!!store.vehicles.next && (
							<button
								onClick={() => actions.getApi(store.vehicles.next, "vehicles")}
								type="button"
								className="btn btn-primary">
								Next
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
