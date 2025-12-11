"use client"

// TYPES
import { ArticleCompProps } from "@/components/ArticleComponent/prop"
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useArticleCompReducer } from "@/components/ArticleComponent/reducer"
import { useArticleComponentCustomEffect } from "@/components/ArticleComponent/customEffect"
// PROVIDERS
import { useLoading } from "@/providers/LoadingProvider/LoadingProvider"

export default function ArticleComponent({blogPost} : ArticleCompProps) {

    // HOOKS
    const {state, dispatch} = useArticleCompReducer()
    const {isLoading, setLoading, loadingSource} = useLoading()

    // CUSTOM EFFECT
    useArticleComponentCustomEffect({
        
        content: blogPost.content,
        setLoading,
        dispatch
    })

    // GET INFOS
    const author = blogPost.author
    const date = blogPost.createdAt
    const tags = blogPost.blogPostTags

    if(isLoading && loadingSource === "page") {

        <div className="p-6 bg-white flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
        </div>
    }

    return (

        <div className="p-6 bg-white">

            {/* AUTHOR AND DATE */}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">🖊️ Yazar:</span>
                    <span className="text-gray-600">{author}</span>
                </div>
                <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">📅 Tarih:</span>
                    <span className="text-gray-600">
                        {date ? new Date(date).toLocaleDateString() : "Unknown Date"}
                    </span>
                </div>
            </div>

            {/* TAGS */}
            <div className="tags mb-4">
                {tags && tags.length > 0 ? (

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (

                            <div

                                key={tag.tag.id}
                                className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200"
                            >
                                #{tag.tag.name}
                            </div>

                        ))}
                    </div>

                ) : (

                    <span className="text-gray-500">Etiket bulunamadı.</span>
                )}
            </div>

            {/* CONTENT */}
            <div className="content text-lg leading-relaxed">
                <p className="text-justify text-gray-800">{state.blogContent}</p>
            </div>
        </div>
    )
}