import React from "react"
import SectionTitle from "./SectionTitle"
import SingleProject from "./SingleProject"
import ProjectsData from "./ProjectsData"

function Projects() {
	return(
		<div>
			<section>
				<SectionTitle
					sectionName="Projects"
				/>
				{ProjectsData.map(x => <SingleProject name={x.name} file={x.file} description={x.description} link={x.link} repo={x.repo}/>)}
			</section>
		</div>
	)
}

export default Projects
