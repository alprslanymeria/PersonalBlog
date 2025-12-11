// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseProjectCardCompCustomEffectProps } from "@/components/ProjectCardComponent/prop"

export function useProjectCardCompCustomEffect(props: UseProjectCardCompCustomEffectProps) {

    const {content, setLoading, dispatch} = props

    useEffect(() => {

        const kese = [content]

        if(kese.some(k => !k)) return

        const FETCH = async () => {

            try {

                // FETCH CONTENT
                const res = await fetch(content)
                const text = await res.text()

                // STE CONTENT
                dispatch({type: "SET_PROJECT_CONTENT", payload: {projectContent: text}})
                
            } catch (error) {

                // ALERT GÖSTERMEYE GEREK YOK
                console.log(`UNEXPECTED ERROR DURING FETCH PROJECT CONTENT: ${error}`)
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [content])
}