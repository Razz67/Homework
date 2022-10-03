const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Show extends React.Component {
	render() {
		const { _id, title, entry, shipIsBroken} = this.props.log;
		return (
			<DefaultLayout className="container" title={`${title} details`}>
				<div className="show-page">
					<h1> Log - Show Page</h1>
					<p>
						The {title} is {entry}.
					</p>
					<p>
						{shipIsBroken ? "The ship is broken" : "The ship is not broken"}
					</p>

					<button>
						<a href={`/logs/${_id}/edit`}>Edit</a>
					</button>

					<form action={`/logs/${_id}>?_method=DELETE`} method="POST">
						<input type="submit" value="Delete" />
					</form>
					<a href="/logs">Back</a>
				</div>
			</DefaultLayout>
		);
	}
}
module.exports = Show;
