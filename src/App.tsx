import React from "react";
// import logo from "./logo";
import "./App.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
	return (
		<div className="App" style={{width: "80%", margin: "1em auto"}}>
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
