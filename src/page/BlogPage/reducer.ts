// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/page/BlogPage/prop"


const initialState: State = {
  
  allBlogPosts: [],
  uniqueBlogPost: null
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_ALL_BLOG_POSTS":
      return { ...state, allBlogPosts: action.payload.allBlogPosts }
    case "SET_UNIQUE_BLOG_POST":
      return { ...state, uniqueBlogPost: action.payload.uniqueBlogPost }
    default:
      return state
  }
}

export function useBlogPageReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
