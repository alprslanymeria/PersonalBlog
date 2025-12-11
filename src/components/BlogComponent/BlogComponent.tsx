"use client"

// REACT & NEXT
import Link from 'next/link'
import Image from 'next/image'
// 3RD PARTY
import { Pagination } from '@mui/material'
import { Stack } from '@mui/material'
// REDUCER & HANDLERS & CUSTOM USE EFFECTS
import { useBlogCompReducer } from '@/components/BlogComponent/reducer'
import { handlePageChange } from '@/components/BlogComponent/handlers'
import { useBlogCompCustomEffect } from '@/components/BlogComponent/customEffect'
// TYPES
import { BlogComponentProps } from '@/components/BlogComponent/prop'
import { useLoading } from '@/providers/LoadingProvider/LoadingProvider'


export default function BlogComponent({blogPosts, Category} : BlogComponentProps) {

    // HOOKS
    const {state, dispatch} = useBlogCompReducer()
    const {isLoading, setLoading, loadingSource} = useLoading()

    // CONST'S
    const postsPerPage = 3
    const indexOfLastPost = state.currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentContents = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

    // USE EFFECT
    useBlogCompCustomEffect({

        state,
        currentContents,
        setLoading,
        dispatch
    })

    return (

        <>

        {currentContents.length === 0 || (isLoading && loadingSource === "page") ? (

            <div className="container mx-auto max-w-screen-xl h-[500px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
            </div>

        ) : (

            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {currentContents.map((post) => (
                        <Link
                            key={post.id}
                            href={`/${Category}/${post.id}`}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                        >
                            <div>
                                <Image
                                    src={post.imageUrl}
                                    alt={post.header}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.header}</h2>
                                <p className="text-gray-600 text-sm">{state.contentPreviews[post.id] || "Yükleniyor..."}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <Stack spacing={2} mt={2} mb={2} direction={'row'} justifyContent={'center'}>
                    <Pagination
                        count={Math.ceil(blogPosts.length / postsPerPage)}
                        page={state.currentPage}
                        onChange={(e,value) => handlePageChange({value, dispatch})}
                        color="primary"
                    />
                </Stack>
            </>

        )}
        
        </>
    )
}