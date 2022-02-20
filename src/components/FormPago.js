import React, { useEffect, useState } from "react";
import {
  ContForm,
  Back,
  BackT,
  Prod,
  Card,
  Names,
  Payment,
  Numbers,
  Entry1,
  EntryS,
  Entry2,
  Button1,
  TextC,
  TextC2,
  ImgC,
  BtnP,
} from "../style/FormStyle";

const FormPago = () => {
  const [productos, setProductos] = useState([]);
  const [pagoTotal, setPagoTotal] = useState(74.69)

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    let data = localStorage.getItem("producto");
    data = JSON.parse(data);
    setProductos(data);
  };

  return (
    <ContForm>
      <Prod>
        <Back
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645375854/Workshop%202/Icons/cancel_jttgob.svg" />
        </Back>
        <BackT>Volver</BackT>
        {productos.map((p) => (
          <Card key={p.id}>
            <ImgC src={p.imagen} />
            <div>
              <TextC>{p.nombre}</TextC>
              <TextC2>{p.PrecioActual}</TextC2>
            </div>
            <BtnP>- 250 {p.unidades} +</BtnP>
          </Card>
        ))}
      </Prod>
      <div>
        <Payment id="formulario">
          <div>
            <div>
              <Names>Correo electrónico</Names>
              <Entry1 id="inputCorreo" type="email" name="email" placeholder="Correo"/>
            </div>
            <Names>Información de la tarjeta</Names>
            <EntryS id="inputTarjeta" type="number" name="tarjeta" placeholder="Número tarjeta"/>
            <Numbers>
            <Entry2 id="inputTarjeta" type="text" name="Fechatarjeta" placeholder="Caducidad" />
            <Entry2
              id="inputTarjeta"
              type="number"
              name="Clavetarjeta"
              min="001"
              max="999"
              placeholder="CCV"
            />
            </Numbers>
          </div>
          <div>
            <Names>Nombre de la tarjeta</Names>
            <Entry1 id="inputNombre" type="text" name="NombreTarjeta"  placeholder="Propietario"/>
          </div>
          <div>
            <Button1>Pagar ${pagoTotal}</Button1>
          </div>
        </Payment>
      </div>
    </ContForm>
  );
};

export default FormPago;
