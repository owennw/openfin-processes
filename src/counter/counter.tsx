import * as React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import OpenInNew from '@material-ui/icons/OpenInNew'
import IconButton from '@material-ui/core/IconButton'
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
  header: string
  counter: string
  icon: string
}

interface IStyledCounterProps {
  classes: ICardStyle
}

const styles = {
  card: {
    maxWidth: 275,
    margin: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  counter: {
    marginLeft: '47%',
  },
  icon: {
    padding: 0,
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
    const { count, label, classes: { card, counter, header, icon } } = this.props
    return (
      <Card className={card}>
        <CardContent>
          <div className={header}>
            <Typography component='h2'>
              Counter {label}
            </Typography>
            <IconButton aria-label='tear-out' className={icon}>
              <OpenInNew />
            </IconButton>
          </div>
          <Typography component='h3' variant='h5' className={counter}>
            {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='secondary' onClick={this.increment}>Increment</Button>
          <Button variant='outlined' color='secondary' onClick={this.decrement}>Decrement</Button>
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