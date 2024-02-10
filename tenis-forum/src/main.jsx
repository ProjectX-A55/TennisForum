import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ForumLayout from './components/ForumLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ForumLayout>
      <App />
    </ForumLayout>
  </React.StrictMode>,
)
