import React, { Fragment, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {mostrarpregunta ? (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarpregunta={setMostrarpregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario agregarGasto={agregarGasto} />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />;
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
