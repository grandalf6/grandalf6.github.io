import React from "react"
import TypeIt from "typeit"

class SelfDescription extends React.Component {
	
	componentDidMount() {
		new TypeIt(this.element, {
			strings: "I am a front-end web developer living in London. Look up my info to see, what do I work with or check out my lastest projects.",
			speed: 50,
			startDelay: 1500,
			waitUntilVisible: true
		}).go()
	}
	
	render() {
		return(
			<p id="text-self-description" ref={(element) => { this.element = element; }}>{this.props.children}</p>
		)
	}
}

export default SelfDescription
