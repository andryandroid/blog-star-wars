import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SingleSpecie = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.species.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.species.results[id].name}</h5>
								<ul>
									<li>Average height: {store.species.results[id].average_height} </li>
									<li>Classification: {store.species.results[id].classification} </li>
									<li>Hair colors: {store.species.results[id].hair_colors}</li>
									<li>Skin colors: {store.species.results[id].skin_colors}</li>
									<li>Eye colors: {store.species.results[id].eye_colors}</li>
									<li>language: {store.species.results[id].language}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SingleSpecie.propTypes = {
	match: PropTypes.object
};
