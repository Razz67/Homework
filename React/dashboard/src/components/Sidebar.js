import React from "react";

export default function Aside() {
	return (
		<sidebar>
			<nav>
				<a class="logo" href=" ">
					<h2 className="red">
						S<span className="blue">R</span>
					</h2>
				</a>

				<div class="scrollbar" id="scrollbar">
					<a href=" ">
						<i class="fa fa-home fa-lg"></i>
						<span class="nav-text">Dashboard</span>
					</a>

					<a href=" ">
						<i class="fa fa-table fa-lg"></i>
						<span class="nav-text">Widget</span>
					</a>

					<a href=" ">
						<i class="fa fa-envelope-o fa-lg"></i>
						<span class="nav-text">Reviews</span>
					</a>

					<a href=" ">
						<i class="fa fa-users fa-lg"></i>
						<span class="nav-text">Customers</span>
					</a>
					<a href=" ">
						<i class="fa fa-wrench fa-lg"></i>
						<span class="nav-text">Online Analysis</span>
					</a>
					<a href=" ">
						<i class="fa fa-cog fa-lg"></i>
						<span class="nav-text">Settings</span>
					</a>
				</div>
			</nav>
		</sidebar>
	);
}
