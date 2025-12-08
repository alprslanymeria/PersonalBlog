import { prisma } from "@/lib/prisma"

// Repositories
import { PrismaBlogPostRepository } from "../repositories/PrismaBlogPostRepository"
import { PrismaCategoryRepository } from "../repositories/PrismaCategoryRepository"
import { PrismaCommentRepository } from "../repositories/PrismaCommentRepository"
import { PrismaProjectRepository } from "../repositories/PrismaProjectRepository"
import { PrismaSubscriberRepository } from "../repositories/PrismaSubscriberRepository"
import { PrismaCapsImageRepository } from "../repositories/PrismaCapsImageRepository"

// Use Cases
import { GetAllBlogPostsUseCase } from "@/application/use-cases/blog/GetAllBlogPostsUseCase"
import { GetBlogByIdUseCase } from "@/application/use-cases/blog/GetBlogByIdUseCase"
import { GetRandomBlogPostsUseCase } from "@/application/use-cases/blog/GetRandomBlogPostsUseCase"
import { GetUniqueCategoryUseCase } from "@/application/use-cases/category/GetUniqueCategoryUseCase"
import { GetCommentsByBlogIdUseCase } from "@/application/use-cases/comment/GetCommentsByBlogIdUseCase"
import { CreateCommentUseCase } from "@/application/use-cases/comment/CreateCommentUseCase"
import { GetAllProjectsUseCase } from "@/application/use-cases/project/GetAllProjectsUseCase"
import { CreateSubscriberUseCase } from "@/application/use-cases/subscriber/CreateSubscriberUseCase"
import { GetAllCapsImagesUseCase } from "@/application/use-cases/caps/GetAllCapsImagesUseCase"

// Dependency Injection Container applying Dependency Inversion Principle
class DIContainer {
  // Repositories - Singleton instances
  private blogPostRepository = new PrismaBlogPostRepository(prisma)
  private categoryRepository = new PrismaCategoryRepository(prisma)
  private commentRepository = new PrismaCommentRepository(prisma)
  private projectRepository = new PrismaProjectRepository(prisma)
  private subscriberRepository = new PrismaSubscriberRepository(prisma)
  private capsImageRepository = new PrismaCapsImageRepository(prisma)

  // Blog Use Cases
  getAllBlogPostsUseCase(): GetAllBlogPostsUseCase {
    return new GetAllBlogPostsUseCase(this.blogPostRepository)
  }

  getBlogByIdUseCase(): GetBlogByIdUseCase {
    return new GetBlogByIdUseCase(this.blogPostRepository)
  }

  getRandomBlogPostsUseCase(): GetRandomBlogPostsUseCase {
    return new GetRandomBlogPostsUseCase(this.blogPostRepository)
  }

  // Category Use Cases
  getUniqueCategoryUseCase(): GetUniqueCategoryUseCase {
    return new GetUniqueCategoryUseCase(this.categoryRepository)
  }

  // Comment Use Cases
  getCommentsByBlogIdUseCase(): GetCommentsByBlogIdUseCase {
    return new GetCommentsByBlogIdUseCase(this.commentRepository)
  }

  createCommentUseCase(): CreateCommentUseCase {
    return new CreateCommentUseCase(this.commentRepository)
  }

  // Project Use Cases
  getAllProjectsUseCase(): GetAllProjectsUseCase {
    return new GetAllProjectsUseCase(this.projectRepository)
  }

  // Subscriber Use Cases
  createSubscriberUseCase(): CreateSubscriberUseCase {
    return new CreateSubscriberUseCase(this.subscriberRepository)
  }

  // Caps Use Cases
  getAllCapsImagesUseCase(): GetAllCapsImagesUseCase {
    return new GetAllCapsImagesUseCase(this.capsImageRepository)
  }
}

// Export singleton instance
export const container = new DIContainer()
