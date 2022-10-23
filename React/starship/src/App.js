import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./index.css";

export default function Ships() {
	let [ship, setShip] = useState([]);

	const fetchships = async (ships) => {
		try {
			const response = await fetch(`https://swapi.dev/api/starships/`);
			const ships = await response.json();
			console.log(ships);
			setShip(ships.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchships();
	}, []);

	return (
		<>
      <Header />
			<Container className="container">
				{ship.map((ship) => {
					const { name, model, starship_class } = ship;
					console.log(ship);
					return (
                  <>
						<Row className="justify-content-md-center">
							<div key={name}>
								<br />
								<Card className="text-center" style={{ width: "30rem" }}>
									<Card.Body className="card-body">
										<Card.Text className="card-text">
                              Ship Name: {name}
                              <br />
										Ship Model: {model}
                              <br />
										Ship Class: {starship_class}
                              </Card.Text>
									</Card.Body>
								</Card>
							</div>
						</Row>
                  </>
					);
				})}
			</Container>
			);
		</>
	);
}
