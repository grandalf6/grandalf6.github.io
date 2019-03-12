import React from "react"


function MenuPop(props) {
	return(
		<div id="menuPop">
		
				<div className="menu-link" onClick={props.menuLinkClick}>Home</div>
				<div  className="menu-link">Skills</div>
				<div  className="menu-link">Projects</div>
				<div  className="menu-link">Contact</div>
			
			
		</div>
	)
}

export default MenuPop