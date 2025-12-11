// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/page/CategoryPage/prop"


const initialState: State = {

  category: null
  
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_UNIQUE_CATEGORY":
      return { ...state, category: action.payload.category }
    default:
      return state
  }
}

export function useCategoryPageReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}