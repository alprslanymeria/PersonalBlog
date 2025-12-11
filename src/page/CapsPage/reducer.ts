// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/page/CapsPage/prop"


const initialState: State = {

  capsImages: []
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_CAPS_IMAGES":
      return { ...state, capsImages: action.payload.capsImages }
    default:
      return state
  }
}

export function useCapsPageReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}