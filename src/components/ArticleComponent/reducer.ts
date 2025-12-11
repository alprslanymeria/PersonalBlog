// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/ArticleComponent/prop"


const initialState: State = {
  
  blogContent: ""
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_BLOG_CONTENT":
      return { ...state, blogContent: action.payload.blogContent }
    default:
      return state
  }
}

export function useArticleCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}