import React from 'react'
import { BtnCarrito, CntrNavbar, Titulo } from '../style/styles'

const Navbar = () => {
  return (
    <CntrNavbar>
        <Titulo>Tiendita</Titulo>
        <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645369853/Tiendita/Icons_p2mzlq.svg" alt="ubicacion icon"/>
        <BtnCarrito>
            <img src='https://res.cloudinary.com/dbzo53yx4/image/upload/v1645370101/Tiendita/carrito_zvbdjr.svg' alt="carrito icon"/>
            <p className='color-blanco'>5</p>
        </BtnCarrito>
    </CntrNavbar>
  )
}

export default Navbar