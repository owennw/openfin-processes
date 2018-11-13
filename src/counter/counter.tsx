import * as React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

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

import { styles, IStyledCounterProps } from './styles'

const { Component } = React

interface IOwnCounterProps {
  label: string
  dragCancel: string
}

interface IStatefulCounterProps extends IOwnCounterProps, IStyledCounterProps {
  count: number
  increment: () => void
  decrement: () => void
}

interface ICounterProps extends IStatefulCounterProps, IStyledCounterProps, IOwnCounterProps {
}

const CounterButton = ({ children, onClick, classes }) =>
  <Button variant='outlined' color='secondary' onClick={onClick} className={classes}>{children}</Button>

class Counter extends Component<ICounterProps> {
  public render() {
    const { count, label, classes: { counter, header, icon, button, actions } } = this.props
    return (
      <Card>
        <CardContent>
          <div className={header}>
            <Typography component='h2'>
              Counter {label}
            </Typography>
            <IconButton aria-label='tear-out' className={this.withCancel(icon)}>
              <OpenInNew />
            </IconButton>
          </div>
          <Typography component='h3' variant='h5' className={counter}>
            {count}
          </Typography>
        </CardContent>
        <CardActions>
          <div className={actions}>
            <CounterButton onClick={this.increment} classes={this.withCancel(button)} >Increment</CounterButton>
            <CounterButton onClick={this.decrement} classes={this.withCancel(button)} >Decrement</CounterButton>
          </div>
        </CardActions>
      </Card>
    )
  }

  private withCancel = (classes?: string) => {
    const { dragCancel } = this.props
    return classNames(classes, dragCancel)
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