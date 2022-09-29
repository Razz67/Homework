const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (
			<DefaultLayout title="create a new Log">
				<h1>New Log</h1>
				<form action="/logs" method="POST">
					<label htmlFor="name">Title:</label>
					<input type="text" id="title" name="title" />
					<br />
					<br />

					<label htmlFor="entry">Entry:</label>
					<input type="text" id="entry" name="entry" />
					<br />
					<br />

					<label htmlFor="isShipBroken">Is Ship Broken?</label>
					<input type="checkbox" id="isShipBroken" name="isShipBroken" />
					<br />
					<br />

					<input type="submit" value="Add Log" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = New;
