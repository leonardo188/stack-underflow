import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import QuestionListPage from '../pages/QuestionListPage'
import QuestionDetailPage from '../pages/QuestionDetailPage'
import ProtectedRoute from './ProtectedRoute'
import { useAuth } from '../context/AuthContext'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRoutes() {
  const { isLoggedIn } = useAuth()

  const redirectHome = (
    <Navigate to={isLoggedIn ? '/questions' : '/login'} replace />
  )

  return (
    <Routes>
      <Route path="/" element={redirectHome} />

      <Route
        path="/login"
        element={isLoggedIn ? redirectHome : <LoginPage />}
      />

      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <QuestionListPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/questions/:id"
        element={
          <ProtectedRoute>
            <QuestionDetailPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={isLoggedIn ? <NotFoundPage /> : redirectHome}
      />
    </Routes>
  )
}
