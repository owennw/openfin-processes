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

const { Component } = React

interface IOwnCounterProps {
  label: string
}

interface ICardStyle {
  card: string
  title: string
  counter: string
}

interface IStyledCounterProps {
  classes: ICardStyle
}

const styles = {
  card: {
    maxWidth: 275,
    margin: 10,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  counter: {
    marginLeft: '47%',
  },
}

interface IStatefulCounterProps extends IOwnCounterProps, IStyledCounterProps {
  count: number
  increment: () => void
  decrement: () => void
}

interface ICounterProps extends IStatefulCounterProps, IStyledCounterProps, IOwnCounterProps {
}

class Counter extends Component<ICounterProps> {
  public render() {
    const { count, label, classes: { card, title, counter } } = this.props
    return (
      <Card className={card}>
        <CardContent>
          <Typography component='h2' className={title}>
            Counter {label}
          </Typography>
          <Typography component='h3' variant='h5' className={counter}>
            {count}
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