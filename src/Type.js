import React from "react"
import TypeIt from 'typeit'

function Type() {
	new TypeIt('#dadada', {
		strings: ['This is my string!'],

		}).go();
	
	return(
		<p id="dadada">4</p>
	)
}


export default Type