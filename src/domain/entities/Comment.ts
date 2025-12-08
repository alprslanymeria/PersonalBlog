export interface Comment {
  id: string
  userId: string
  blogPostId: number
  parentId: string | null
  content: string
  createdAt: Date
  avatar: string | null
}
