// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/CommentComponent/prop"


const initialState: State = {
  
  comments: [],
  replyTo: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_COMMENTS":
      return { ...state, comments: action.payload.comments }
    case "SET_REPLY_TO":
      return { ...state, replyTo: action.payload.replyTo }
    default:
      return state
  }
}

export function useCommentCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}