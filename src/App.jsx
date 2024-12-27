import { useState } from 'react'
import GarandParantComponent from './Components/UseContextLearn/GarandParantComponent'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Components/Home'
import ViewCart from './Components/ViewCart'
import NotFound from './Components/NotFound'
import Headings from './Components/Headings'
// import './App.css'

function App() {
  const [ cart, setCart ] = useState([]);
  return (
    <>
      {/* <GarandParantComponent /> */}
      <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart= {cart} setCart={setCart} />} />
        <Route path="/cart" element={<ViewCart cart= {cart} setCart={setCart} />} />
        <Route path="/heading" element={<Headings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
