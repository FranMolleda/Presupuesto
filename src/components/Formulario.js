import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);

  const agregaGasto = (e) => {
    e.preventDefault();

    //Validar

    //Construir el gasto

    //Pasar el gasto al componente principal

    //Resetear el form
  };
  return (
    <form onSubmit={agregaGasto}>
      <h2>Agrega tus gastos</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Importe Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="u-full-width button-primary"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
