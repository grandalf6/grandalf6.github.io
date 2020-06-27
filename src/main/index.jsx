import React, {Fragment} from 'react'

import App from 'components/App'
import GlobalStyle from 'styles/GlobalStyle'
import {render} from 'react-dom'

render(
	<Fragment>
		<GlobalStyle />
		<App />
	</Fragment>,
	document.getElementById('root')
)
