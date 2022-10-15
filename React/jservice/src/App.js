import "./App.css";
import { useState } from "react";
import GameInfo from "./components/GameInfo";
import Score from "./components/Score";

export default function App() {

  const baseURL = `https://jservice.io/api/random/?count=10&category=${category}`;

  let [question, setQuestion] = useState({});

const getQuestion = async (question) => {
    const response = await fetch(baseURL);
    const data = await response.json();
      setGameInfo(data);
};








	// GameInfo = {
	// 	baseURL: "http://jservice.io/api/random",
	// 	score: 0,
	// 	category: "",
	// 	value: "",
	// 	answer: "",
	// 	question: "",
	// 	isVisible: false,
	// };

		return (
			<div className="App">
				<h1 className="title"> Welcome to Jeopardy</h1>

				<Score
					score={GameInfo.score}
				/>

				<GameInfo getQuestion={getQuestion}	/>
			</div>
		);
	}
