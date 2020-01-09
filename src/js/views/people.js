import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.people.results &&
				store.people.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singlePerson/" + i}>
								<img
									src="https://i.blogs.es/69fdcc/star-wars-saga/450_1000.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.name}</h5>
									<ul>
										<li>Height: {item.height} </li>
										<li>Birth year: {item.birth_year}</li>
										<li>Gender: {item.gender}</li>
									</ul>
								</div>
							</Link>
						</div>
					);
				})}

			<div className="container">
				<div className="row">
					<div className="col-md-12 d-flex justify-content-between">
						{!!store.people.previous && (
							<button
								onClick={() => actions.getApi(store.people.previous, "people")}
								type="button"
								className="btn btn-primary">
								Previous
							</button>
						)}
						{!!store.people.next && (
							<button
								onClick={() => actions.getApi(store.people.next, "people")}
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
