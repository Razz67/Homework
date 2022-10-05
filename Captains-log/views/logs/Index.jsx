const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { logs } = this.props;

		return (
			<DefaultLayout className="container" title="All Logs" group="logs">
				<h1>Logs Page</h1>
				<ul id="logs-index">
					{logs.map((logs) => {
						const { _id, title, entry, shipIsBroken } = logs;
						return (
							<li key={_id}>
								<a href={`/logs/${_id}`}>{title}</a>
								<p>{entry}</p>
								<p>
									{shipIsBroken
										? "The ship is broken"
										: "The ship is NOT broken"}
								</p>
								<br />
								<br />
							</li>
						);
					})}
				</ul>

				<button>
					<a href="/logs/new">Create log</a>
				</button>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
