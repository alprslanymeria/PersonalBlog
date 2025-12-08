import { ICommentRepository, CommentFromDb } from "@/domain/repositories/ICommentRepository"
import { CommentExt } from "@/types/projectExt"

export class GetCommentsByBlogIdUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(blogPostId: number): Promise<CommentExt[]> {
    const allComments = await this.commentRepository.findByBlogPostId(blogPostId)
    return this.buildCommentTree(allComments)
  }

  private buildCommentTree(
    allComments: CommentFromDb[],
    parentId: string | null = null
  ): CommentExt[] {
    return allComments
      .filter((c) => c.parentId === parentId)
      .map((c) => ({
        ...c,
        parent: null,
        replies: this.buildCommentTree(allComments, c.id)
      }))
  }
}
