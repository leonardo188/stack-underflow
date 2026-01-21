import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { QuestionProvider } from './context/QuestionContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuestionProvider>
          <App />
        </QuestionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
