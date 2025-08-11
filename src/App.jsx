

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Post from './pages/Post'
import Counter from './pages/Counter'
import Todos from './pages/Todos'

function App() {
  return(
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='About' element={<AboutUs/>}/>
      <Route path='Contact' element={<ContactUs/>}/>
      <Route path='Post' element={<Post/>}/>
      <Route path='Counter' element={<Counter/>}/>
      <Route path='Todos' element={<Todos/>}/>

      <Route path='*' element={<NotFound/>}/>
    </Routes>

   </Router>
  )
}



export default App
