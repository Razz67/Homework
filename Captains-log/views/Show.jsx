const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Show extends React.Component {
	render() {
		const { title, entry, shipIsBroken} = this.props.log;
		return (
			<DefaultLayout className="container" title={`${log.name} details`}>
				<div className="show-page">
					<h1> Log - Show Page</h1>
					<p>
						The {title} is {entry}.
					</p>
					<p>
						{shipIsBroken ? "The ship is broken" : "The ship is not broken"}
					</p>

					<button>
						<a href={`/logs/${log.id}/edit`}>Edit</a>
					</button>

					<form action={`/logs/${log.id}?_method=DELETE`} method="POST">
						<input type="submit" value="Delete" />
					</form>
					<a href="/logs">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Show;
