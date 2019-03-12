import React from "react"

function MenuIcon(props) {

	return(
		<i	
			id="menu"
			onClick={props.menuClick} 
			className={props.menu === true ? "fas fa-times" : "fas fa-bars"}>
		</i>
	)
}

export default MenuIcon