// TYPES
import { CapsImage } from "@prisma/client"

// COMPONENT
export type CapsComponentProps = {

    capsImages: CapsImage[]
}

// REDUCER
export type State = {

    isOpen: boolean
    selectedImage: string
}

export type Action =
  | { type: "SET_IS_OPEN", payload: {isOpen: boolean} }
  | { type: "SET_SELECTED_IMAGE", payload: {selectedImage: string} }


// HANDLERS
export type HandleImageClickProps = {

    imageUrl: string
    dispatch: React.Dispatch<Action>
}

export type CloseModalProps = {

    dispatch: React.Dispatch<Action>
}