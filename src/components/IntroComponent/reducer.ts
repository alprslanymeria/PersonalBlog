// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/IntroComponent/prop"


const initialState: State = {

  bioText: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_BIO_TEXT":
      return { ...state, bioText: action.payload.bioText }
    default:
      return state
  }
}

export function useIntroCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
