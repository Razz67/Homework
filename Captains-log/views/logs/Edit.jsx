const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
		let { log } = this.props;

		return (
			<DefaultLayout title="edit a log" group="logs">
				<h1>Edit Page</h1>
				<form action={`/logs/${log._id}?_method=PUT`} method="POST">
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" name="title" defaultValue={log.name} />

					<label htmlFor="color">Color:</label>
					<input
						type="text"
						id="color"
						name="color"
						defaultValue={log.color}
					/>

					<label htmlFor="isShipBroken">Is Ship Damaged:</label>
					<input
						type="checkbox"
						id="isShipBroken"
						name="isShipBroken"
						defaultChecked={log.isShipBroken}
					/>

					<input type="submit" value="Edit Fruit" />
				</form>
			</DefaultLayout>
		);
	}
}

module.exports = Edit;
