import { useNavigate } from 'react-router-dom'
import { useQuestions } from '../context/QuestionContext'
import QuestionCard from '../components/question/QuestionCard'
import QuestionForm from '../components/question/QuestionForm'
import { useState } from 'react'
import AppLayout from '../components/layout/AppLayout'

export default function QuestionListPage() {
  const navigate = useNavigate()
  const { questions, addQuestion } = useQuestions()
  const [showForm, setShowForm] = useState(false)

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Questions</h1>

          <button onClick={() => setShowForm((v) => !v)}>
            {showForm ? 'Cancel' : 'Ask Question'}
          </button>
        </div>

        {showForm && (
          <QuestionForm
            onSubmit={(data) => {
              addQuestion(data)
              setShowForm(false)
            }}
          />
        )}

        <div className="space-y-4">
          {questions.length === 0 ? (
            <p className="text-muted">No questions yet.</p>
          ) : (
            questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onClick={() =>
                  navigate(`/questions/${question.id}`)
                }
              />
            ))
          )}
        </div>
      </div>
    </AppLayout>
  )
}
