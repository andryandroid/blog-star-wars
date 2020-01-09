import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { People } from "./views/people";
import { Films } from "./views/films";
import { Planets } from "./views/planets";
import { Species } from "./views/species";
import { Vehicles } from "./views/vehicles";
import { Starships } from "./views/starships";
import { Single } from "./views/single";
import { SingleFilm } from "./views/singleFilm";
import { SinglePerson } from "./views/singlePerson";
import { SinglePlanet } from "./views/singlePlanet";
import { SingleSpecie } from "./views/singleSpecie";
import { SingleVehicle } from "./views/singleVehicle";
import { SingleStarship } from "./views/singleStarship";
import { Favorites } from "./views/favorites";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/people" component={People} />
						<Route path="/films" component={Films} />
						<Route path="/planets" component={Planets} />
						<Route path="/species" component={Species} />
						<Route path="/vehicles" component={Vehicles} />
						<Route path="/starships" component={Starships} />
						<Route path="/singleFilm/:id" component={SingleFilm} />
						<Route path="/singlePerson/:id" component={SinglePerson} />
						<Route path="/singlePlanet/:id" component={SinglePlanet} />
						<Route path="/singleSpecie/:id" component={SingleSpecie} />
						<Route path="/singleVehicle/:id" component={SingleVehicle} />
						<Route path="/singleStarship/:id" component={SingleStarship} />
						<Route path="/favorites" component={Favorites} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
