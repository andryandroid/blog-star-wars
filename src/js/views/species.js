import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Species = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.species.results &&
				store.species.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singleSpecie/" + i}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.name}</h5>
									<ul>
										<li>Average height: {item.average_height} </li>
										<li>Classification: {item.classification} </li>
										<li>language: {item.language}</li>
									</ul>
								</div>
							</Link>
						</div>
					);
				})}
			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.species.previous && (
							<button
								onClick={() => actions.getApi(store.species.previous, "species")}
								type="button"
								className="btn btn-primary">
								Previous
							</button>
						)}
						{!!store.species.next && (
							<button
								onClick={() => actions.getApi(store.species.next, "species")}
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
