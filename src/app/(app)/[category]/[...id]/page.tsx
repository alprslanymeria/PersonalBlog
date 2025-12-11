"use client"

// REACT & NEXT
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
// COMPONENTS
import ContainerComponent from "@/components/ContainerComponent/ContainerComponent"
import ShareComponent from "@/components/ShareComponent/ShareComponent"
import CommentComponent from "@/components/CommentComponent/CommentComponent"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"
import { useAlert } from "@/providers/AlertProvider/AlertProvider"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useBlogPageReducer } from "@/page/BlogPage/reducer"
import { useBlogPageCustomEffect } from "@/page/BlogPage/customEffect"

export default function BlogPage() {

    // GET ID SLUG
    const params = useParams()
    const blogId = params.id as string
    const category = params.category as string

    if(Number(blogId) >= 10) {

        notFound()
    }

    // HOOKS
    const {isLoading, loadingSource, setLoading} = useLoading()
    const {state, dispatch} = useBlogPageReducer()
    const {showAlert} = useAlert()

    // CUSTOM EFFECT: GET ALL BLOG POSTS & UNIQUE POST
    useBlogPageCustomEffect({

        blogId: Number(blogId),
        setLoading,
        showAlert,
        dispatch
    })

    if((isLoading && loadingSource === "page") || !state.uniqueBlogPost || !state.allBlogPosts ) return (

        <div className="relative w-full h-[500px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    )

    return (

        <>
            <div className="relative w-full h-[500px]">
                <Image
                    src={state.uniqueBlogPost.imageUrl}
                    alt="Blog Image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </div>

            <div className="container mx-auto max-w-screen-xl">
                <h1 className="text-center text-[#FFC96B] text-2xl mt-4 font-bold md:text-4xl">{state.uniqueBlogPost.header}</h1>
                <ContainerComponent blogPost={state.uniqueBlogPost} allBlogPosts={state.allBlogPosts} category={category}/>
                <ShareComponent/>
                <CommentComponent blogId={Number(blogId)}/>
            </div>
        </>
    )
}