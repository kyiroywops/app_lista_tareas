import './App.css';
import Header from './componentes/Header';
import React, {useState} from 'react';
import FormularioTareas from './componentes/FormularioTareas';

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
        texto: 'Tarea 2',
        completada: false
      }
    ]
  );
    
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
