import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const SingleFilm = props => {
	const { store, actions } = useContext(Context);
	var id = props.match.params.id;
	return (
		<div className="container">
			{!!store.films.results && (
				<div className="card text-white bg-dark" style={{ width: 90 + "%" }}>
					<div className="row no-gutters">
						<div className="col-md-6">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Star_Wars_The_Rise_of_Skywalker.png/285px-Star_Wars_The_Rise_of_Skywalker.png"
								className="card-img-top"
								alt="..."
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5>{store.films.results[id].title}</h5>
								<p className="card-text">{store.films.results[id].opening_crawl}</p>

								<ul>
									<li>Episode: {store.films.results[id].episode_id}</li>
									<li>Director: {store.films.results[id].director}</li>
									<li>Release date: {store.films.results[id].release_date}</li>
									<li>Producer(s): {store.films.results[id].producer}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

SingleFilm.propTypes = {
	match: PropTypes.object
};
