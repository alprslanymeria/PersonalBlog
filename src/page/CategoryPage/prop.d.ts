// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { CategoryExt } from "@/types/projectExt"

// REDUCER
export type State = {

  category: CategoryExt | null
    
}

export type Action =
  | { type: "SET_UNIQUE_CATEGORY", payload: {category: CategoryExt} }



// USE EFFECT
export type UseCategoryPageCustomEffectProps = {

    category: string
    setLoading: (props: setLoadingProps) => void
    showAlert: (props: ShowAlertProps) => void
    dispatch: React.Dispatch<Action>
}