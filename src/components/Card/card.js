import React from "react";
import "./card.css";

// All projects will be in card form under the Jumbotron of feature project
function Card({ screenshot, github, deployed, title, info }) {
	return (
		<div className="card mb-4 shadow-sm">
			<img
				className="bd-placeholder-img card-img-top"
				src={screenshot}
				focusable="false"
				role="img"
			/>
			<div className="card-body">
				<h5>{title}</h5>
				<p className="card-text">{info}</p>
				<div className="d-flex justify-content-between align-items-center">
					<div className="btn-group">
						<a
							type="button"
							href={github}
							className="btn btn-sm btn-outline-secondary"
							target="_blank"
						>
							Github
						</a>
						<a
							type="button"
							href={deployed}
							className="btn btn-sm btn-outline-secondary"
							target="_blank"
						>
							Deployed
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
