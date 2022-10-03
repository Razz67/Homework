const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (
			<DefaultLayout className="container" title="create a new Log" group="logs">
				<h1>New Log</h1>
				<form action="/logs" method="POST">
					<label htmlFor="title">Title: </label>
					<input type="text" id="title" name="title" />
					<br />
					<br />

					<label htmlFor="entry">Entry: </label>
					<input type="textarea" id="entry" name="entry" />
					<br />
					<br />

					<label htmlFor="shipIsBroken">The Ship Is Broken?</label>
					<input type="checkbox" id="shipIsBroken" name="shipIsBroken"
					defaultChecked={true} />
					<br />
					<br />
					<nav>
					<input type="submit" value="Add Log" />
					</nav>
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = New;
