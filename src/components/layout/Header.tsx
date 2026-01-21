import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          Stack Underflow
        </h1>

        <div className="flex items-center gap-8">
          <span className="text-sm text-muted">
            Hi, {currentUser}
          </span>

          <button
            onClick={handleLogout}
            className="text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
