import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useQueries } from 'history'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { syncHistoryWithStore } from './redux/modules/history'

const history = useQueries(createHistory)()
const store = configureStore()
syncHistoryWithStore(history, store)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
