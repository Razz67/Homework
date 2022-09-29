const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Show extends React.Component {
	render() {
		const { log } = this.props;
		return (
			<DefaultLayout title={`${log.name} details`}>
				<div className="show-page">
					<h1> Log - Show Page</h1>
					<p>
						The {log.title} is {log.entry}.
					</p>
					<p>
						{log.isShipBroken ? "The ship is broken" : "The ship is not broken"}
					</p>

					<button>
						<a href={`/logs/${log._id}/edit`}>Edit</a>
					</button>

					<form action={`/logs/${log._id}?_method=DELETE`} method="POST">
						<input type="submit" value="Delete" />
					</form>
					<a href="/logs">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Show;
