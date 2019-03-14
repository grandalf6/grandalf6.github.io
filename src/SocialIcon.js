import React from "react"


class SocialIcon extends React.Component {
	
	componentDidMount() {
	
	}
	
	render() {
		
		
		
		return(
			<li className="nav-item">
				<a target="_blank" rel="noopener noreferrer" href={this.props.link}>
					<i className={this.props.icon}></i>
				</a>
			</li>
		)
	}
}

export default SocialIcon