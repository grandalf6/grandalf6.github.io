import About from './about/About'
import Footer from './footer/Footer'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Projects from './projects/Projects'
import React from 'react'

const App = () => (
	<div>
		<Navbar />
		<Header />
		<About />
		<Projects />
		<Footer />
	</div>
)

export default App
