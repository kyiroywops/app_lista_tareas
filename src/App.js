import './App.css';
import Header from './componentes/Header';
import React, {useState} from 'react';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {
    const [tareas, setTareas] = useState()  
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas />
    </div>
  );
}

export default App;
