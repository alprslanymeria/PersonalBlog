// TYPES
import { setLoadingProps } from "@/providers/LoadingProvider/prop"

// REDUCER
export type State = {

    bioText: string
}

export type Action =
  | { type: "SET_BIO_TEXT", payload: {bioText: string} }



// USE EFFECT
export type UseBioCompCustomEffectProps = {

    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}