import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ agregarGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //Esto: onChange={(e) => setNombre(e.target.value)} es lo mismo que: const handleChange =() => {(e) => setNombre(e.target.value)} y pasar despues en el input el nombre de la función

  const agregaGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //Construir el gasto

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    console.log(gasto);
    //Pasar el gasto al componente principal
    agregarGasto(gasto);

    //Resetear el form
    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={agregaGasto}>
      <h2>Agrega tus gastos</h2>
      <div className="campo">
        {error ? (
          <Error mensaje="Ambos campos son obligatorios o Presupuesto es incorrecto" />
        ) : null}
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
        />{" "}
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
