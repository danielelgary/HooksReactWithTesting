import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {

    /*
        Este componente se redibuja cada vez que existe un cambio en el state
        eso obliga a que todos los componentes hijos vuelva a redibujarse y
        esto genera un refresh bastante amplio, independiente de si el hijo 
        necesita o no renderizarse, es decir, si su valor no cambia, igual lo
        renderiza nuevamente...
        Por esto, se utiliza el memorize, se recomienda solo cuando los componentes
        son muy grandes o tienen procesos muy pesados y solo se quieren ejecutar 
        cuando las properties cambian.
        Mirar dentro del componente Small su implementacion.
    */

    const {counter, incrementar} = useCounter(0);
    const [show, setShow] = useState(true);


  return (
    <>
        <h1>Counter: <Small value={counter}/> </h1>
        <hr />

        <button
            className='btn btn-primary mt-2'
            onClick={ () => incrementar() }>
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={ () => setShow( !show ) }>
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}
