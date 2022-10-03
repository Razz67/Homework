const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { logs } = this.props;

		return (
			<DefaultLayout className="container" title="All Logs" group="logs">
				<h1>Logs Index Page</h1>
				<ul id="logs-index">
					{logs.map((log) => {
						return (
							<li key={log._id}>
								The <a href={`/logs/${log.id}`}>{logs.title}</a> { logs.entry } the
								{logs.shipIsBroken}.
								Created On: {logs.createdAt};

								Edited: {logs.updatedAt}
							</li>
						);
					})}
				</ul>

				<nav>
					<a href="/logs/new">Create log</a>
				</nav>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
