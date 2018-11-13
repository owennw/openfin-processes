import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { reducer } from './reducer'

import { App } from './app'

import 'typeface-roboto'

const store = createStore(reducer)

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)