// REACT & NEXT
import { useEffect } from "react"
// ACTIONS
import { GetAllBlogPosts } from "@/actions/Blog"
// TYPES
import { UseBlogPageCustomEffectProps } from "@/page/BlogPage/prop"

export function useBlogPageCustomEffect(params: UseBlogPageCustomEffectProps) {

    const {blogId, setLoading, showAlert, dispatch} = params
    
    useEffect(() => {

        const kese = [blogId]

        if(kese.some(k => !k)) return

        const FETCH = async () => {

            try {

                const response = await GetAllBlogPosts()

                if(response && response.status == 500){
                    
                    showAlert({type: "error" , title: "error" , message: response.message})

                    return
                }

                if(response.data !== null) {

                    const allBlogPosts = response.data.data

                    dispatch({type: "SET_ALL_BLOG_POSTS", payload: {allBlogPosts: allBlogPosts}})
                    dispatch({type: "SET_UNIQUE_BLOG_POST", payload: {uniqueBlogPost: allBlogPosts.find((post) => post.id === blogId )!}})
                }
                

            } catch (error) {

                showAlert({type: "error" , title: "error" , message: "Unexpected error during GetAllBlogPosts!"})
                
            } finally {

                setLoading({value: false})
            }
        }

        FETCH()

    }, [blogId])
}