import React, { Fragment, useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  //UseEfect que actualiza el restante
  useEffect(() => {
    //Agrega el nuevo presupuesto
    if (creargasto) {
      setGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const restaGasto = restante - gasto.cantidad;
      setRestante(restaGasto);
    }

    //Despues de que se ejecute lo ponemos en false otra vez
    setCreargasto(false);
  }, [gasto, creargasto, gastos, restante]);

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
                  <Formulario
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos} />
                </div>
                <div className="one-half column">
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
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
