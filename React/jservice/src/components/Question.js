export default function Questions({ question }) {
	function loadingQuestion() {
		return (
			<>
				<h1>Loading Question...</h1>
			</>
		);
	}
	function loadedQuestion() {
		return (
			<>
				<h2>
					{" "}
					<span id="category-text">Category:</span> {question.category.title.toString()}
				</h2>
				<h2 id="value" >
					{" "}
					Points: {question.value}
				</h2>
				<h2>
					{" "}
					<span id="answer-text">Answer:</span> {question.question}{" "}
				</h2>
			</>
		);
	}

	return question ? loadedQuestion() : loadingQuestion();
}
