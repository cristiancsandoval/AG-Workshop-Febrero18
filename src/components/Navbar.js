import React, { useEffect } from 'react'
import { BtnCarrito, CntrNavbar, Titulo } from '../style/styles'

const Navbar = () => {

  return (
    <CntrNavbar>
        <Titulo>Tiendita</Titulo>
        <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645369853/Tiendita/Icons_p2mzlq.svg" alt="ubicacion icon"/>
        <select className='select-location'>
                <option>Bogotá</option>
                <option>Cali</option>
                <option>Medellín</option>
                <option>Cartagena</option>
        </select>
        <BtnCarrito onClick={() => {
            window.location.href = "/pago";
          }}>
            <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645370101/Tiendita/carrito_zvbdjr.svg' alt="carrito icon"/>
            <p className='valor-carrito'>0</p>
        </BtnCarrito>
    </CntrNavbar>
  )
}

export default Navbar