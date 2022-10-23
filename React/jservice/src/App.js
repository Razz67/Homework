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

	// useEffect is a react hook that allows you to perform side effects in function components such as fetching data, setting up a subscription, and manually changing the DOM in React components.
	useEffect(() => {
		fetch("http://jservice.io/api/random")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setQuestion(data[0]);
				console.log(data[0]);
			});
	}, []); // The empty array is a dependency array. It tells useEffect to only run once on the initial render.

	function handleAnswer() {
		setAnswer(`Question: What is " ${question.answer}?`);
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

