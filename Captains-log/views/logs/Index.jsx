const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { logs } = this.props;

		return (
			<DefaultLayout className="container" title="All Logs" group="logs">
				<h1>Logs Index Page</h1>
				<ul id="logs-index">
					{logs.map((logs, _id) => {
						return (
							<li key={_id}>
								The <a href={`/logs/${_id}`}>{logs.title}</a> { logs.entry } the
								{logs.shipIsBroken}.
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
