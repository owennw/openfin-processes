import { Action } from '../../action'

import { INCREMENT, DECREMENT } from './types'

const increment: Action = () => ({
  type: INCREMENT,
})

const decrement: Action = () => ({
  type: DECREMENT,
})

export { increment, decrement }