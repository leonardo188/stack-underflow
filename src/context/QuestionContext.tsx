import { createContext, useContext, useState, type ReactNode,  } from 'react'
import { useAuth } from './AuthContext'
import { initialQuestions } from '../data/initialQuestions'
import type { CommentDetail } from '../types/comment'
import type { Question, QuestionStatus } from '../types/question'

type QuestionContextType = {
  questions: Question[]

  addQuestion: (data: { title: string; description: string }) => void
  updateQuestion: (
    id: string,
    data: { title: string; description: string }
  ) => void
  changeStatus: (id: string, status: QuestionStatus) => void

  addComment: (questionId: string, content: string) => void
  updateComment: (
    questionId: string,
    commentId: string,
    content: string
  ) => void
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
)

export function QuestionProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth()
  const [questions, setQuestions] =
    useState<Question[]>(initialQuestions)

  /* ------------------------
     Questions
  -------------------------*/
  const addQuestion = (data: {
    title: string
    description: string
  }) => {
    if (!currentUser) return

    const newQuestion: Question = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      status: 'open',
      author: currentUser,
      createdAt: new Date().toLocaleString(),
      comments: [],
    }

    setQuestions((prev) => [newQuestion, ...prev])
  }

  const updateQuestion = (
    id: string,
    data: { title: string; description: string }
  ) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, ...data }
          : q
      )
    )
  }

  const changeStatus = (
    id: string,
    status: QuestionStatus
  ) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, status }
          : q
      )
    )
  }

  /* ------------------------
     Comments
  -------------------------*/
  const addComment = (
    questionId: string,
    content: string
  ) => {
    if (!currentUser) return

    const newComment: CommentDetail = {
      id: Date.now().toString(),
      content,
      author: currentUser,
      createdAt: new Date().toLocaleString(),
    }

    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              comments: [...q.comments, newComment],
            }
          : q
      )
    )
  }

  const updateComment = (
    questionId: string,
    commentId: string,
    content: string
  ) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              comments: q.comments.map((c) =>
                c.id === commentId
                  ? { ...c, content }
                  : c
              ),
            }
          : q
      )
    )
  }

  return (
    <QuestionContext.Provider
      value={{
        questions,
        addQuestion,
        updateQuestion,
        changeStatus,
        addComment,
        updateComment,
      }}
    >
      {children}
    </QuestionContext.Provider>
  )
}

export function useQuestions() {
  const context = useContext(QuestionContext)
  if (!context) {
    throw new Error(
      'useQuestions must be used within QuestionProvider'
    )
  }
  return context
}
