import './App.css'
import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom'
import Home from './components/Body/Pages/Home'
import ItemListContainer from './components/Body/ItemListContainer/ItemListContainer'
import PreguntasFrecuentes from './components/Body/Pages/PreguntasFrecuentes'
import TipsYCuidados from './components/Body/Pages/TipsYCuidados'
import Contacto from './components/Body/Pages/Contacto'
import DetalleProducto from './components/Body/Pages/DetalleProducto'
import Cart from './components/Body/Pages/Cart'
import Checkout from './components/Body/Pages/Checkout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalleProducto/:detalleProductoId" element={<DetalleProducto />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/tips-y-cuidados" element={<TipsYCuidados />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
