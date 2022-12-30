import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    
    const { counter, incrementar, decrementar, resetear } = useCounter(0);
  
    return (
        <>
            <h1>Counter with HOOK: { counter }</h1>
            <hr />

            <button className='btn btn-primary' onClick={() => incrementar(2)} >+1</button>
            <button className='btn btn-primary' onClick={resetear}  >Reset</button>
            <button className='btn btn-primary' onClick={() => decrementar()}  >-1</button>

        </>
    
  )
}
