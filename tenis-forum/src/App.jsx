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
import CreatePost from './components/Post/CreatePost'
import PostDetailsView from './views/PostDetailsView'
import Authenticated from './hoc/Authenticated'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'
import ProfileStates from './components/Profile/ProfileStates'
import ManagePosts from './components/Post/ManagePosts'
import Footer from './components/Footer/Footer'
import NotFound from './views/404'
import AdminRoute from './hoc/AdminRoute'
import Admin from './components/Admin/Admin'

function App() {
  const [context, setContext] = useState({
    user: null,
    userData: null,
  });
  const [user, loading] = useAuthState(auth);

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
    <AppContext.Provider value={{ ...context, setContext }}>
      <BrowserRouter>
        <HeaderComponent />
        <div className='min-h-screen place-content-center flex flex-row flex-wrap content-center shrink pt-28'>
          <div className='flex-wrap content-center justify-center max-w-screen-2xl w-full h-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/posts' element={<Authenticated><ManagePosts filter={null} /></Authenticated>} />
              <Route path='/profile' element={<Authenticated><ProfileStates /></Authenticated>} />
              <Route path='/posts/:id' element={<Authenticated><PostDetailsView /></Authenticated>} />
              <Route path='/posts-create' element={<Authenticated><CreatePost /></Authenticated>} />
              <Route path='/general-discussions' element={<Authenticated><ManagePosts filter={'General Discussions'} /></Authenticated>} />
              <Route path='/live-matches' element={<Authenticated><ManagePosts filter={'Live Matches'} /></Authenticated>} />
              <Route path='/men-s-tennis' element={<Authenticated><ManagePosts filter={`Men's Tennis`} /></Authenticated>} />
              <Route path='/women-s-tennis' element={<Authenticated><ManagePosts filter={`Women's Tennis`} /></Authenticated>} />
              <Route path='/admin' element={<AdminRoute userData={context.userData}><Admin/></AdminRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />

      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
