import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from '../helpers/url'
import BannerInicio from './BannerInicio';
import { BtnAgregar, CntrInfo, CntrOfertas, Descuento, Subtitulo, TarjetaProducto } from "../style/styles";

const Home = () => {

  const [informacion, setInformacion] = useState([]);
  const [carrito, setCarrito] = useState([])

  useEffect(() => {

    getData();

  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setInformacion(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const comprarProducto = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const producto = informacion.find((prod) => prod.id === Number(id));
    setCarrito([...carrito, producto])      
    localStorage.setItem("producto", JSON.stringify([...carrito, producto]));
  };

  const calcularDescuento = (pAct, pAnt) =>{

    let desc = 0

    if((pAct>0)&&(pAnt>0)){
      desc = Math.round((pAnt-pAct)*100/pAnt )
    }

    return `${String(desc)}% dto`

  }

  return (
    <div className="home">
      <BannerInicio/>
      <CntrOfertas>
        <Subtitulo>Ofertas</Subtitulo>
        {informacion.map((p) => (
            <TarjetaProducto key={p.id} id={p.id}>
              <Descuento>{calcularDescuento(p.PrecioActual, p.PrecioAnterior)}</Descuento>
              <img src={p.imagen} alt="imagen de producto" />
              <CntrInfo className="cntr-info">
                <h4>{`$${p.PrecioActual}`}</h4>
                <h4>{`$${p.PrecioAnterior}`}</h4>
                <p>{p.nombre}</p>
              </CntrInfo>
              <BtnAgregar
                id={p.id}
                onClick={(e) => {
                  comprarProducto(e);
                }}
              >
                Agregar
              </BtnAgregar>
            </TarjetaProducto>
          ))}
      </CntrOfertas>
      <div>
        <h2>Los más populares</h2>
      </div>
    </div>
  );
};

export default Home;
