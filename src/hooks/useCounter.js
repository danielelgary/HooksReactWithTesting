import { useState } from "react"

/*
    Para poder que el hook sea utilizado desde el exterior, se debe exponer
    la funcion que es capaz de modificar el estado del mismo, en este caso seria
    el setCounter. Se debe exponer porque el custom HOOK que estamos fabricando
    se comporta igual, es decir, una variable que guarda el estado y una funcion
    que se encarga de modificarlo. pero esta funcion, esta acompañada en este
    caso por una funcion de otro HOOK interno propio de react que toca exponer
    para poder modificarlo e indirectamente modificar el custom HOOK propio.

    Hay varias maneras de exponer esta funcion, mostrare algunas de ellas y 
    quedaran comentadas, para su analisis e implementacion dentro del codigo.


*/

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const incrementar = (value = 1) => {
        // si se usa asi, el valor de counter funciona como constante
        //setCounter( counter + value );
        // se puede usar asi, para siempre usar el valor actual del counter
        setCounter( (current) => current + value );
    }

    const decrementar = (value = 1) => {
        // si se usa asi, el valor de counter funciona como constante
        //setCounter( counter - value );
        // se puede usar asi, para siempre usar el valor actual del counter
        setCounter( (current) => current - value );
    }

    const resetear = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        //al poner una funcion como retorno, se expone la misma
        incrementar,
        decrementar,
        resetear
    }
}