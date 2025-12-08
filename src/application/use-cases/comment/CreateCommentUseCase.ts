import { ICommentRepository, CommentFromDb } from "@/domain/repositories/ICommentRepository"

export interface CreateCommentDto {
  blogPostId: number
  content: string
  parentId: string | null
  userId: string
  avatar: string
}

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(dto: CreateCommentDto): Promise<CommentFromDb> {
    // Validate parent comment if parentId is provided
    if (dto.parentId) {
      const parent = await this.commentRepository.findById(dto.parentId)
      
      if (parent?.parentId) {
        throw new Error("ONLY ONE LEVEL REPLY SUPPORTING!")
      }
    }

    return await this.commentRepository.create({
      blogPostId: dto.blogPostId,
      content: dto.content,
      parentId: dto.parentId,
      userId: dto.userId,
      avatar: dto.avatar
    })
  }
}
