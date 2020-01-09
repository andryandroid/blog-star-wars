import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

//import "../../styles/demo.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{!!store.films.results &&
				store.films.results.map((item, i) => {
					return (
						<div key={i} className="card text-white bg-dark" style={{ width: 30 + "%" }}>
							<Link to={"/singleFilm/" + i}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Star_Wars_The_Rise_of_Skywalker.png/285px-Star_Wars_The_Rise_of_Skywalker.png"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5>{item.title}</h5>
									<p className="card-text">{item.opening_crawl}</p>
								</div>
							</Link>
						</div>
					);
				})}
		</div>
	);
};
