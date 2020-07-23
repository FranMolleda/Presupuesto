import React, { Fragment, useState } from "react";

const Pregunta = () => {
  const [cantidad, setCantidad] = useState(0);

  const handlePresupuesto = (e) => {
    e.preventDefault();
    //Le ponemos parseInt ya que los datos recogidos de un input son string, de esta manera los convertimos a numeros
    setCantidad(parseInt(e.target.value));
  };

  console.log(cantidad);
  return (
    <Fragment>
      <h2>Indica tu presupuesto</h2>
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
