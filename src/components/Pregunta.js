import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarpregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  const handlePresupuesto = (e) => {
    //Le ponemos parseInt ya que los datos recogidos de un input son string, de esta manera los convertimos a numeros
    setCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      setCantidad(0);
      setError(true);
      return;
    }

    //Que hacer si pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarpregunta(false);
  };

  console.log(cantidad);
  return (
    <Fragment>
      <h2>Indica tu presupuesto</h2>
      {error ? <Error mensaje="Hubo un error en el Presupuesto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Indica tu presupuesto"
          onChange={handlePresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
