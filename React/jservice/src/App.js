import "./App.css";
import { useState, useEffect } from "react";
import Questions from "./components/Question";
import Score from "./components/Score";

export default function App() {

	let [question, setQuestion] = useState("");
	let [answer, setAnswer] = useState("");

	const handleQuestion = async () => {
		const response = await fetch("http://jservice.io/api/random");
		const data = await response.json();

		setQuestion(data[0]);
		setAnswer("");
	};

	useEffect(() => {
		fetch("http://jservice.io/api/random")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setQuestion(data[0]);
				console.log(data[0]);
			});
	}, []);

	function handleAnswer() {
		setAnswer("Question: What is " + question.answer + "?");
	}
	return (
		<div className="App">
			<h1>Welcome to Jeopardy!</h1>
			<Score question={question} />
			<h2 className="play" >Let's Play!</h2>
			<button className="btn" onClick={handleQuestion}>Get Question</button>
			<Questions question={question} />
			<button className="btn" onClick={handleAnswer}>Show Question</button>
			<h3> {answer} </h3>
		</div>
	);
}

