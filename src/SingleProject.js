import React from "react"
import together from "./together.jpg"

function SingleProject(props) {
	return(
		<div class="single-project card">
			<img src={props.file} class="card-img-top img-fluid" alt={props.name}/>
			<div class="card-body">
				<h4 class="card-title">{props.name}</h4>
				<p class="card-text">{props.description}</p>
				<a href={props.link} target="_blank" class="card-link">See it</a>
				<a href={props.repo} target="_blank"  class="card-link">Repo</a>
			</div>
		</div>
	)
}

export default SingleProject