import * as React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import {
  increment as incrementAction,
  decrement as decrementAction,
} from './ducks'

const styles = {
  card: {
    maxWidth: 275,
  },
}

const { Component } = React

interface ICardStyle {
  card: string,
}

interface IStatefulCounterProps {
  count: number
  increment: () => void
  decrement: () => void
  classes: ICardStyle
}

class Counter extends Component<IStatefulCounterProps, {}> {
  public render() {
    const { count, classes: { card } } = this.props
    return (
      <Card className={card}>
        <CardContent>
          <Typography>
            Count: {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.increment}>Increment</Button>
          <Button onClick={this.decrement}>Decrement</Button>
        </CardActions>
      </Card>
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

const ComposedCounter = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Counter))

export { ComposedCounter as Counter }