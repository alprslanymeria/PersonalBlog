import { PrismaClient } from "@prisma/client"
import { ICommentRepository, CommentFromDb } from "@/domain/repositories/ICommentRepository"

export class PrismaCommentRepository implements ICommentRepository {
  constructor(private prisma: PrismaClient) {}

  async findByBlogPostId(blogPostId: number): Promise<CommentFromDb[]> {
    return await this.prisma.comment.findMany({
      where: { blogPostId },
      include: {
        user: true,
        blogPost: true,
      },
      orderBy: { createdAt: "asc" }
    }) as any
  }

  async findById(id: string): Promise<CommentFromDb | null> {
    return await this.prisma.comment.findUnique({
      where: { id },
      include: {
        parent: {
          include: {
            user: true
          }
        },
        user: true,
        blogPost: true
      }
    }) as any
  }

  async create(data: {
    blogPostId: number
    content: string
    parentId: string | null
    userId: string
    avatar: string
  }): Promise<CommentFromDb> {
    return await this.prisma.comment.create({
      data: {
        blogPostId: data.blogPostId,
        content: data.content,
        parentId: data.parentId,
        userId: data.userId,
        avatar: data.avatar
      },
      include: {
        user: true,
        blogPost: true
      }
    }) as any
  }
}
