// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/page/PortfolioPage/prop"


const initialState: State = {
  
  projects: []
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.payload.projects }
    default:
      return state
  }
}

export function usePortfolioPageReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
