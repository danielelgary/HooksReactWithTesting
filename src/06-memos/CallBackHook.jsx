import { useCallback } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback(
      (value) => {
        //Asi no funcionaria porque el counter tambien lo memorizaria
        //setCounter( counter + 1 );

        //Tenemos que hacer uso del concepto de que, el setCounter por default
        //esta recibiendo el parametro que tiene que modificar
        //asi que no se define directamente para modificarlo, sino que se hace
        //a traves de una funcion lambda
        setCounter( (conteo) => conteo + value)
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather} />
    </>
  )
}
