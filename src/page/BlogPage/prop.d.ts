// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { BlogPostExt } from "@/types/projectExt"

// REDUCER
export type State = {
  
  allBlogPosts: BlogPostExt[]
  uniqueBlogPost: BlogPostExt | null
}

export type Action =
  | { type: "SET_ALL_BLOG_POSTS", payload: {allBlogPosts: BlogPostExt[]} }
  | { type: "SET_UNIQUE_BLOG_POST", payload: {uniqueBlogPost: BlogPostExt} }


// USE EFFECT
export type UseBlogPageCustomEffectProps = {

    blogId: number
    showAlert: (props: ShowAlertProps) => void
    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}