// REACT & NEXT
import { useEffect } from "react"
// ACTIONS
import GetProjectsAll from "@/actions/Project"
// TYPES
import { UsePortfolioPageCustomEffectProps } from "@/page/PortfolioPage/prop"


export function usePortfolioPageCustomEffect(params: UsePortfolioPageCustomEffectProps) {

    const {showAlert, setLoading, dispatch} = params

    useEffect(() => {

        const FETCH = async () => {

            try {

                const response = await GetProjectsAll()

                if(response && response.status == 500){
                    
                    showAlert({type: "error" , title: "error" , message: response.message})

                    return
                }

                if(response.data !== null)

                dispatch({type: "SET_PROJECTS", payload: {projects: response.data.data}})
                
            } catch (error) {

                showAlert({type: "error" , title: "error" , message: "Unexpected error during GetProjectsAll!"})
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [])

}