import { useState } from 'react'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'


import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
