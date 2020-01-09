import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.planets.results &&
				store.planets.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singlePlanet/" + i}>
								<img
									src="https://pm1.narvii.com/6277/ea85f6959e0559d6511f5529a5e8e4d46217ed77_hq.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.name}</h5>
									<ul>
										<li>Rotation period: {item.rotation_period} </li>
										<li>Orbital period: {item.orbital_period}</li>
										<li>Diameter: {item.diameter}</li>
										<li>Climate: {item.climate}</li>
										<li>population: {item.population}</li>
									</ul>
								</div>
							</Link>
						</div>
					);
				})}

			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.planets.previous && (
							<button
								onClick={() => actions.getApi(store.planets.previous, "planets")}
								type="button"
								className="btn btn-primary">
								Previous
							</button>
						)}
						{!!store.planets.next && (
							<button
								onClick={() => actions.getApi(store.planets.next, "planets")}
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
