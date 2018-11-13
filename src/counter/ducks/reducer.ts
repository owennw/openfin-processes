import { IActionObject } from '../../action'

import { INCREMENT, DECREMENT } from './types'

const DEFAULT_STATE = ({
  count: 0,
})

const reducer = (state = DEFAULT_STATE, { type }: IActionObject) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export { reducer }