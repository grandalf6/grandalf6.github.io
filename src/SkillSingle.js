import React from "react"

function SkillSingle(props) {
	return(
		<div>
			<i style={{color: props.color}} className={props.icon}></i>
			<p>{props.skillName}</p>
		</div>
	)
}

export default SkillSingle