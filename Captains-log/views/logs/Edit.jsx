const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
		const { _id, title, entry, shipIsBroken } = this.props.log;
		return (
			<DefaultLayout className="container" title={`Edit ${title}`} group="">
				<h1>Edit Log Page</h1>
				<form action={`/logs/${_id}?_method=PUT`} method="POST">

					<label htmlFor="title">Title: </label>
					<input type="text" id="title" name="title" defaultValue={title} />
					<br /><br />

					<label htmlFor="textarea">Entry: </label>
					<input type="textarea" id="entry" name="entry" defaultValue={entry} />
					<br /><br />

					<label htmlFor="shipIsBroken">Is Ship Damaged:</label>
					&nbsp;&nbsp;
					<input
						type="checkbox"
						id="shipIsBroken"
						name="shipIsBroken"
						defaultChecked={shipIsBroken}
					/>
					<nav>
						<input type="submit" value="Edit Log" />
					</nav>
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
