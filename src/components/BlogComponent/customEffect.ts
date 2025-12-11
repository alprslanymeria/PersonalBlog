// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseBlogCompCustomEffectProps } from "@/components/BlogComponent/prop"

export function useBlogCompCustomEffect(props: UseBlogCompCustomEffectProps) {

    const {currentContents, state, setLoading, dispatch} = props

    useEffect(() => {

        const kese = [currentContents, state]

        if(kese.some(k => !k)) return

        const FETCH = async () => {

            try {

                currentContents.forEach(async (post) => {

                    if (post.content && !state.contentPreviews[post.id]) {

                        // FETCH CONTENT
                        const res = await fetch(post.content)
                        const text = await res.text()

                        // SUMMARY CONTENT
                        const preview = text.slice(0, 200) + (text.length > 200 ? "..." : "")
                        dispatch({type: "SET_CONTENT_PREVIEWS", payload: {contentPreviews: { ...state.contentPreviews, [post.id]: preview }}})
                    }
                })
                
            } catch (error) {
                
                // ALERT GÖSTERMEYE GEREK YOK
                console.log(`UNEXPECTED ERROR DURING FETCH BLOG CONTENTS: ${error}`)
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()
        
    }, [currentContents, state])
}