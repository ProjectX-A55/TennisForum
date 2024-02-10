import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ForumLayout from './components/ForumLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import Login from './views/Login'
import LogIn from './views/Login'


function App() {
  const [count, setCount] = useState(0);

  return (
    <ForumLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </ForumLayout>
  )
}

export default App
