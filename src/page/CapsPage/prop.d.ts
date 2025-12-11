// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { CapsImage } from "@prisma/client"

// REDUCER
export type State = {

    capsImages: CapsImage[]
}

export type Action =
  | { type: "SET_CAPS_IMAGES", payload: {capsImages: CapsImage[]} }


// USE EFFECT
export type UseCapsPageCustomEffectProps = {

    setLoading: (props: setLoadingProps) => void
    showAlert: (props: ShowAlertProps) => void
    dispatch: React.Dispatch<Action>
}