
/*
    La idea es generar el concepto de lo que es un reducer:
    1- Debe existir un initialState
    2- Se crea la funcion que hara el trabajo del reducer
    3- El reducer lleva como atributos el state 
        ( que si no se le proporciona seria el initialState por default )
    4- Y el atributo action, el cual recibiria la accion a realizar
    esta accion nos dice, o le dira al reducer, como quiero que cambie el estado
        ( se envia la mayor parte del tiempo )
    5- El reducer siempre debe retornar un estado, que luzca como el parametro
    state, es decir, puede tener la misma estructura, o agregarle o quitarle atributos
*/

const initialState = [
    {
        id: 1,
        toDo: 'Recolectar la piedra del Alma',
        done: false,
    }
];

const toDoReducer = ( state = initialState, action = {} ) => {

    //Despues de definir la accion, la ingresamos aca para entender como es que manda un nuevo estado
    //para esto sirve el type, para determinar que accion estamos realizando
    if ( action.type === '[toDo] Add toDo' ) {
        //ahora, como yo se que la accion escogida lo que requiere es agregar un nuevo toDO
        //entonces retorno este nuevo estado, el cual es lo que viene en el estado, mas lo que trae
        //consigo misma (internamente) la accion (para esto es el payload)
        return [...state, action.payload]
    }

    return state;
};

/*
    USEMOS EL REDUCER:

    - Cuando queremos realizar alguna modificacion al state, lo que debemos hacer
    es mandarle una accion y esta es la que dira como debe modificarse.

*/

let todos = toDoReducer();
console.log(todos); //Estado inicial del reducer

// Si quisiera agregar un nuevo toDo a la lista
//podriamos entenderlo asi:
const nuevoToDo = {
    id: 2,
    toDo: 'Recolectar la piedra del Poder',
    done: false,
}

//Accion que queremos realizar
const addToDoAction = {
    //El type es un estandar para reconocer que hace la accion
    type: '[toDo] Add toDo', 
    //Carga que esta en la accion, es la accion como tal, no necesariamente va, puesto que si la accion
    //es borrar, pues no necesitamos nada de informacion extra para borrar,
    payload: nuevoToDo, 
}

//Llamamos nuevamente el reducer, con el estado anterior, es decir, el toDO que usamos antes
//para ver que ocurre... El reducer en todo momento debe de saber o contener el estado anterior
//para poder que cuando se genere el nuevo estado (la modificacion del actual) sea sobre lo que hay 
todos = toDoReducer(todos, addToDoAction);
console.log({state: todos})











