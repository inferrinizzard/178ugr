import React, { useState } from "react";
// import logo from "./logo";
import "./App.css";

import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";

function App() {
	let [page, setPage] = useState("main");

	return (
		<React.Fragment>
			<div className="App" style={{ width: "80%", margin: "1em auto" }}>
				<Header />
				{page === "main" && <MainBody />}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
