import React from 'react'
import ArrowDown from "./ArrowDown"
import Header from "./Header"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

function Main(props) {
	return (
		<div id="main">
			<Header />
			<ArrowDown />
			<Skills />
			<Projects />
			<Footer />
		</div>
	)
}

export default Main
