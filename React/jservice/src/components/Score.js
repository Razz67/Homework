import { useState } from "react";

export default function Score(props) {

let [score, setScore] = useState(0);
let [value, setValue] = useState(0);

const handleIncrease = () => {
		setScore(score + value);
	};

	const handleDecrease = () => {
        setScore(score - value);
	};

	const handleChange = (evt) => {
        setValue(evt.target.value);
	};

	// const handleReveal = (evt) => {
	// 	evt.prevtDefault();
	// 	setValue({
	// 		isVisible: (this.isVisible = !this.isVisible),
	// 	});
	// };

	// const handleQuestion = (evt) => {
	// 	evt.prevtDefault();
	// 	setValue(
	// 		{
	// 			questionURL: baseURL,
	// 			isVisible: false,
	// 		},
	// 		() => {
	// 			fetch(this.state.questionURL)
	// 				.then((res) => res.json())
	// 				.then((json) =>
	// 					this.setState({
	// 						category: json[0].category.title,
	// 						value: json[0].value,
	// 						answer: json[0].answer,
	// 						question: json[0].question,
	// 					})
	// 				);
	// 		}
	// 	);
	// };

	const handleReset = (evt) => {
    evt.prevtDefault();
    this.setState({ score: 0 });
  }




	return (
		<>


			<h2 onChange={handleChange}>Score: {score}</h2>
			<button onClick={handleDecrease} className="decrease">
				Decrease
			</button>
			<button onClick={handleIncrease} className="increase">
				Increase
			</button>
			<button onClick={handleReset} className="reset">
				Reset
			</button>
		</>
    ); 
} 