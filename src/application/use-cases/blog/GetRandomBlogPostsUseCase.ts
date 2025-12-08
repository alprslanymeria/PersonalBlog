import { IBlogPostRepository, BlogPostWithRelations } from "@/domain/repositories/IBlogPostRepository"

export class GetRandomBlogPostsUseCase {
  constructor(private blogPostRepository: IBlogPostRepository) {}

  async execute(limit: number): Promise<BlogPostWithRelations[]> {
    return await this.blogPostRepository.getRandom(limit)
  }
}
