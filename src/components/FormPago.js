import React from "react";
import { ContForm, Back, Prod, Payment } from '../style/FormStyle'

const FormPago = () => {
  return (
    <ContForm>
    <Back><img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645375854/Workshop%202/Icons/cancel_jttgob.svg" /></Back>
    <h6>Volver</h6>
      <Prod>Productos escogidos</Prod>
      <div>
        <form id="formulario">
          <h3>Registro de usuario</h3>
          <div>
            <label>Correo electrónico</label>
            <input id="inputCorreo" type="email" name="email" />
          </div>
          <Payment>
            <label>Información de la tarjeta</label>
            <input id="inputTarjeta" type="number" name="tarjeta" />
            <input id="inputTarjeta" type="text" name="Fechatarjeta" />
            <input
              id="inputTarjeta"
              type="number"
              name="Clavetarjeta"
              min="001"
              max="999"
            />
          </Payment>
          <div>
            <label>Nombre de la tarjeta</label>
            <input id="inputNombre" type="text" name="NombreTarjeta" />
          </div>
          <div>
            <button>Pagar $227.48</button>
          </div>
        </form>
      </div>
    </ContForm>
  );
};

export default FormPago;
