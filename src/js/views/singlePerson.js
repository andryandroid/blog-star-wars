import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SinglePerson = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.people.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://i.blogs.es/69fdcc/star-wars-saga/450_1000.jpg"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.people.results[id].name}</h5>
								<ul>
									<li>Height: {store.people.results[id].height} </li>
									<li>Mass: {store.people.results[id].mass} </li>
									<li>Hair color: {store.people.results[id].hair_color}</li>
									<li>Skin color: {store.people.results[id].skin_color}</li>
									<li>Eye color: {store.people.results[id].eye_color}</li>
									<li>Birth year: {store.people.results[id].birth_year}</li>
									<li>Gender: {store.people.results[id].gender}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SinglePerson.propTypes = {
	match: PropTypes.object
};
