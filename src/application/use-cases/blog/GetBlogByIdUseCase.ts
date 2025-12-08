import { IBlogPostRepository, BlogPostWithRelations } from "@/domain/repositories/IBlogPostRepository"

export class GetBlogByIdUseCase {
  constructor(private blogPostRepository: IBlogPostRepository) {}

  async execute(id: number): Promise<BlogPostWithRelations | null> {
    return await this.blogPostRepository.findById(id)
  }
}
