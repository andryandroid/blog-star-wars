import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Starships = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.starships.results &&
				store.starships.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singleStarship/" + i}>
								<img
									src="https://fsmedia.imgix.net/3b/7d/19/fd/c04a/433f/a655/c948156c9518/death-star.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&h=325&w=650"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.name}</h5>
									<Link>
										<i className="fas fa-star" />
										<i className="far fa-star" />
									</Link>
									<ul>
										<li>Model: {item.model} </li>
										<li>Cost in credits: {item.cost_in_credits}</li>
										<li>Length: {item.length}</li>
										<li>Passengers: {item.passengers}</li>
										<li>Cargo capacity: {item.cargo_capacity}</li>
										<li>Hyperdrive rating: {item.hyperdrive_rating}</li>
									</ul>
								</div>
							</Link>
						</div>
					);
				})}

			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.starships.previous && (
							<button
								onClick={() => actions.getApi(store.starships.previous, "starships")}
								type="button"
								className="btn btn-primary">
								Previous
							</button>
						)}
						{!!store.starships.next && (
							<button
								onClick={() => actions.getApi(store.starships.next, "starships")}
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
