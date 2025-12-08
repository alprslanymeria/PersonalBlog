import { ICategoryRepository, CategoryWithBlogPosts } from "@/domain/repositories/ICategoryRepository"

export class GetUniqueCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(categoryName: string): Promise<CategoryWithBlogPosts | null> {
    return await this.categoryRepository.findByName(categoryName)
  }
}
