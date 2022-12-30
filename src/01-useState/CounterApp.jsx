import { useState } from "react"


//Forma normal de usar un useState
// export const CounterApp = () => {
    
//     const [counter, setCounter] = useState(10)

//     return (
//     <>
//         <h1>Counter: {counter}</h1>
//         <hr/>
//         <button className="btn" onClick={ () => setCounter(counter + 1) }>+1</button>
//     </>
//   )
// }

//usar un useState con objetos
export const CounterApp = () => {
    /*
        Cuando se tiene un objeto en el useState, o en cualquier HOOK
        hay que tener presente que se debe siempre conservar el valor del
        objeto en la actualizacion de estados, ya que cuando se actualizan
        estados, el HOOK trata de actualizar todo, refrescar todo, por lo tanto
        si no se le asigna valor a alguna, lo deja en el olvido y se pierde
        ese estado.
        Es decir, el objeto que se le pasa al setState (en este caso setCounter)
        para actualizar los valores, quiere decir que ese objeto que se le paso 
        va a ser el nuevo valor del state (counter en este caso), por lo que si se
        pasa incompleto el objeto, ese objeto incompleto, se convierte en el nuevo
        objeto del estado controlado por ese HOOK.
    */
    const [counters, setCounter] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30,
        }
    )

    const {counter1, counter2, counter3} = counters

    return (
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>
        <hr/>
        <button 
            className="btn btn-primary" 
            onClick=
            { 
                // () => setCounter(
                //     {
                //         counter1: (counter1 + 1),
                //         counter2: counter2,
                //         counter3: counter3
                //     }) 
                () => setCounter(
                    {
                        ...counters,
                        counter1: (counter1 + 1),
                    }
                )
            } 
            >+1</button>
    </>
  )
}