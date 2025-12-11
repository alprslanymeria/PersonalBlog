// REACT & NEXT
import { useEffect } from "react"
// ACTIONS
import { GetUniqueCategory } from "@/actions/Category"
// TYPES
import { UseCategoryPageCustomEffectProps } from "@/page/CategoryPage/prop"



export function useCategoryPageCustomEffect(params: UseCategoryPageCustomEffectProps) {

    const {category, setLoading, showAlert, dispatch} = params

    useEffect(() => {
        
        const kese = [category]

        if(kese.some(k => !k)) return

        const FETCH = async () => {

            try {

                const response = await GetUniqueCategory({category})

                if(response && response.status == 500) {
                        
                    showAlert({type: "error" , title: "error" , message: response.message})

                    return
                }

                if(response.data !== null)

                dispatch({type: "SET_UNIQUE_CATEGORY", payload: {category: response.data.data}})   

            } catch (error) {

                showAlert({type: "error" , title: "error" , message: "Unexpected error during GetUniqueCategory!"})
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [category])

}