import calculator from "./images/calculator.png"
import drumMachine from "./images/drumMachine.png"
import tributePage from "./images/tributePage.png"
import randomQuoteMachine from "./images/randomQuoteMachine.png"
import weather from "./images/weather.png"
import pomodoro from "./images/pomodoro.png"
import wikipedia from './images/wikipedia.png'

const ProjectsData = [
	{
		name: "Wikipedia Viewer",
		file: wikipedia,
		description: "Project is build with React.js, Webpack, Sass, Bootstrap and Fetch API. It allows user to search Wikipedia for any keyword and returns first 10 results including title, snippet, last date edited and word count. There is  warning for empty search, button for random article and initiation of search by Enter press.",
		link: "https://grandalf6.github.io/wikipedia/",
		repo: "https://github.com/grandalf6/wikipedia",
		linkedin: true
	},
	{
		name: "Weather App",
		file: weather,
		description: "Project is build with CSS and ReactJS. It uses 15 components, fetch API to receive data from weather service and navigator object to trace user location. When user enters website app is attempting to get user location and waits for his/her permission. Then, relevant button is displayed, and on its click data from API are requested, and user is shown these.",
		link: "https://grandalf6.github.io/weatherApp/",
		repo: "https://github.com/grandalf6/weatherApp",
		linkedin: true
	},
	{
		name: "Calculator",
		file: calculator,
		description: "Application created in ReactJS and CSS, and it is build with 7 components. It allows user to perform simple arithmetic operations on the numbers up to 10 digits, displays executed calculation in 2nd line and does not allow user to run, for example: /0 as it is not permitted.",
		link: "https://grandalf6.github.io/calculator/",
		repo: "https://github.com/grandalf6/calculator",
		linkedin: true
	},
	{
		name: "Pomodoro Timer",
		file: pomodoro,
		description: "Project is an app build using React.js and external custom stylesheet. JS: build with 10 components including 1 stateful, arrow functions, conditional rendering, handling events, passing props to child components and ternary operations. It allows user to set displayed break and session times, and to start, pause or reset timer, which activates the buzzer.",
		link: "https://grandalf6.github.io/pomodoro",
		repo: "https://github.com/grandalf6/pomodoro",
		linkedin: true
	},
	{
		name: "Drum Machine",
		file: drumMachine,
		description: "Application build with React.js and external CSS. It displays 9 buttons, preview area and on/off switch. When switch is on, pressing keyboard key or buttons in app initiates playing assigned to them sounds.",
		link: "https://grandalf6.github.io/drum-machine/",
		repo: "https://github.com/grandalf6/drum-machine",
		linkedin: true
	},
	{
		name: "Random Quote Machine",
		file: randomQuoteMachine,
		description: "Simple single page website build with HTML, CSS and Boostrap. It uses responsivness on grid and images. There are also hover effect addes on some elements.",
		link: "https://grandalf6.github.io/quotemachine",
		repo: "https://github.com/grandalf6/quotemachine",
		linkedin: true
	},
	{
		name: "Tribute Page",
		file: tributePage,
		description: "Simple single page website build with HTML, CSS and Boostrap. It uses responsivness on grid and images. There are also hover effect addes on some elements.",
		link: "https://grandalf6.github.io/tribute-page/",
		repo: "https://github.com/grandalf6/tribute-page",
		linkedin: true
	},
]

export default ProjectsData
