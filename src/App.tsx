import React from "react";
import "./App.css";

import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<div className="App" style={{width: "80%", margin: "1em auto"}}>
				<Header />
				<Switch>
					<Route match="main">
						<MainBody />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
