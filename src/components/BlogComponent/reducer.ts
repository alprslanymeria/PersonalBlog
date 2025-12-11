// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/BlogComponent/prop"


const initialState: State = {

  currentPage: 1,
  contentPreviews: {}
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload.currentPage }
    case "SET_CONTENT_PREVIEWS":
      return { ...state, contentPreviews: action.payload.contentPreviews }
    default:
      return state
  }
}

export function useBlogCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
