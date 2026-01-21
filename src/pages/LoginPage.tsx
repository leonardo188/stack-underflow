import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(username)
    navigate('/questions')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Stack Underflow
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter any username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter any password"
            />
          </div>

          <button disabled={username === '' || password === ''} type="submit" className="w-full rounded py-2 font-medium transition" >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          * This is a mocked login. Any credentials will work.
        </p>
      </div>
    </div>
  )
}
