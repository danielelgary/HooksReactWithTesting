import { ToDoItem } from "./ToDoItem"


export const ToDoList = ( { toDo = [], onDeleteToDo, onToggleToDo } ) => {

    //console.log('Estoy en el ToDoList: ', toDo);

    return (
        <ul className='list-group'>
            {
                toDo.map( toDoItem => (
                    <ToDoItem 
                        key={toDoItem.id} 
                        toDo={toDoItem} 
                        onDeleteToDo={ onDeleteToDo }
                        onToggleToDo={ onToggleToDo } />
                ))
            }
        </ul>   
    )
}
