// REACT & NEXT
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import React, { ChangeEvent } from "react"


// REDUCER
export type State = {
  
  email: string
}

export type Action =
  | { type: "SET_EMAIL", payload: {email: string} }


// USE EFFECT
export type  UseSubscriberCompCustomEffectProps = {

  isPending: boolean
  email: string
  state: {
      success: boolean
      status: number
      message: string
      data: null
  } | undefined
  showAlert: (props: ShowAlertProps) => void
  dispatch: React.Dispatch<Action>
}

// HANDLERS
export type HandleInputOnChangeProps = {

  e: ChangeEvent<HTMLInputElement>
  dispatch: React.Dispatch<Action>
}