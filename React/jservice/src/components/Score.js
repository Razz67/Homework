import { useState } from "react";
export default function Score({ question }) {

	const [score, setScore] = useState(0);

	function scoreUp() {
		setScore(score + question.value);
	};

	function scoreDown() {
		if (score - question.value < 1) {
			setScore(0);
		} else {
			setScore(score - question.value);
			console.log(question.value);
		}
	};

	function scoreReset() {
		setScore(0);
	};

	return (
		<>
			<h1>Current Score: {score}{" "}</h1>
			<div>
				<button className="btn" id="scoreup" onClick={scoreUp}>
					Add Points
				</button>
				<button className="deduct-btn" id="score-down" onClick={scoreDown}>
					Deduct Points
				</button>
				<button className="btn" id="resetscore" onClick={scoreReset}>
					{" "}
					Reset{" "}
				</button>
			</div>
		</>
	);
}
