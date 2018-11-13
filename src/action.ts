interface IActionObject {
  type: string
  payload?: object
}

type Action = () => IActionObject

export { Action, IActionObject }