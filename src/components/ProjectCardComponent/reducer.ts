// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/ProjectCardComponent/prop"


const initialState: State = {
  
  showFullContent: false,
  projectContent: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_SHOW_FULL_CONTENT":
      return { ...state, showFullContent: action.payload.showFullContent }
    case "SET_PROJECT_CONTENT":
      return { ...state, projectContent: action.payload.projectContent }
    default:
      return state
  }
}

export function useProjectCardCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}