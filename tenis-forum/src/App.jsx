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
import ForumLayout from './components/ForumLayout'
import AllPosts from './views/AllPosts'
import SinglePost from './views/SinglePost'
import CreatePost from './views/CreatePost'

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
            console.log(snapshot.val());
            setContext({ user, userData: snapshot.val()[Object.keys(snapshot.val())[0]] });
          }
        })
    }
  }, [user]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ ...context, setContext }}>
        <ForumLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/posts' element={<AllPosts />} />
            <Route path='/posts/:id' element={<SinglePost />} />
            <Route path='/posts-create' element={<CreatePost />} />
            
          </Routes>
        </ForumLayout>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
