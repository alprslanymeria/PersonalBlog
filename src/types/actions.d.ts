// TYPES
import { BlogPostExt, CategoryExt, CommentExt, ProjectExt } from "@/types/projectExt"
import { CapsImage, Category, Comment } from "@prisma/client"


// PROJECT.TS
export type GetProjectsAllResponse = {

    data: ProjectExt[]
}

// CAPS.TS
export type GetCapsAllResponse = {

    data: CapsImage[]
}

// CATEGORY.TS
export type GetUniqueCategoryProps = {

    category: string
}

export type GetUniqueCategoryResponse = {

    data: CategoryExt
}


// BLOG.TS
export type GetAllBlogPostsResponse = {

    data: BlogPostExt[]
}

// COMMENTS.TS
export type GetCommentsByIdProps = {

    blogId: number
}

export type GetCommentsByIdResponse = {

    data: CommentExt[]
}


const blogPosts: ({
    comments: {
        id: string;
        content: string;
        createdAt: Date;
        avatar: string;
        userId: string;
        blogPostId: number;
        parentId: string | null;
    }[];
    blogPostTags: ({
        tag: {
            name: string;
            id: number;
        };
    } & {
        blogPostId: number;
        tagId: number;
    })[];
} & {
    id: number;
    categoryId: number;
    imageUrl: string;
    header: string;
    content: string;
    author: string;
    createdAt: Date;
})[]