// TYPES
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { BlogPostExt } from "@/types/projectExt"

export type ArticleCompProps = {

    blogPost: BlogPostExt
}

// REDUCER
export type State = {
  
    blogContent: string
}

export type Action =
  | { type: "SET_BLOG_CONTENT", payload: {blogContent: string} }


// CUSTOM EFFECT
export type useArticleComponentCustomEffectProps = {

    content: string
    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}