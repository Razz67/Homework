import React from "react";
import "./App.css";
import "./sidebar.css";
import "./cards.css";
import "./visitor.css";
import Cards from "./components/Cards";
import Aside from "./components/Sidebar";
import Content from "./Visitors";

function App() {
	return (
		<div className="App container">
			<Aside />
			<Cards />
			<Content />
		</div>
	);
}

export default App;
