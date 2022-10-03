const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { logs } = this.props;

		return (
			<DefaultLayout title="All Logs" group="logs">
				<h1>Logs Index Page</h1>
				<ul id="logs-index">
					{logs.map((log) => {
						return (
							<li key={logs._id}>
								The <a href={`/logs/${log._id}`}>{log.title}</a> created on { log.created } the
								{log.isShipBroken} is damaged.
							</li>
						);
					})}
				</ul>

				<nav>
					<a href="/logs/New">Create log</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
