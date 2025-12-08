import { IBlogPostRepository, BlogPostWithRelations } from "@/domain/repositories/IBlogPostRepository"

export class GetAllBlogPostsUseCase {
  constructor(private blogPostRepository: IBlogPostRepository) {}

  async execute(): Promise<BlogPostWithRelations[]> {
    return await this.blogPostRepository.findAll()
  }
}
