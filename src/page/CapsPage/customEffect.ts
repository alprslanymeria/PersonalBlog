// REACT & NEXT
import { useEffect } from "react"
// ACTIONS
import GetCapsAll from "@/actions/Caps"
// TYPES
import { UseCapsPageCustomEffectProps } from "@/page/CapsPage/prop"

export function useCapsPageCustomEffect(params: UseCapsPageCustomEffectProps) {

    const {showAlert, setLoading, dispatch} = params

    useEffect(() => {

        const FETCH = async () => {

            try {

                const response = await GetCapsAll()

                if(response && response.status == 500){
                    
                    showAlert({type: "error" , title: "error" , message: response.message})

                    return
                }

                if(response.data !== null)

                dispatch({type: "SET_CAPS_IMAGES", payload: {capsImages: response.data.data}})
                
            } catch (error) {
                
                showAlert({type: "error" , title: "error" , message: "Unexpected error during GetCapsAll!"})
            
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [])
}