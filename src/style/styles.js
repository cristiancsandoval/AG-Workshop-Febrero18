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