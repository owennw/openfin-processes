import * as React from 'react'
import { connect } from 'react-redux'

import {
  increment as incrementAction,
  decrement as decrementAction,
} from './ducks'

const { Fragment, Component } = React

interface IStatefulCounterProps {
  count: number
  increment: () => void
  decrement: () => void
}

class Counter extends Component<IStatefulCounterProps, {}> {
  public render() {
    const { count } = this.props
    return (
      <Fragment>
        Count: {count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </Fragment>
    )
  }

  private increment = () => {
    const { increment } = this.props
    increment()
  }

  private decrement = () => {
    const { decrement } = this.props
    decrement()
  }
}

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = ({
  increment: incrementAction,
  decrement: decrementAction,
})

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export { connectedCounter as Counter }