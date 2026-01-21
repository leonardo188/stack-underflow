import { useState } from 'react'

type Props = {
  initialTitle?: string
  initialDescription?: string
  onSubmit: (data: { title: string; description: string }) => void
  onCancel?: () => void
}

export default function QuestionForm({
  initialTitle = '',
  initialDescription = '',
  onSubmit,
  onCancel,
}: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return

    onSubmit({ title, description })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Question title"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your question"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit">
          {initialTitle ? 'Update' : 'Post'}
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
