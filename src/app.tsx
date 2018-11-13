import * as React from 'react'

import { Counter } from './counter'

const { Fragment } = React

const App = () => (
  <Fragment>
    <h1>Welcome to the OpenFin processes app!</h1>
    <Counter />
  </Fragment>
)

export { App }