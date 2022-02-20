//Variables de estilos
import styled from 'styled-components'

export const CntrNavbar = styled.div`
    width: 100%;
    padding: 36px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Titulo = styled.h1`
    font-style: italic;
    font-weight: 900;
    font-size: 22px;
    line-height: 16px;
    color: #FC462D;
    flex-grow: 1;
`

export const BtnCarrito = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    margin: 0px 16px;
    background-color: #0AC763;
    border: none;
    border-radius: 8px;
`

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px;
    background-color: #FAFAF8;
    position: relative;
`

export const TextoBanner = styled.h2`
    width: 85%;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color:  #FEFEFE;
    position: absolute;
    top: 40%;
`

export const CntrOfertas = styled.div`
    margin:40px;
    padding: 40px;
    background-color: white;
    box-shadow: 0px 11px 29px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Subtitulo = styled.h2`
    width: 100%;
    align-items: left;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #333333;
`

export const TarjetaProducto = styled.div`
    width: 200px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Descuento = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #5E18BB;
    padding: 4px;
    background-color: #F0E3FE;
    border-radius: 16px;
`

export const CntrInfo = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: left;
`

export const BtnAgregar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    background-color: #0AC763;
    border-radius: 8px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FEFEFE;
    margin-top: 40px;
    width: 100%;
`