import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cloth from './pages/Cloth'
import Shop from  './pages/Shop'
import './App.css'



function App() {
  return (
    <div className='app'>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cloth' element={<Cloth/>} />
           <Route path='/shop' element={<Shop/>} />
            <Route path='/cloth' element={<Cloth/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;