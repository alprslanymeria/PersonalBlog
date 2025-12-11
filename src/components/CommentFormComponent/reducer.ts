// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/CommentFormComponent/prop"


const initialState: State = {
  
  content: "",
  selectedAvatar: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_CONTENT":
      return { ...state, content: action.payload.content }
    case "SET_SELECTED_AVATAR":
      return { ...state, selectedAvatar: action.payload.selectedAvatar }
    default:
      return state
  }
}

export function useCommentFormCompReducer() {

  const [states, dispatch] = useReducer(reducer, initialState)

  return { states, dispatch }
}