import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = () => {
    return ( 
        <form action='' className='formulario-tareas'>
            <input type='text' className='formulario-tareas__input' placeholder='Escribe una tarea'/>
            <button
                type='submit'
                className='formulario-tareas__btn'
            >
                <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />    
            </button>
        </form>
     );
}
 
export default FormularioTareas;