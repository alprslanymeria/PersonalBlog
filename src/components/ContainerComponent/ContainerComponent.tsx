"use client"

// COMPONENTS
import ArticleComponent from "@/components/ArticleComponent/ArticleComponent"
import RandomBlogComponent from "@/components/RandomBlogComponent/RandomBlogComponent"
// TYPES
import { ContainerCompProps } from "@/components/ContainerComponent/prop"

export default function ContainerComponent({blogPost, allBlogPosts, category}: ContainerCompProps) {

    return (

        <div className="flex flex-col gap-8 my-8">
            <div>
                <ArticleComponent blogPost={blogPost} />
            </div>

            <div>
                <RandomBlogComponent allBlogPosts={allBlogPosts} category={category} />
            </div>
        </div>
    )
}