import type { CommentDetail } from "./comment"

export type QuestionStatus = 'open' | 'answered' | 'closed'

export type Question = {
  id: string
  title: string
  description: string
  status: QuestionStatus
  author: string
  createdAt: string
  comments: CommentDetail[]
}
