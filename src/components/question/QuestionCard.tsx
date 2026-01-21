import type { Question } from '../../types/question'
import QuestionStatusBadge from './QuestionStatusBadge'

type Props = {
  question: Question
  onClick: () => void
}

export default function QuestionCard({ question, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="border rounded p-4 cursor-pointer space-y-2 hover:border-gray-400"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{question.title}</h3>
        <QuestionStatusBadge status={question.status} />
      </div>

      <p className="text-sm text-muted line-clamp-2">
        {question.description}
      </p>

      <div className="text-xs text-muted flex justify-between">
        <span>by {question.author}</span>
        <span>{question.createdAt}</span>
      </div>
    </div>
  )
}
