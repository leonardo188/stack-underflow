import { useState } from 'react'
import CommentForm from './CommentForm'
import { useAuth } from '../../context/AuthContext'
import type { CommentDetail } from '../../types/comment'

type Props = {
  comment: CommentDetail
  onUpdate: (id: string, content: string) => void
}

export default function CommentItem({ comment, onUpdate }: Props) {
  const { currentUser } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  const canEdit = comment.author === currentUser

  return (
    <div className="border rounded p-3 space-y-2">
      {!isEditing ? (
        <>
          <p>{comment.content}</p>

          <div className="flex justify-between text-xs text-muted">
            <span>by {comment.author}</span>

            {canEdit && (
              <button onClick={() => setIsEditing(true)}>
                Edit
              </button>
            )}
          </div>
        </>
      ) : (
        <CommentForm
          initialValue={comment.content}
          onSubmit={(value) => {
            onUpdate(comment.id, value)
            setIsEditing(false)
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  )
}
