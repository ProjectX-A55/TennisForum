import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ForumLayout from './components/ForumLayout.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ForumLayout>
        <App />
      </ForumLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
