import { PrismaClient } from "@prisma/client"
import { ICategoryRepository, CategoryWithBlogPosts } from "@/domain/repositories/ICategoryRepository"
import { Category } from "@/domain/entities/Category"

export class PrismaCategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) {}

  async findByName(name: string): Promise<CategoryWithBlogPosts | null> {
    return await this.prisma.category.findFirst({
      where: { name },
      include: {
        blogPosts: true
      }
    })
  }

  async findAll(): Promise<Category[]> {
    return await this.prisma.category.findMany()
  }
}
