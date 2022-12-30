import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('estamos en el For');
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {



    const {counter, incrementar} = useCounter(4000);
    const [show, setShow] = useState(true);

    /*
        Funciona parecido al useEffect, se le pasa una funcion que sera
        la que ejerce el trabajo pesado que no queremos estar corriendo
        dentro de [] se le pone la dependencia (es decir, que valor cuando
            cambia de estado la hace refrescar)
        asi, cuando counter cambia de valor, se lanza nuevamente la funcion
        y guarda el  valor memorizado en la variable.
    */
    const valorMemorizado = useMemo(() => heavyStuff(counter), [counter]);


  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />

        <h4>{valorMemorizado}</h4>

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
