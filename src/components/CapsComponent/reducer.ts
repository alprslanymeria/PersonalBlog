// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/CapsComponent/prop"


const initialState: State = {

  isOpen: false,
  selectedImage: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_IS_OPEN":
      return { ...state, isOpen: action.payload.isOpen }
    case "SET_SELECTED_IMAGE":
      return { ...state, selectedImage: action.payload.selectedImage }
    default:
      return state
  }
}

export function useCapsCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
