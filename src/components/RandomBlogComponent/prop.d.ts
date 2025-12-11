// TYPES
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { BlogPostExt } from "@/types/projectExt"

// COMPONENT
export type RandomBlogCompProps = {

    allBlogPosts: BlogPostExt[]
    category: string
}

// REDUCER
export type State = {
  
  randomBlogPosts: BlogPostExt[]
  contentPreviews: { [key: string]: string }
}

export type Action =
  | { type: "SET_RANDOM_BLOG_POSTS", payload: {randomBlogPosts: BlogPostExt[]} }
  | { type: "SET_CONTENT_PREVIEWS", payload: {contentPreviews: { [key: string]: string }} }


// USE EFFECT
export type UseRandomBlogCompCustomEffectProps = {

    allBlogPosts: BlogPostExt[]
    state: State
    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}