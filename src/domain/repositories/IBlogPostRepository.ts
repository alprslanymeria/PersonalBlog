import { BlogPost } from "../entities/BlogPost"
import { BlogPostExt } from "@/types/projectExt"

export type BlogPostWithRelations = BlogPostExt

export interface IBlogPostRepository {
  findAll(): Promise<BlogPostWithRelations[]>
  findById(id: number): Promise<BlogPostWithRelations | null>
  findByCategory(categoryId: number): Promise<BlogPostWithRelations[]>
  getRandom(limit: number): Promise<BlogPostWithRelations[]>
}
