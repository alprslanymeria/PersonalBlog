// TYPES
import { ShowAlertProps } from "@/providers/AlertProvider/prop"
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { ProjectExt } from "@/types/projectExt"

// REDUCER
export type State = {
  
  projects: ProjectExt[]
}

export type Action =
  | { type: "SET_PROJECTS", payload: {projects: ProjectExt[]} }


// USE EFFECT
export type UsePortfolioPageCustomEffectProps = {

    showAlert: (props: ShowAlertProps) => void
    setLoading: (props: setLoadingProps) => void
    dispatch: React.Dispatch<Action>
}