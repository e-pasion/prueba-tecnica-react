import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'
import Series from './pages/Series'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/peliculas' element={<Peliculas/>} />
        <Route path='/series' element={<Series/>} />
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
