// ENUM
export type LoadingSource = "page"


export type setLoadingProps = {
    value: boolean
    source?: LoadingSource
}

export interface LoadingContextProps {

  isLoading: boolean
  loadingSource: LoadingSource | null
  setLoading: (props: setLoadingProps) => void
}

// FUNCTIONS
export type LoadingProviderProps = {
    children: ReactNode
}