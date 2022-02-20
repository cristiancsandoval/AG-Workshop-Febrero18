import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from '../helpers/url'
import BannerInicio from './BannerInicio';

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

  return (
    <div>
      <BannerInicio/>
      <div>
        <h2>Ofertas</h2>
        <div>
          {informacion.map((p) => (
            <div key={p.id} id={p.id}>
              <img src={p.imagen} alt="imagen de producto" />
              <h4>{p.precioActual}</h4>
              <h4>{p.PrecioAnterior}</h4>
              <br />
              <p>{p.nombre}</p>
              <button
                id={p.id}
                onClick={(e) => {
                  comprarProducto(e);
                }}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Los más populares</h2>
      </div>
    </div>
  );
};

export default Home;
