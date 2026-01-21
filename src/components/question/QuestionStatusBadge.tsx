import type { QuestionStatus } from "../../types/question"

type Props = {
  status: QuestionStatus
}

const STATUS_LABEL: Record<Props['status'], string> = {
  open: 'Open',
  answered: 'Answered',
  closed: 'Closed',
}

export default function QuestionStatusBadge({ status }: Props) {
  return (
    <span className="text-xs px-2 py-1 border rounded">
      {STATUS_LABEL[status]}
    </span>
  )
}
