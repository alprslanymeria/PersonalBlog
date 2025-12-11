// REACT & NEXT
import { useEffect } from "react"
// TYPES
import { UseRandomBlogCompCustomEffectProps } from "@/components/RandomBlogComponent/prop"

export function UseRandomBlogCompCustomEffect(params: UseRandomBlogCompCustomEffectProps) {

    const {allBlogPosts, state, setLoading, dispatch} = params

    useEffect(()  => {

        const kese = [allBlogPosts]

        if(kese.some(k => !k)) return

        // SHUFFLE
        if(allBlogPosts.length > 0) {

            const shuffled = [...allBlogPosts].sort(() => 0.5 - Math.random())

            dispatch({type: "SET_RANDOM_BLOG_POSTS", payload: {randomBlogPosts: shuffled.slice(0, 3)}})

        }
        
    }, [allBlogPosts])


    useEffect(() => {

        const FETCH = async () => {

            const kese = [state, state.randomBlogPosts]

            if(kese.some(k => !k)) return

            try {

                const randomBlogPosts = state.randomBlogPosts
                const contentPreviews = state.contentPreviews

                randomBlogPosts.forEach(async (post) => {

                    if(post.content && !contentPreviews[post.id]) {

                        // FETCH CONTENT
                        const res = await fetch(post.content)
                        const text = await res.text()

                        // SUMMARY CONTENT
                        const preview = text.slice(0, 200) + (text.length > 200 ? "..." : "")
                        dispatch({type: "SET_CONTENT_PREVIEWS", payload: {contentPreviews: { ...contentPreviews, [post.id]: preview }}}) 
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

    }, [state, state.randomBlogPosts])
}