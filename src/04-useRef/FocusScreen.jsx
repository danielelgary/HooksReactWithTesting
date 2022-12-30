import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
    /* 
        Si se quiere darle foco a algun elemento, pero sin volver a renderizar
        la pagina...
        useRef ---> sirve para mantener una referencia y cuando esta cambia,
        no volvemos a renderizar el componente

        Uno de los usos es mantener una referencia a un elemento HTML

    */

    const inputRef = useRef()

    const onFocusWhenClick = () => {
        inputRef.current.select();
    }
  
    return (
    <>
        <h1>Focus Screen</h1>
        <hr />


        <input
            ref={ inputRef }
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control' />

        <button 
            className='btn btn-primary mt-2'
            onClick={ onFocusWhenClick }> 
            Set Focus
        </button>

    </>
  )
}
