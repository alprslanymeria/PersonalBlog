"use client"

// REACT & NEXT
import Link from "next/link"
import Image from "next/image"
// TYPES
import { RandomBlogCompProps } from "@/components/RandomBlogComponent/prop"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useRandomBlogCompReducer } from "@/components/RandomBlogComponent/reducer"
import { UseRandomBlogCompCustomEffect } from "@/components/RandomBlogComponent/customEffect"
// UTILS
import { toTitleCase } from "@/utils/helper"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"

export default function RandomBlogComponent({allBlogPosts, category} : RandomBlogCompProps) {

    // HOOKS
    const {state, dispatch} = useRandomBlogCompReducer()
    const {isLoading, setLoading, loadingSource} = useLoading() // LOADING SPINNER GEREK GÖRÜRSEM KULLANIRIM. ŞU AN İÇİN GEREK YOK.

    // BU COMPONENT'DE 

    // CUSTOM EFFECT
    UseRandomBlogCompCustomEffect({
        allBlogPosts,
        state,
        setLoading,
        dispatch
    })

    return (

        <div className="w-full mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🌀 İlgili</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.randomBlogPosts.map((post) => (
                    <Link 
                        href={`/${category}/${post.id}`} 
                        key={post.id} 
                        className="shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                        {post.imageUrl && (
                            <div className="relative w-full h-24">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.header}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="p-3 flex flex-col flex-1">
                            <h3 className="font-bold text-m text-gray-800 mb-2 line-clamp-2">
                                {toTitleCase(post.header)}
                            </h3>
                            <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                                {state.contentPreviews[post.id] || "Yükleniyor..."}
                            </p>
                            <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                                <span>✍️ {post.author}</span>
                                <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}