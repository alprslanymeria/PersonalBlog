// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { CommentExt } from "@/types/projectExt"

// REDUCER
export type State = {
  
  comments: CommentExt[]
  replyTo: string
}

export type Action =
  | { type: "SET_COMMENTS", payload: {comments: CommentExt[]} }
  | { type: "SET_REPLY_TO", payload: {replyTo: string} }


// CUSTOM EFFECT
export type UseCommentCompCustomEffectProps = {

  blogId: number
  showAlert: (props: ShowAlertProps) => void
  setLoading: (props: setLoadingProps) => void
  dispatch: React.Dispatch<Action>
}

// HANDLERS
export type HandleReplyClickProps = {

  commentId: string
  state: State
  dispatch: React.Dispatch<Action>
}