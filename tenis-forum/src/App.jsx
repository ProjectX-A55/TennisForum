import './App.css'
import ForumLayout from './components/ForumLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import LogIn from './views/Login'

function App() {
  
  return (
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
  )
}

export default App
