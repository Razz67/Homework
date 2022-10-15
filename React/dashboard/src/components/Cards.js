import React from "react";
import chart1 from "./images/chart1_40.png";
import chart2 from "./images/chart2_40.png";
import chart3 from "./images/chart3_40.png";
import woman from "./images/woman_35.png";
import man2 from "./images/man_2.png";
import ironman from "./images/ironman_35.png";
import man1 from "./images/man_1.png";
import calander from "./images/calander.png";
export default function Cards() {
	return (
		<div className="cards">
			<div className="card card-1 mb-3">
				<div className="card-header">Reviews</div>
				<div className="card-body">
					<p className="card-title">1,281</p>
					<p className="card-text">
						You got <span id="green">+23.8%</span> more reviews than last week
					</p>
					<div id="avatars">
						<img src={man2} alt="man avatar" />
						<img src={woman} alt="woman avatar" />
						<img src={ironman} alt="man avatar" />
						<img src={man1} alt="ironman avatar" />
					</div>
				</div>
			</div>

			<div className="card card-2 mb-3">
				<div className="card-header">Avg. Rating</div>
				<div className="card-body">
					<h5 className="card-title">4.6</h5>
					<p className="card-text">
						<span id="red">-0.3 </span>points from last week
					</p>
					<img src={calander} alt="calander image" />
				</div>
			</div>

			<div className="card card-3 mb-3">
				<div className="card-header">Sentiment Analysis</div>
				<div className="card-body">
					<div className="image">
						<img src={chart3} alt="chart1" />

						<div div className="text">
							<span className="number">960</span>
							<br />
							Product Reviews
						</div>
					</div>

					<div className="image">
						<img src={chart1} alt="chart1" />

						<div div className="text">
							<span className="number">122</span>
							<br />
							Neutral Reviews
						</div>
					</div>

					<div className="image">
						<img src={chart2} alt="chart1" />

						<div div className="text">
							<span className="number">321</span>
							<br />
							Negative Reviews
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Images courtesy of https://www.flaticon.com/authors/freepik
