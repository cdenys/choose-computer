import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import Home from './scenes/Home/Home'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
