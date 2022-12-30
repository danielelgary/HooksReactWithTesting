

export const ToDoItem = ( { toDo, onDeleteToDo, onToggleToDo } ) => {
    
    //console.log('Estoy en el Item: ', description);

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span 
                className={`align-self-center ${ (toDo.done) ? 'text-decoration-line-through' : '' }`}
                onClick={ () => onToggleToDo(toDo.id)}
                aria-label={"span"}>
                    {!!toDo.description && toDo.description}
            </span>
            <button className='btn btn-danger' onClick={ () => onDeleteToDo( toDo.id ) } >Borrar</button>
        </li>
    )
}
