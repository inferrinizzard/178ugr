import React from "react";
import "./App.css";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import MainBody from "./MainBody";
import ArchiveBody from "./ArchiveBody";
import MentorBody from "./MentorBody";
import SearchBody from "./SearchBody";
import StudentBody from "./StudentBody";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<div className="App" style={{ width: "80%", margin: "1em auto" }}>
				<Header />
				<Switch>
					<Route path="/home">
						<MainBody />
					</Route>
					<Route path="/students">
						<StudentBody />
					</Route>
					<Route path="/mentors">
						<MentorBody />
					</Route>
					<Route path="/board:id">
						<SearchBody />
					</Route>
					<Route path="/archive">
						<ArchiveBody />
					</Route>
					<Route>
						<MainBody />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
