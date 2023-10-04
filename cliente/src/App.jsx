import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Peliculas from './pages/Peliculas'
import Series from './pages/Series'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="min-h-[calc(100vh-17rem)] w-full">

      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/peliculas' element={<Peliculas/>} />
        <Route path='/series' element={<Series/>} />
      </Routes>
      </div>
    </BrowserRouter>
    <Footer/>
     
    </>
  )
}

export default App
