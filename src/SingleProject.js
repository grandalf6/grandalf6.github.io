import React from "react"

function SingleProject(props) {
	return(
		<div className="single-project card">
			<a href={props.link} rel="noopener noreferrer" target="_blank">
				<img src={props.file} className="card-img-top img-fluid" alt={props.name}/>
			</a>
			<div className="card-body">
				<h4 className="card-title">{props.name}</h4>
				<p className="card-text">{props.description}</p>
				<div className="project-links-grid">
					<a href={props.link} rel="noopener noreferrer" target="_blank" className="project-link card-link">See it</a>
					<a href={props.repo} rel="noopener noreferrer" target="_blank"  className ="project-link card-link">Repo</a>
				</div>
			</div>
		</div>
	)
}

export default SingleProject