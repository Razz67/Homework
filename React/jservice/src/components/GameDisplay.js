export default function GameDisplay({ game }) {
	const loaded = () => {
		return (
			<>
				<h2>{game.score}</h2>
				<h2>{game.question}</h2>
				<h2>{game.answer}</h2>
				<h2>{game.category}</h2>
				<h2>{game.value}</h2>
			</>
		);
	};

	const loading = () => {
		return <h1>Loading...</h1>;
	};

	return game ? loaded() : loading();
}
