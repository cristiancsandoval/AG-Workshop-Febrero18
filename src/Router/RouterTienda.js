import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

const RouterTienda = () => {
  return (
    <BrowserRouter>
        <Router>
            <Route exact path='/' element={<Home/>}/>
        </Router>
    </BrowserRouter>
  )
}

export default RouterTienda