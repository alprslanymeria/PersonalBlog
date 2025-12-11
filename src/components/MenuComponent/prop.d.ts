// REDUCER
export type State = {
  
  isOpen: boolean
}

export type Action =
  | { type: "TOGGLE_MENU" }


// HANDLERS
export type HandleIconClickProps = {

    dispatch: React.Dispatch<Action>
}