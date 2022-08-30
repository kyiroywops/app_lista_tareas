import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas}) => {

    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id){
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));


    }

    return (
        <ul className='lista-tareas'>
            {
            tareas.length > 0 ? tareas.map((tarea) => {
                return <Tarea 
                 key={tarea.id}
                 tarea={tarea}
                 toggleCompletada={toggleCompletada}
                />
            })
            : <div className='lista-tareas__mensaje'>No hay tareas</div>
        }

        </ul>
    );
}
 
export default ListaTareas;