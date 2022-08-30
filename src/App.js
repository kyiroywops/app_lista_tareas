import './App.css';
import Header from './componentes/Header';
import React, {useState} from 'react';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Tarea 1',
        completada: false
      },
      {
        id: 2,
        texto: 'Tarea 1439439130',
        completada: false
      }
    ]
  );

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);
    
  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
