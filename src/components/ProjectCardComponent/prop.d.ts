// TYPES
import { setLoadingProps } from "@/providers/LoadingProvider/prop"
import { ProjectExt } from "@/types/projectExt"

export type ProjectCardComponentProps = {

    project: ProjectExt
}

// REDUCER
export type State = {
  
  showFullContent: boolean
  projectContent: string
}

export type Action =
  | { type: "SET_SHOW_FULL_CONTENT", payload: {showFullContent: boolean} }
  | { type: "SET_PROJECT_CONTENT", payload: {projectContent: string} }


// HANDLERS
export type HandleShowClickProps = {

  state: State
  dispatch: React.Dispatch<Action>
}

// CUSTOM EFFECT
export type UseProjectCardCompCustomEffectProps = {

  content: string
  setLoading: (props: setLoadingProps) => void
  dispatch: React.Dispatch<Action>
}