// REACT & NEXT
import React, { ChangeEvent } from "react"
// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import {Action as ActionOfCommentComp} from "@/components/CommentComponent/prop"

// COMPONENT
export type CommentFormCompProps = {

  parentId?: string
  blogId: number
  onCommentSuccess?: () => void
  dispatchOfCommentComp: React.Dispatch<ActionOfCommentComp>
}

// REDUCER
export type State = {
  
  content: string
  selectedAvatar: string
}

export type Action =
  | { type: "SET_CONTENT", payload: {content: string} }
  | { type: "SET_SELECTED_AVATAR", payload: {selectedAvatar: string} }


// HANDLERS
export type HandleOnChangeClickProps = {

  e: ChangeEvent<HTMLTextAreaElement>
  dispatch: React.Dispatch<Action>
}

export type HandleAvatarClickProps = {

  avatar: string
  dispatch: React.Dispatch<Action>
}


// CUSTOM EFFECT
export type UseCommentFormCompCustomEffectProps = {

  state: {
      success: boolean;
      status: number;
      message: string;
      data: null;
  } | undefined

  onCommentSuccess: (() => void) | undefined
  showAlert: (props: ShowAlertProps) => void
  dispatch: React.Dispatch<Action>
  dispatchOfCommentComp: React.Dispatch<ActionOfCommentComp>
}