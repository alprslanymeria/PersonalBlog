// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { useArticleComponentCustomEffectProps } from "@/components/ArticleComponent/prop"

export function useArticleComponentCustomEffect(props: useArticleComponentCustomEffectProps) {
    
    const {content, setLoading, dispatch} = props

    useEffect(() => {

        const kese = [content]

        if(kese.some(k => !k)) return

        const FETCH = async () => {

            try {

                // FETCH CONTENT
                const res = await fetch(content)
                const text = await res.text()

                dispatch({type: "SET_BLOG_CONTENT", payload: {blogContent: text}})
                
            } catch (error) {
                
                // ALERT GÖSTERMEYE GEREK YOK
                console.log(`UNEXPECTED ERROR DURING FETCH BLOG CONTENT: ${error}`)

            } finally {

                setLoading({value: false})
            }

        }

        FETCH()

    }, [content])
}