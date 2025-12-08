import { PrismaClient } from "@prisma/client"
import { IBlogPostRepository, BlogPostWithRelations } from "@/domain/repositories/IBlogPostRepository"

export class PrismaBlogPostRepository implements IBlogPostRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<BlogPostWithRelations[]> {
    return await this.prisma.blogPost.findMany({
      include: {
        comments: true,
        blogPostTags: {
          include: {
            tag: true
          }
        }
      }
    })
  }

  async findById(id: number): Promise<BlogPostWithRelations | null> {
    return await this.prisma.blogPost.findUnique({
      where: { id },
      include: {
        comments: true,
        blogPostTags: {
          include: {
            tag: true
          }
        }
      }
    })
  }

  async findByCategory(categoryId: number): Promise<BlogPostWithRelations[]> {
    return await this.prisma.blogPost.findMany({
      where: { categoryId },
      include: {
        comments: true,
        blogPostTags: {
          include: {
            tag: true
          }
        }
      }
    })
  }

  async getRandom(limit: number): Promise<BlogPostWithRelations[]> {
    const count = await this.prisma.blogPost.count()
    const skip = Math.max(0, Math.floor(Math.random() * (count - limit)))
    
    return await this.prisma.blogPost.findMany({
      take: limit,
      skip: skip,
      include: {
        comments: true,
        blogPostTags: {
          include: {
            tag: true
          }
        }
      }
    })
  }
}
