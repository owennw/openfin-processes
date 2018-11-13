import * as React from 'react'
import { connect } from 'react-redux'

const Counter = ({ count }: { count: number }) => <div>Count: {count}</div>

const mapStateToProps = state => ({
  count: state.count,
})

const connectedCounter = connect(mapStateToProps)(Counter)

export { connectedCounter as Counter }