"use client"

// REACT & NEXT
import { notFound, useParams } from "next/navigation"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
// COMPONENT
import BlogComponent from "@/components/BlogComponent/BlogComponent"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useCategoryPageCustomEffect } from "@/page/CategoryPage/customEffect"
import { useCategoryPageReducer } from "@/page/CategoryPage/reducer"


export default function CategoryPage() {

    // GET CATEGORY SLUG
    const params = useParams()
    const category = params.category as string

    const categories = [
        "philosophy",
        "film",
        "music",
        "software",
        "book"
    ]

    if (!categories.includes(category)) {
        notFound()
    }

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {showAlert} = useAlert()
    const {state, dispatch} = useCategoryPageReducer()

    // USE EFFECT
    useCategoryPageCustomEffect({
        category,
        setLoading,
        showAlert,
        dispatch
    })

    if(isLoading && loadingSource === "page" ) return (

        <div className="container mx-auto max-w-screen-xl h-[500px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )
    
    return (

        <div className="container mx-auto max-w-screen-xl">
            <BlogComponent blogPosts={state.category?.blogPosts ?? []} Category={category}/>
        </div>
    )
}