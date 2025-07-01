import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Support from '../components/Support';
import About from '../components/About';
import Blog from '../components/Blog';
import Contect from '../components/contect';
import NotFound from '../components/NotFound';
import MainHeeader from '../components/MainHeeader';
import { NavLink,Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <nav >
          <ul className='nv'>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/support">Support</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
            <NavLink to="/contect">Contect</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path='/' element={<MainHeeader/>} >
            {/* default Route */}
            <Route index element={<Home/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contect' element={<Contect/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
          
        </Routes>
      </div>
    </>
  )
}

export default App
