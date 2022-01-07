import React, {useState, useEffect} from 'react';
import { Formulario } from './components/Formulario';
import { Cita } from './components/Cita';

function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas")) || [];

  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use effect para realizar ciertas operaciones cuando el state cabia
  useEffect(() => {
      localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas])

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita])
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const citaTotal = citas.filter(cita => {
      return cita.id !== id
    })
    guardarCitas(citaTotal)
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Adminitra tus Citas"

  return (
    <>
      <h1>Administrador de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
