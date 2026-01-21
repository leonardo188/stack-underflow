import { useParams, useNavigate } from 'react-router-dom'
import { useQuestions } from '../context/QuestionContext'
import { useAuth } from '../context/AuthContext'
import QuestionForm from '../components/question/QuestionForm'
import QuestionStatusBadge from '../components/question/QuestionStatusBadge'
import CommentItem from '../components/comment/CommentItem'
import CommentForm from '../components/comment/CommentForm'
import { useState } from 'react'
import AppLayout from '../components/layout/AppLayout'

export default function QuestionDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const {
    questions,
    updateQuestion,
    changeStatus,
    addComment,
    updateComment,
  } = useQuestions()

  const [isEditing, setIsEditing] = useState(false)

  const question = questions.find((q) => q.id === id)

  if (!question) {
    return (
      <p className="text-muted">
        Question not found.
      </p>
    )
  }

  const isOwner = question.author === currentUser

  return (
    <AppLayout>
      <div className="space-y-6">
        <button onClick={() => navigate('/questions')}>
          ← Back to questions
        </button>

        <div className="border rounded p-4 space-y-4">
          {!isEditing ? (
            <>
              <div className="flex justify-between items-start gap-4">
                <h1 className="text-xl font-semibold">
                  {question.title}
                </h1>
                <QuestionStatusBadge status={question.status} />
              </div>

              <p>{question.description}</p>

              <div className="flex justify-between text-sm text-muted">
                <span>by {question.author}</span>
                <span>{question.createdAt}</span>
              </div>

              {isOwner && (
                <div className="flex gap-2">
                  <button onClick={() => setIsEditing(true)}>
                    Edit
                  </button>

                  <select
                    value={question.status}
                    onChange={(e) =>
                      changeStatus(
                        question.id,
                        e.target.value as typeof question.status
                      )
                    }
                  >
                    <option value="open">Open</option>
                    <option value="answered">Answered</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              )}
            </>
          ) : (
            <QuestionForm
              initialTitle={question.title}
              initialDescription={question.description}
              onSubmit={(data) => {
                updateQuestion(question.id, data)
                setIsEditing(false)
              }}
              onCancel={() => setIsEditing(false)}
            />
          )}
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">
            Comments ({question.comments.length})
          </h2>

          {question.comments.length === 0 && (
            <p className="text-muted">
              No comments yet.
            </p>
          )}

          <div className="space-y-3">
            {question.comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                onUpdate={(commentId, content) =>
                  updateComment(
                    question.id,
                    commentId,
                    content
                  )
                }
              />
            ))}
          </div>

          <CommentForm
            onSubmit={(content) =>
              addComment(question.id, content)
            }
          />
        </div>
      </div>
    </AppLayout>
  )
}
