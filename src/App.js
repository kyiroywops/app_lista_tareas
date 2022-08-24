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
    
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
}

export default App;
