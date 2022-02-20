import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPago from '../components/FormPago'
import Home from '../components/Home'

const RouterTienda = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/pago' element={<FormPago />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterTienda