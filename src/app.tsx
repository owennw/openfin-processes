import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { CounterArray } from './counter-array'

const { Fragment } = React

const styles = {
  app: {
    marginBottom: 10,
  },
}

interface IAppStyle {
  app: string
}

interface IAppProps {
  classes: IAppStyle
}

const App = ({ classes: { app } }: IAppProps) => (
  <Fragment>
    <AppBar position='static' color='default' className={app}>
      <Toolbar>
        <Typography variant='title'>
          Welcome to the OpenFin processes app!
        </Typography>
      </Toolbar>
    </AppBar>
    <CounterArray />
  </Fragment>
)

const StyledApp = withStyles(styles)(App)

export { StyledApp as App  }