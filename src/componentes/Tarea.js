import React from 'react';

const Tarea = ({tarea}) => {
    return (
        <li className='lista-tareas__tarea'>
            {tarea.texto}
        </li>
    );
}
 
export default Tarea;
