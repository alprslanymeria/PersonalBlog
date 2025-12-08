import { Category } from "../entities/Category"
import { CategoryExt } from "@/types/projectExt"

export type CategoryWithBlogPosts = CategoryExt

export interface ICategoryRepository {
  findByName(name: string): Promise<CategoryWithBlogPosts | null>
  findAll(): Promise<Category[]>
}
