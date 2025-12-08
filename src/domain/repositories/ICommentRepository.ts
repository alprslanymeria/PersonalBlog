import { Comment } from "../entities/Comment"
import { CommentExt } from "@/types/projectExt"
import { Comment as PrismaComment, BlogPost, User } from "@prisma/client"

export type CommentWithRelations = CommentExt

export type CommentFromDb = PrismaComment & {
  user: User
  blogPost: BlogPost
  parent?: (PrismaComment & {
    user: User
  }) | null
}

export interface ICommentRepository {
  findByBlogPostId(blogPostId: number): Promise<CommentFromDb[]>
  findById(id: string): Promise<CommentFromDb | null>
  create(data: {
    blogPostId: number
    content: string
    parentId: string | null
    userId: string
    avatar: string
  }): Promise<CommentFromDb>
}
