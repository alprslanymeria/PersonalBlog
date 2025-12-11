// REACT & NEXT
import { useReducer } from "react"
// TYPES
import { Action, State } from "@/components/RandomBlogComponent/prop"


const initialState: State = {
  
  randomBlogPosts: [],
  contentPreviews: {}
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "SET_RANDOM_BLOG_POSTS":
      return { ...state, randomBlogPosts: action.payload.randomBlogPosts }
    case "SET_CONTENT_PREVIEWS":
      return { ...state, contentPreviews: action.payload.contentPreviews }
    default:
      return state
  }
}

export function useRandomBlogCompReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}