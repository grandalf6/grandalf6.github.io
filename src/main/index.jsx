import React, {Fragment} from 'react'

import App from '../components/App'
import GlobalStyle from '../styles/GlobalStyle'
import ReactDOM from 'react-dom'

// import './index.sass'

ReactDOM.render(
	<Fragment>
		<GlobalStyle />
		<App />
	</Fragment>,
	document.getElementById('root')
)
