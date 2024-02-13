import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Register from './views/Register'
import LogIn from './views/Login'
import AppContext from './context/AppContext'
import { useEffect, useState } from 'react'
import { auth } from './config/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserData } from './services/user-service'
import AllPosts from './views/AllPosts'
import CreatePost from './views/CreatePost'
import PostDetailsView from './views/PostDetailsView'
import Authenticated from './hoc/Authenticated'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'
import Profile from './components/Profile/Profile'

function App() {
  const [context, setContext] = useState({
    user: null,
    userData: null,
  });
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      getUserData(user.uid)
        .then(snapshot => {
          if (snapshot.exists()) {
            setContext({ user, userData: snapshot.val()[Object.keys(snapshot.val())[0]] });
          }
        })
    }
  }, [user]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ ...context, setContext }}>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/posts' element={<Authenticated><AllPosts /></Authenticated>} />
            <Route path='/profile' element={<Authenticated><Profile /></Authenticated>} />
            <Route path='/posts/:id' element={<Authenticated><PostDetailsView /></Authenticated>} />
            <Route path='/posts-create' element={<Authenticated><CreatePost /></Authenticated>} />
          </Routes>
        
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
