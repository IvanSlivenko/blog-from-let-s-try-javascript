import { Routes, Route} from 'react-router-dom'

import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage'
import { PostsPage } from './pages/PostsPage'
import { PostPage } from './pages/PostPage'
import { AddPostPage } from './pages/AddPostPage'
import { EditPostPage } from './pages/EditPostPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <MainPage/>}/>
        <Route path='posts' element={ <PostsPage/>}/>
        <Route path=':id' element={<PostPage/>}/>
        <Route path='new' element={<AddPostPage/>}/>
        <Route path=':id/edit' element={<EditPostPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path="*" element={<MainPage />} /> {/* Для некоректних URL */}
      </Routes>
      <ToastContainer position="bottom-right" />
    </Layout>
  )
}

export default App;
