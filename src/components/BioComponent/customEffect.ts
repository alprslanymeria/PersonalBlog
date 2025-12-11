// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseBioCompCustomEffectProps } from "@/components/BioComponent/prop"

export function useBioCompCustomEffect(params: UseBioCompCustomEffectProps) {

    const {setLoading, dispatch} = params

    useEffect(() => {

        const FETCH = async () => {

            try {
                
                const response = await fetch("/bio.txt")

                const text = await response.text()

                dispatch({type: "SET_BIO_TEXT", payload: {bioText: text}})
                
            } catch (error) {

                // ALERT GÖSTERMEYE GEREK YOK
                console.log(`UNEXPECTED ERROR DURING FETCH BIO TEXT: ${error}`)
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [])
}