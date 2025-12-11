// TYPES
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { BlogPost } from "@prisma/client"

// COMPONENT PROPS
export type BlogComponentProps = {

    Category: string
    blogPosts: BlogPost[]
}

// REDUCER
export type State = {

    currentPage: number
    contentPreviews: { [key: string]: string }
}

export type Action =
  | { type: "SET_CURRENT_PAGE", payload: {currentPage: number} }
  | { type: "SET_CONTENT_PREVIEWS", payload: {contentPreviews: { [key: string]: string }} }


// CUSTOM EFFECT
export type UseBlogCompCustomEffectProps = {

    currentContents: BlogPost[]
    state: State
    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}


// HANDLERS
export type HandlePageChangeProps = {

    value: number
    dispatch: React.Dispatch<Action>
}