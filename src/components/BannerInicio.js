import React from 'react'
import { Banner, TextoBanner } from '../style/styles'

const BannerInicio = () => {
  return (
    <Banner>
        <img className='img-banner' src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645373035/Tiendita/banner_jyjieg.svg" alt='banner'/>
        <TextoBanner>¡Adquiere todos tus productos favoritos al mejor precio!</TextoBanner>
    </Banner>
  )
}

export default BannerInicio