import { useState } from 'react'
import './App.css'
import ForumLayout from './components/ForumLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import LogIn from './views/Login'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0);

  return (
   
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
