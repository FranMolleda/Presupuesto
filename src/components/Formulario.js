import React, { useState } from "react";

const Formulario = () => {
  return (
    <form onSubmit="submit">
      <h2>Agrega tus gastos</h2>
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />
      </div>
      <div className="campo">
        <label>Importe Gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
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
