import { useState } from 'react'

type Props = {
  initialValue?: string
  onSubmit: (content: string) => void
  onCancel?: () => void
}

export default function CommentForm({
  initialValue = '',
  onSubmit,
  onCancel,
}: Props) {
  const [content, setContent] = useState(initialValue)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    onSubmit(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
      />

      <div className="flex gap-2">
        <button type="submit">
          {initialValue ? 'Update' : 'Comment'}
        </button>

        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
