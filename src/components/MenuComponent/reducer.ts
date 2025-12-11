// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/MenuComponent/prop"


const initialState: State = {
  
  isOpen: false
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export function useMenuCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}