import React from 'react';
import SocialData from "./SocialData"
import SocialIcon from "./SocialIcon"

function Navbar(props){
	return (
		<ul className="nav justify-content-end">
			
			{SocialData.map(x => <SocialIcon link={x.link} icon={x.icon} />)}
			
		</ul>
	)
}
		


export default Navbar
