import { Link } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'

export default function NotFoundPage() {
  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-6">
          The page you are looking for could not be found.
        </p>

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </AppLayout>
  )
}
