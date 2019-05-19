import calculator from '../images/calculator.png'
import drumMachine from '../images/drumMachine.png'
import movies from '../images/movies.png'
import pomodoro from '../images/pomodoro.png'
import randomQuoteMachine from '../images/randomQuoteMachine.png'
import tributePage from '../images/tributePage.png'
import weather from '../images/weather.png'
import wikipedia from '../images/wikipedia.png'

const PROJECTS_DATA = [
  {
    name: 'Movies Search',
    stack: ['REACT', 'WEBPACK', 'SASS', 'BOOTSTRAP', 'API'],
    file: movies,
    description:
      'Project is build with React.js, Webpack, Sass, Bulma and Fetch API. It allows user to browse movies from database and displays basic information. Entries are sortable and searchable.',
    link: 'https://grandalf6.github.io/movies/',
    repo: 'https://github.com/grandalf6/movies',
  },
  {
    name: 'Wikipedia Viewer',
    stack: ['REACT', 'WEBPACK', 'SASS', 'BOOTSTRAP', 'API'],
    file: wikipedia,
    description:
      'Project is build with React.js, Webpack, Sass, Bootstrap and Fetch API. It allows user to search Wikipedia for any keyword and returns first 10 results including title, snippet, last date edited and word count. There is  warning for empty search, button for random article and initiation of search by Enter press.',
    link: 'https://grandalf6.github.io/wikipedia/',
    repo: 'https://github.com/grandalf6/wikipedia',
  },
  {
    name: 'Weather App',
    stack: ['REACT', 'API', 'CSS'],

    file: weather,
    description:
      'Project is build with CSS and ReactJS. It uses 15 components, fetch API to receive data from weather service and navigator object to trace user location. When user enters website app is attempting to get user location and waits for his/her permission. Then, relevant button is displayed, and on its click data from API are requested, and user is shown these.',
    link: 'https://grandalf6.github.io/weatherApp/',
    repo: 'https://github.com/grandalf6/weatherApp',
  },
  {
    name: 'Calculator',
    stack: ['REACT', 'CSS'],
    file: calculator,
    description:
      'Application created in ReactJS and CSS, and it is build with 7 components. It allows user to perform simple arithmetic operations on the numbers up to 10 digits, displays executed calculation in 2nd line and does not allow user to run, for example: /0 as it is not permitted.',
    link: 'https://grandalf6.github.io/calculator/',
    repo: 'https://github.com/grandalf6/calculator',
  },
  {
    name: 'Pomodoro Timer',
    stack: ['REACT', 'CSS'],
    file: pomodoro,
    description:
      'Project is an app build using React.js and external custom stylesheet. JS: build with 10 components including 1 stateful, arrow functions, conditional rendering, handling events, passing props to child components and ternary operations. It allows user to set displayed break and session times, and to start, pause or reset timer, which activates the buzzer.',
    link: 'https://grandalf6.github.io/pomodoro',
    repo: 'https://github.com/grandalf6/pomodoro',
  },
  {
    name: 'Drum Machine',
    stack: ['REACT', 'CSS'],
    file: drumMachine,
    description:
      'Application build with React.js and external CSS. It displays 9 buttons, preview area and on/off switch. When switch is on, pressing keyboard key or buttons in app initiates playing assigned to them sounds.',
    link: 'https://grandalf6.github.io/drum-machine/',
    repo: 'https://github.com/grandalf6/drum-machine',
  },
  {
    name: 'Random Quote Machine',
    stack: ['HTML', 'CSS', 'BOOTSTRAP'],
    file: randomQuoteMachine,
    description:
      'Simple single page website build with HTML, CSS and Boostrap. It uses responsivness on grid and images. There are also hover effect addes on some elements.',
    link: 'https://grandalf6.github.io/quotemachine',
    repo: 'https://github.com/grandalf6/quotemachine',
  },
  {
    name: 'Tribute Page',
    stack: ['HTML', 'CSS', 'BOOTSTRAP'],
    file: tributePage,
    description:
      'Simple single page website build with HTML, CSS and Boostrap. It uses responsivness on grid and images. There are also hover effect addes on some elements.',
    link: 'https://grandalf6.github.io/tribute-page/',
    repo: 'https://github.com/grandalf6/tribute-page',
  },
]

export default PROJECTS_DATA
