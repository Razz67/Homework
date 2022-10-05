const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

// Class Component
class Show extends React.Component {
	render() {
		const { id, title, entry, shipIsBroken } = this.props.logs;

		return (
			<DefaultLayout className="container" title={`${title}`} group="logs">
				<h1>Captain's Log</h1>
				<p> Entry Title: {title}</p>
				<p> Entry: {entry}</p>
				<p>{shipIsBroken ? "The ship is broken" : "The ship is NOT broken"}</p>

				<button>
					<a href={`/logs/${id}/edit`}>Edit</a>
				</button>

				<form action={`/logs/${id}?_method=DELETE`} method="POST">
					<input type="submit" value="Delete" />
				</form>

				<nav>
					<a href={`/logs/Show`}>Back</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Show;
