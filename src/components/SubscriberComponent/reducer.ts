// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/SubscriberComponent/prop"


const initialState: State = {

  email: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload.email }
    default:
      return state
  }
}

export function useSubscriberCompReducer() {

  const [states, dispatch] = useReducer(reducer, initialState)

  return { states, dispatch }
}